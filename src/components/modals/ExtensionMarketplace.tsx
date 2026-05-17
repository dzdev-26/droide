import React, { useState, useEffect, useMemo } from 'react';
import { X, Search, CheckCircle2, Shield, Download, Trash2, Menu, Puzzle, Plus, Loader2, ExternalLink, Blocks, Link, Code, Store } from 'lucide-react';
import { allMCPServers } from '../../data/mcpServers';

interface ExtensionMarketplaceProps {
  isOpen: boolean;
  onClose: () => void;
  settings: any;
  setSettings: any;
  showToast?: (msg: string, type?: string) => void;
  vibrate?: (ms?: number) => void;
}

export function ExtensionMarketplace({ isOpen, onClose, settings, setSettings, showToast, vibrate }: ExtensionMarketplaceProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const [githubServers, setGithubServers] = useState<any[]>([]);
  const [loadingGithub, setLoadingGithub] = useState(false);
  const [showCustomForm, setShowCustomForm] = useState(false);
  const [customInput, setCustomInput] = useState('');
  const [isLoadingCustom, setIsLoadingCustom] = useState(false);

  useEffect(() => {
    if (isOpen && githubServers.length === 0) {
      setLoadingGithub(true);
      fetch('https://api.github.com/search/repositories?q=topic:mcp-server+sort:stars-desc&per_page=100')
        .then(res => res.json())
        .then(data => {
          if (data.items) {
            const mapped = data.items.map((repo: any) => ({
              id: repo.html_url,
              name: repo.name.replace(/mcp-server|mcp/gi, '').replace(/[-_]/g, ' ').trim() || repo.name,
              description: repo.description || 'An open-source MCP server.',
              category: 'Community MCPs',
              verified: false,
              author: repo.owner.login,
              url: repo.html_url,
              stars: repo.stargazers_count,
              isGithub: true
            }));
            setGithubServers(mapped);
          }
          setLoadingGithub(false);
        })
        .catch(err => {
          console.error(err);
          setLoadingGithub(false);
        });
    }
  }, [isOpen]);

  const categories = useMemo(() => {
    const cats = new Set<string>();
    allMCPServers.forEach(s => cats.add(s.category));
    return ['All', 'Installed', 'Official Skills', 'Community MCPs', 'Add Custom', ...Array.from(cats).sort()];
  }, []);

  const combinedServers = useMemo(() => {
    return [...allMCPServers.map(s => ({...s, isGithub: false})), ...githubServers];
  }, [githubServers]);

  const installedSkills = settings.installedSkills || [];

  const filteredItems = useMemo(() => {
    if (activeCategory === 'Add Custom') return [];
    
    return combinedServers.filter(server => {
      const matchSearch = server.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          server.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          server.author.toLowerCase().includes(searchQuery.toLowerCase());
      
      const isInstalled = installedSkills.some((s: any) => s.id === server.id);
      
      let matchCategory = true;
      if (activeCategory === 'All') matchCategory = true;
      else if (activeCategory === 'Installed') matchCategory = isInstalled;
      else if (activeCategory === 'Official Skills') matchCategory = !server.isGithub;
      else if (activeCategory === 'Community MCPs') matchCategory = server.isGithub;
      else matchCategory = server.category === activeCategory;
                            
      return matchSearch && matchCategory;
    });
  }, [searchQuery, activeCategory, combinedServers, installedSkills]);

  const installSkill = (skill: any) => {
    const exists = installedSkills.some((s: any) => s.id === skill.id);
    if (exists) {
      showToast?.('Skill already installed', 'info');
      return;
    }
    setSettings((p:any) => ({
      ...p,
      installedSkills: [...(p.installedSkills || []), { ...skill, installedAt: Date.now() }]
    }));
    vibrate?.(50);
    showToast?.('Skill installed successfully');
  };

  const removeSkill = (id: string | number) => {
    setSettings((p:any) => ({
      ...p,
      installedSkills: (p.installedSkills || []).filter((s:any) => s.id !== id)
    }));
    vibrate?.(30);
    showToast?.('Skill removed');
  };

  const handleLoadCustom = async () => {
    if (!customInput.trim()) return;
    setIsLoadingCustom(true);
    vibrate?.(40);

    try {
      let skillData;
      if (customInput.trim().startsWith('http')) {
        const res = await fetch(customInput.trim());
        if (!res.ok) throw new Error('Failed to fetch skill metadata');
        skillData = await res.json();
      } else {
        skillData = JSON.parse(customInput.trim());
      }

      if (Array.isArray(skillData)) skillData = skillData[0];
      if (!skillData || typeof skillData !== 'object') throw new Error('Invalid skill format.');

      let name = skillData.name || skillData.title || skillData.label || skillData.displayName;
      let description = skillData.description || skillData.summary || skillData.abstract;

      if (!name || !description) {
        throw new Error('Invalid skill format. Name and description are required.');
      }

      const newSkill = {
        ...skillData,
        id: skillData.id || `custom-${Date.now()}`,
        name: name,
        description: description,
        category: 'Custom',
        author: 'You',
        installedAt: Date.now()
      };

      installSkill(newSkill);
      setCustomInput('');
      setActiveCategory('Installed');
    } catch (err: any) {
      showToast?.(err.message || 'Error loading skill', 'error');
    } finally {
      setIsLoadingCustom(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[var(--bg-main)] z-[200] flex flex-col animate-in fade-in zoom-in-95 duration-200">
      
      {/* Header (No Blur, Solid Background) */}
      <div className="px-4 py-4 border-b border-[var(--surface-border)] flex items-center justify-between shrink-0 bg-[var(--surface)] shadow-sm z-30">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="md:hidden p-2 hover:bg-[var(--surface-hover)] rounded-full transition-colors active:scale-95"
          >
            <Menu className="w-6 h-6 text-[var(--text-primary)]" />
          </button>
          <div className="w-10 h-10 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center shrink-0 border border-[var(--accent)]/20 shadow-sm">
            <Puzzle className="w-6 h-6 text-[var(--accent)]" />
          </div>
          <div>
            <h2 className="text-xl font-black text-[var(--text-primary)] leading-tight tracking-tight">
              Extension Marketplace
            </h2>
            <p className="text-xs text-[var(--text-muted)] font-medium">Discover & install powerful AI capabilities</p>
          </div>
        </div>
        <button onClick={onClose} className="p-3 hover:bg-[var(--surface-hover)] rounded-full transition-colors active:scale-95 bg-[var(--surface-variant)] border border-[var(--surface-border)] shadow-sm">
          <X className="w-5 h-5 text-[var(--text-primary)]" />
        </button>
      </div>

      {/* Content */}
      <div className="flex flex-1 overflow-hidden relative">
        
        {/* Sidebar overlay for mobile */}
        {isSidebarOpen && (
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden" 
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Sidebar Navigation */}
        <div className={`absolute md:static inset-y-0 left-0 w-[280px] border-r border-[var(--surface-border)] bg-[var(--surface)] md:bg-[var(--surface-variant)] shrink-0 z-50 transition-transform duration-300 flex flex-col ${isSidebarOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full md:translate-x-0'}`}>
          <div className="p-5 border-b border-[var(--surface-border)] shrink-0 bg-[var(--surface)] md:bg-transparent sticky top-0 z-10">
            <h3 className="text-xs font-black uppercase tracking-widest text-[var(--text-muted)] mb-3">Browse</h3>
            <div className="relative">
              <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search extensions..." 
                className="w-full bg-[var(--bg-main)] border border-[var(--surface-border)] pl-11 pr-4 py-3 rounded-2xl text-[15px] font-medium focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/50 text-[var(--text-primary)] placeholder:text-[var(--text-muted)]/70 transition-all shadow-inner"
              />
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto p-3 space-y-1.5 no-scrollbar pb-20 md:pb-4">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setIsSidebarOpen(false);
                }}
                className={`w-full text-left px-4 py-3 text-[15px] font-bold rounded-2xl transition-all shadow-sm ${
                  activeCategory === cat 
                  ? 'bg-[var(--accent)] text-white shadow-[var(--accent)]/20' 
                  : 'text-[var(--text-secondary)] hover:bg-[var(--surface-hover)] bg-transparent hover:text-[var(--text-primary)] border border-transparent hover:border-[var(--surface-border)]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>{cat}</span>
                  {cat === 'Installed' && installedSkills.length > 0 && (
                    <span className={`text-[10px] px-2 py-0.5 rounded-full ${activeCategory === cat ? 'bg-white/20 text-white' : 'bg-[var(--surface-border)] text-[var(--text-muted)]'}`}>
                      {installedSkills.length}
                    </span>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Main Area */}
        <div className="flex-1 overflow-y-auto bg-[var(--bg-main)] p-4 sm:p-6 lg:p-8 space-y-6 max-w-7xl mx-auto w-full">
          
          {activeCategory === 'Add Custom' ? (
            <div className="max-w-2xl mx-auto mt-8 animate-in fade-in slide-in-from-bottom-4 duration-300">
               <div className="bg-[var(--surface)] border border-[var(--surface-border)] rounded-[2rem] p-8 sm:p-10 shadow-xl">
                <div className="w-16 h-16 bg-[var(--accent)]/10 rounded-2xl flex items-center justify-center mb-6 border border-[var(--accent)]/20">
                  <Code className="w-8 h-8 text-[var(--accent)]" />
                </div>
                <h3 className="text-2xl font-black text-[var(--text-primary)] mb-3">Add Custom Extension</h3>
                <p className="text-[var(--text-secondary)] font-medium mb-8 leading-relaxed">
                  Install custom MCP servers or skills by pasting their configuration URL or raw JSON manifest.
                </p>
                
                <div className="space-y-6">
                  <div className="space-y-3">
                    <label className="text-[11px] font-black text-[var(--text-muted)] uppercase tracking-widest ml-1">URL or Config JSON</label>
                    <textarea 
                      value={customInput}
                      onChange={(e) => setCustomInput(e.target.value)}
                      placeholder="https://example.com/mcp.json\n\nor\n\n{\n  &quot;name&quot;: &quot;My Tool&quot;,\n  &quot;description&quot;: &quot;Does something awesome&quot;\n}"
                      className="w-full bg-[var(--bg-main)] border border-[var(--surface-border)] rounded-2xl p-5 text-sm min-h-[200px] focus:ring-2 focus:ring-[var(--accent)]/50 focus:outline-none font-mono placeholder:opacity-40 transition-all shadow-inner"
                    />
                  </div>
                  
                  <button 
                    onClick={handleLoadCustom}
                    disabled={isLoadingCustom || !customInput.trim()}
                    className="w-full bg-[var(--accent)] disabled:opacity-50 disabled:active:scale-100 text-white font-black py-4.5 rounded-2xl shadow-lg shadow-[var(--accent)]/20 flex items-center justify-center gap-2 active:scale-[0.98] transition-all text-lg"
                  >
                    {isLoadingCustom ? <Loader2 className="w-6 h-6 animate-spin" /> : <Download className="w-6 h-6" />}
                    {isLoadingCustom ? 'Installing...' : 'Install Extension'}
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-black text-[var(--text-muted)] uppercase tracking-widest flex items-center gap-3">
                  <span className="text-[var(--accent)]">{activeCategory}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--surface-border)]"></span>
                  <span>{filteredItems.length} results</span>
                </h3>
              </div>
              
              {loadingGithub && activeCategory === 'Community MCPs' && filteredItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 text-[var(--text-muted)]">
                   <Loader2 className="w-12 h-12 animate-spin text-[var(--accent)] mb-4" />
                   <p className="text-base font-bold animate-pulse">Syncing with GitHub ecosystem...</p>
                </div>
              ) : filteredItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center p-12 text-center mt-10">
                  <div className="w-24 h-24 rounded-full bg-[var(--surface-variant)] border border-[var(--surface-border)] flex items-center justify-center mb-6 shadow-sm">
                    <Search className="w-10 h-10 text-[var(--text-muted)] opacity-50" />
                  </div>
                  <p className="text-[var(--text-primary)] font-black text-2xl mb-3">No extensions found</p>
                  <p className="text-[var(--text-secondary)] font-medium text-base max-w-sm leading-relaxed">Adjust your search query or check a different category.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 pb-20">
                  {filteredItems.map((server) => {
                    const isInstalled = installedSkills.some((s: any) => s.id === server.id);
                    return (
                      <div key={server.id} className="bg-[var(--surface)] border border-[var(--surface-border)] rounded-[24px] p-6 flex flex-col transition-all hover:shadow-xl hover:border-[var(--accent)]/30 group">
                        
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex-1 pr-4">
                            <h4 className="font-bold text-[var(--text-primary)] text-lg mb-1 leading-tight">{server.name}</h4>
                            <div className="flex flex-wrap items-center gap-2 mt-2">
                              {server.verified && (
                                <div className="flex items-center gap-1 bg-blue-500/10 text-blue-600 px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider">
                                  <Shield className="w-3.5 h-3.5" /> Verified
                                </div>
                              )}
                              {server.isGithub && (
                                <div className="flex items-center gap-1 bg-[var(--surface-hover)] border border-[var(--surface-border)] text-[var(--text-muted)] px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider">
                                  <ExternalLink className="w-3.5 h-3.5" /> Open Source
                                </div>
                              )}
                              <div className="flex items-center gap-1 bg-[var(--surface-hover)] border border-[var(--surface-border)] text-[var(--text-muted)] px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider">
                                by {server.author}
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-[14px] text-[var(--text-secondary)] font-medium line-clamp-3 mb-6 flex-1 leading-relaxed">
                          {server.description}
                        </p>
                        
                        <div className="mt-auto pt-5 border-t border-[var(--surface-border)] flex items-center justify-between">
                          {server.stars ? (
                            <span className="text-[12px] font-bold text-[#eab308] bg-[#eab308]/10 px-3 py-1.5 rounded-xl flex items-center gap-1.5">
                              ★ {server.stars}
                            </span>
                          ) : (
                            <span className="text-[12px] font-bold text-[var(--text-muted)] px-3 py-1.5 rounded-xl border border-[var(--surface-border)]">
                              Official
                            </span>
                          )}
                          
                          {isInstalled ? (
                            <button 
                              onClick={() => removeSkill(server.id)}
                              className="flex items-center gap-2 text-[13px] font-black px-5 py-2.5 rounded-xl bg-[var(--danger)]/10 text-[var(--danger)] hover:bg-[var(--danger)] hover:text-white transition-colors border border-[var(--danger)]/20 active:scale-95"
                            >
                              <Trash2 className="w-4 h-4" /> Remove
                            </button>
                          ) : (
                            <button 
                              onClick={() => installSkill(server)}
                              className="flex items-center gap-2 text-[13px] font-black px-5 py-2.5 rounded-xl bg-[var(--accent)] text-white hover:opacity-90 transition-opacity shadow-md shadow-[var(--accent)]/20 active:scale-95"
                            >
                              <Download className="w-4 h-4" /> Install
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
