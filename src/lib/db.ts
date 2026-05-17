import { openDB, DBSchema, IDBPDatabase } from 'idb';

// Core domain types for our Project-Based Architecture
export interface Project {
  id: string;
  name: string;
  description?: string;
  createdAt: number;
  updatedAt: number;
  // Settings or system prompt overrides for this project
  settings?: {
    systemPrompt?: string;
    targetAudience?: string;
    frameworks?: string[];
  };
}

export interface ProjectSession {
  id: string;
  projectId: string; // The project lifecycle this session belongs to
  title: string;
  createdAt: number;
  updatedAt: number;
  isPinned?: boolean;
}

export interface ProjectMessage {
  id: string;
  sessionId: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: number;
  modelName?: string;
  images?: { data: string; mimeType: string }[];
  thought?: string;
}

export interface ProjectFile {
  id: string;
  projectId: string;
  fileName: string;
  content: string;
  mimeType: string;
  lastModified: number;
}

// Pseudo-vector storage (we can use this to store chunks of files or chats)
export interface SemanticMemory {
  id: string;
  projectId: string;
  type: 'chat' | 'file' | 'user_rule';
  content: string; // The chunk
  sourceId?: string; // Reference to the file/message
  // In a real system, we'd have a vector: number[] attached here
  tags: string[]; // Simple keyword fallback for local without actual embedding math
  createdAt: number;
}

export interface DroideDBSchema extends DBSchema {
  projects: {
    key: string;
    value: Project;
    indexes: { 'updatedAt': number };
  };
  sessions: {
    key: string;
    value: ProjectSession;
    indexes: { 'projectId': string; 'updatedAt': number };
  };
  messages: {
    key: string;
    value: ProjectMessage;
    indexes: { 'sessionId': string; 'timestamp': number };
  };
  files: {
    key: string;
    value: ProjectFile;
    indexes: { 'projectId': string };
  };
  memories: {
    key: string;
    value: SemanticMemory;
    indexes: { 'projectId': string };
  };
}

class DatabaseManager {
  private dbPromise: Promise<IDBPDatabase<DroideDBSchema>>;

  constructor() {
    this.dbPromise = openDB<DroideDBSchema>('droide-project-db', 1, {
      upgrade(db) {
        const projectStore = db.createObjectStore('projects', { keyPath: 'id' });
        projectStore.createIndex('updatedAt', 'updatedAt');

        const sessionStore = db.createObjectStore('sessions', { keyPath: 'id' });
        sessionStore.createIndex('projectId', 'projectId');
        sessionStore.createIndex('updatedAt', 'updatedAt');

        const messageStore = db.createObjectStore('messages', { keyPath: 'id' });
        messageStore.createIndex('sessionId', 'sessionId');
        messageStore.createIndex('timestamp', 'timestamp');

        const fileStore = db.createObjectStore('files', { keyPath: 'id' });
        fileStore.createIndex('projectId', 'projectId');

        const memoryStore = db.createObjectStore('memories', { keyPath: 'id' });
        memoryStore.createIndex('projectId', 'projectId');
      },
    });
  }

  // Projects
  async getProjects(): Promise<Project[]> {
    const db = await this.dbPromise;
    return await db.getAllFromIndex('projects', 'updatedAt');
  }

  async getProject(id: string): Promise<Project | undefined> {
    const db = await this.dbPromise;
    return await db.get('projects', id);
  }

  async putProject(project: Project): Promise<void> {
    const db = await this.dbPromise;
    await db.put('projects', project);
  }

  async deleteProject(id: string): Promise<void> {
    const db = await this.dbPromise;
    
    // Start a transaction for cascading deletes
    const tx = db.transaction(['projects', 'sessions', 'messages', 'files', 'memories'], 'readwrite');
    
    // 1. Get all sessions for this project
    const sessions = await tx.objectStore('sessions').index('projectId').getAll(id);
    
    // 2. Delete messages for each session
    for (const session of sessions) {
      const messages = await tx.objectStore('messages').index('sessionId').getAll(session.id);
      for (const msg of messages) {
        await tx.objectStore('messages').delete(msg.id);
      }
      await tx.objectStore('sessions').delete(session.id);
    }
    
    // 3. Delete files for this project
    const files = await tx.objectStore('files').index('projectId').getAll(id);
    for (const file of files) {
      await tx.objectStore('files').delete(file.id);
    }
    
    // 4. Delete memories for this project
    const memories = await tx.objectStore('memories').index('projectId').getAll(id);
    for (const memory of memories) {
      await tx.objectStore('memories').delete(memory.id);
    }
    
    // 5. Finally delete the project itself
    await tx.objectStore('projects').delete(id);
    
    await tx.done;
  }

  // Sessions
  async getSessions(projectId: string): Promise<ProjectSession[]> {
    const db = await this.dbPromise;
    const allSessions = await db.getAllFromIndex('sessions', 'projectId', IDBKeyRange.only(projectId));
    return allSessions.sort((a, b) => b.updatedAt - a.updatedAt);
  }

  async putSession(session: ProjectSession): Promise<void> {
    const db = await this.dbPromise;
    await db.put('sessions', session);
  }

  async deleteSession(id: string): Promise<void> {
    const db = await this.dbPromise;
    await db.delete('sessions', id);
    // Cascade messages
  }

  // Messages
  async getMessages(sessionId: string): Promise<ProjectMessage[]> {
    const db = await this.dbPromise;
    const msgs = await db.getAllFromIndex('messages', 'sessionId', IDBKeyRange.only(sessionId));
    return msgs.sort((a, b) => a.timestamp - b.timestamp);
  }

  async putMessage(message: ProjectMessage): Promise<void> {
    const db = await this.dbPromise;
    await db.put('messages', message);
  }

  async deleteMessage(id: string): Promise<void> {
    const db = await this.dbPromise;
    await db.delete('messages', id);
  }

  // Files
  async getFiles(projectId: string): Promise<ProjectFile[]> {
    const db = await this.dbPromise;
    return await db.getAllFromIndex('files', 'projectId', IDBKeyRange.only(projectId));
  }

  async putFile(file: ProjectFile): Promise<void> {
    const db = await this.dbPromise;
    await db.put('files', file);
  }

  async deleteFile(id: string): Promise<void> {
    const db = await this.dbPromise;
    await db.delete('files', id);
  }
}

export const dbManager = new DatabaseManager();
