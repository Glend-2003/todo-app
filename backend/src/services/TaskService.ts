import { Task } from '../types/Task';

export class TaskService {
  // Por ahora simulamos datos, luego conectaremos PostgreSQL
  private tasks: Task[] = [
    { id: 1, title: 'Tarea de ejemplo', description: 'Descripción', completed: false, createdAt: new Date() }
  ];

  async getAllTasks(): Promise<Task[]> {
    return this.tasks;
  }

  async createTask(taskData: Partial<Task>): Promise<Task> {
    const newTask: Task = {
      id: this.tasks.length + 1,
      title: taskData.title || '',
      description: taskData.description || '',
      completed: false,
      createdAt: new Date()
    };
    
    this.tasks.push(newTask);
    return newTask;
  }

  async updateTask(id: string, taskData: Partial<Task>): Promise<Task> {
    const taskIndex = this.tasks.findIndex(task => task.id === parseInt(id));
    if (taskIndex === -1) {
      throw new Error('Tarea no encontrada');
    }
    
    this.tasks[taskIndex] = { ...this.tasks[taskIndex], ...taskData };
    return this.tasks[taskIndex];
  }

  async deleteTask(id: string): Promise<void> {
    const taskIndex = this.tasks.findIndex(task => task.id === parseInt(id));
    if (taskIndex === -1) {
      throw new Error('Tarea no encontrada');
    }
    
    this.tasks.splice(taskIndex, 1);
  }
}