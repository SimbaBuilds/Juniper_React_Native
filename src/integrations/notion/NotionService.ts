import { NotionAuthService } from './NotionAuthService';

interface NotionTask {
  id: string;
  title: string;
  status: string;
  dueDate: string | null;
  priority: string | null;
  url: string;
  created_time: string;
  last_edited_time: string;
}

/**
 * Notion service that provides business logic methods
 * Uses NotionAuthService for authentication
 */
export class NotionService {
  private static instance: NotionService | null = null;
  private authService: NotionAuthService;
  private authCallbacks: Array<(isAuthenticated: boolean) => void> = [];

  private constructor() {
    this.authService = NotionAuthService.getInstance();
    
    // Forward auth callbacks from the auth service
    this.authService.addAuthCallback((isAuth) => {
      this.authCallbacks.forEach(callback => {
        try {
          callback(isAuth);
        } catch (error) {
          console.error('Error in auth callback:', error);
        }
      });
    });
  }

  public static getInstance(): NotionService {
    if (!NotionService.instance) {
      NotionService.instance = new NotionService();
    }
    return NotionService.instance;
  }

  /**
   * Add a callback to be notified when authentication status changes
   */
  public addAuthCallback(callback: (isAuthenticated: boolean) => void): void {
    this.authCallbacks.push(callback);
  }

  /**
   * Remove an authentication callback
   */
  public removeAuthCallback(callback: (isAuthenticated: boolean) => void): void {
    const index = this.authCallbacks.indexOf(callback);
    if (index > -1) {
      this.authCallbacks.splice(index, 1);
    }
  }

  /**
   * Initialize the service
   */
  async initialize(): Promise<void> {
    await this.authService.initialize();
  }

  /**
   * Check if authenticated
   */
  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  /**
   * Start authentication
   */
  async authenticate(): Promise<boolean> {
    return this.authService.authenticate();
  }

  /**
   * Sign out
   */
  async signOut(): Promise<void> {
    await this.authService.signOut();
  }

  /**
   * Get upcoming tasks from Notion
   */
  async getUpcomingTasks(limit: number = 10): Promise<NotionTask[]> {
    try {
      const accessToken = await this.authService.getAccessToken();
      
      // For now, return mock data since we don't have the full Notion API implementation
      // In a real implementation, this would query the Notion API for tasks
      console.log('Getting upcoming tasks from Notion...');
      
      // Mock data for demonstration
      const mockTasks: NotionTask[] = [
        {
          id: '1',
          title: 'Review project proposal',
          status: 'In Progress',
          dueDate: new Date(Date.now() + 86400000).toISOString(), // Tomorrow
          priority: 'High',
          url: 'https://notion.so/task1',
          created_time: new Date().toISOString(),
          last_edited_time: new Date().toISOString(),
        },
        {
          id: '2',
          title: 'Update documentation',
          status: 'Not Started',
          dueDate: new Date(Date.now() + 172800000).toISOString(), // Day after tomorrow
          priority: 'Medium',
          url: 'https://notion.so/task2',
          created_time: new Date().toISOString(),
          last_edited_time: new Date().toISOString(),
        },
      ];

      return mockTasks.slice(0, limit);
    } catch (error) {
      console.error('Error getting upcoming tasks:', error);
      throw error;
    }
  }

  /**
   * Create a new task in Notion
   */
  async createTask(title: string, dueDate?: string, priority?: string): Promise<NotionTask> {
    try {
      const accessToken = await this.authService.getAccessToken();
      
      // For now, return mock data since we don't have the full Notion API implementation
      console.log('Creating task in Notion:', { title, dueDate, priority });
      
      const mockTask: NotionTask = {
        id: Date.now().toString(),
        title,
        status: 'Not Started',
        dueDate: dueDate || null,
        priority: priority || null,
        url: `https://notion.so/task${Date.now()}`,
        created_time: new Date().toISOString(),
        last_edited_time: new Date().toISOString(),
      };

      return mockTask;
    } catch (error) {
      console.error('Error creating task:', error);
      throw error;
    }
  }

  /**
   * Update a task in Notion
   */
  async updateTask(taskId: string, updates: Partial<NotionTask>): Promise<NotionTask> {
    try {
      const accessToken = await this.authService.getAccessToken();
      
      // For now, return mock data since we don't have the full Notion API implementation
      console.log('Updating task in Notion:', { taskId, updates });
      
      const mockTask: NotionTask = {
        id: taskId,
        title: updates.title || 'Updated Task',
        status: updates.status || 'In Progress',
        dueDate: updates.dueDate || null,
        priority: updates.priority || null,
        url: `https://notion.so/task${taskId}`,
        created_time: new Date().toISOString(),
        last_edited_time: new Date().toISOString(),
      };

      return mockTask;
    } catch (error) {
      console.error('Error updating task:', error);
      throw error;
    }
  }
} 