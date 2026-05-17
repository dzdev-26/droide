import React, { useState, useEffect } from 'react';
import { Project, dbManager } from '../../lib/db';
import { Settings, Plus, Folder, Trash2, Check, Clock, Edit2, X } from 'lucide-react';

interface ProjectWorkspaceModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentProjectId: string | null;
  onProjectSelect: (id: string) => void;
  onProjectDelete: (id: string) => void;
}

export const ProjectWorkspaceModal: React.FC<ProjectWorkspaceModalProps> = ({
  isOpen, onClose, currentProjectId, onProjectSelect, onProjectDelete
}) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isCreating, setIsCreating] = useState(false);
  const [newName, setNewName] = useState('');
  const [newDesc, setNewDesc] = useState('');

  useEffect(() => {
    if (isOpen) {
      loadProjects();
    }
  }, [isOpen]);

  const loadProjects = async () => {
    const p = await dbManager.getProjects();
    setProjects(p);
  };

  const handleCreate = async () => {
    if (!newName.trim()) return;
    const newProject: Project = {
      id: Date.now().toString(),
      name: newName,
      description: newDesc,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      settings: {}
    };
    await dbManager.putProject(newProject);
    await loadProjects();
    setIsCreating(false);
    setNewName('');
    setNewDesc('');
  };

  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);

  const handleDelete = async (id: string) => {
    await dbManager.deleteProject(id);
    await loadProjects();
    onProjectDelete(id);
    setDeleteConfirmId(null);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 z-[300] flex items-center justify-center p-4">
      <div className="bg-[var(--bg-main)] rounded-3xl w-full max-w-lg shadow-2xl flex flex-col max-h-[85vh] animate-in zoom-in-95 duration-200">
        {deleteConfirmId ? (
          <div className="p-8 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 text-red-500 rounded-full flex items-center justify-center mb-6">
              <Trash2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-3 tracking-tight">Delete Workspace?</h3>
            <p className="text-[var(--text-secondary)] text-sm mb-8 leading-relaxed max-w-xs">
              This will permanently remove this workspace and <span className="font-bold text-red-500">all associated chats and files</span>. This cannot be undone.
            </p>
            <div className="w-full flex flex-col gap-3">
              <button 
                onClick={() => handleDelete(deleteConfirmId)} 
                className="w-full py-4 bg-red-500 text-white rounded-2xl font-bold active:scale-95 transition-all shadow-lg shadow-red-500/20"
              >
                Delete Everything
              </button>
              <button 
                onClick={() => setDeleteConfirmId(null)} 
                className="w-full py-3 text-[var(--text-muted)] font-bold hover:text-[var(--text-primary)] transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="p-5 border-b border-[var(--surface-border)] flex justify-between items-center bg-[var(--surface-hover)] rounded-t-3xl">
              <div>
                <h2 className="text-xl font-bold flex items-center gap-2"><Folder className="w-5 h-5 text-[var(--accent)]" /> Project Workspaces</h2>
                <p className="text-xs text-[var(--text-muted)] mt-1">Isolate your chats, files, and context.</p>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-[var(--bg-main)] rounded-full transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {isCreating ? (
                <div className="p-4 bg-[var(--surface-hover)] rounded-2xl border border-[var(--surface-border)]">
                  <h3 className="font-semibold mb-3">Create New Workspace</h3>
                   <input
                    autoFocus
                    type="text"
                    placeholder="Project Name (e.g., E-Commerce App)"
                    value={newName}
                    onChange={e => setNewName(e.target.value)}
                    className="w-full bg-[var(--bg-main)] border border-[var(--surface-border)] rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-[var(--accent)] mb-3"
                  />
                  <textarea
                    placeholder="Description of the project context..."
                    value={newDesc}
                    onChange={e => setNewDesc(e.target.value)}
                    className="w-full bg-[var(--bg-main)] border border-[var(--surface-border)] rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-[var(--accent)] h-20 resize-none mb-3"
                  />
                  <div className="flex justify-end gap-2">
                    <button onClick={() => setIsCreating(false)} className="px-4 py-2 text-xs font-semibold rounded-lg hover:bg-[var(--bg-main)] transition-colors">Cancel</button>
                    <button onClick={handleCreate} className="px-4 py-2 text-xs font-semibold bg-[var(--accent)] text-white rounded-lg shadow-md hover:opacity-90 transition-colors">Create</button>
                  </div>
                </div>
              ) : (
                <button onClick={() => setIsCreating(true)} className="w-full p-4 border border-dashed border-[var(--accent)]/50 rounded-2xl text-[var(--accent)] font-medium text-sm flex items-center justify-center gap-2 hover:bg-[var(--accent)]/5 transition-colors">
                   <Plus className="w-4 h-4" /> New Workspace
                </button>
              )}

              <div className="space-y-2 mt-4">
                 {projects.map(p => (
                    <div key={p.id} className={`p-4 rounded-2xl border transition-all cursor-pointer group ${currentProjectId === p.id ? 'border-[var(--accent)] bg-[var(--accent)]/5' : 'border-[var(--surface-border)] bg-[var(--surface-hover)] hover:border-[var(--text-muted)]'}`} onClick={() => onProjectSelect(p.id)}>
                       <div className="flex justify-between items-start">
                         <div>
                            <div className="flex items-center gap-2">
                              <h4 className="font-bold text-sm text-[var(--text-primary)]">{p.name}</h4>
                              {currentProjectId === p.id && <span className="bg-[var(--accent)] text-white text-[10px] px-2 py-0.5 rounded-full font-bold">ACTIVE</span>}
                            </div>
                            {p.description && <p className="text-xs text-[var(--text-muted)] mt-1 line-clamp-2">{p.description}</p>}
                         </div>
                         <button onClick={(e) => { e.stopPropagation(); setDeleteConfirmId(p.id); }} className="p-2 text-red-500 hover:bg-red-500/10 rounded-full transition-all">
                           <Trash2 className="w-5 h-5" />
                         </button>
                       </div>
                    </div>
                 ))}
                 {projects.length === 0 && !isCreating && (
                    <div className="text-center py-10 opacity-50">
                       <Folder className="w-10 h-10 mx-auto mb-2 text-[var(--text-muted)]" />
                       <p className="text-sm text-[var(--text-muted)]">No workspaces created yet.</p>
                    </div>
                 )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
