import { Request, Response } from 'express';
import { TaskService } from '../services/TaskService';

export class TaskController {
  private taskService = new TaskService();

  getAllTasks = async (req: Request, res: Response) => {
    try {
      const tasks = await this.taskService.getAllTasks();
      res.json(tasks);
    } catch (error) {
      res.status(500).json({ error: 'Error obteniendo tareas' });
    }
  };

  createTask = async (req: Request, res: Response) => {
    try {
      const task = await this.taskService.createTask(req.body);
      res.status(201).json(task);
    } catch (error) {
      res.status(500).json({ error: 'Error creando tarea' });
    }
  };

  updateTask = async (req: Request, res: Response) => {
    try {
      const task = await this.taskService.updateTask(req.params.id, req.body);
      res.json(task);
    } catch (error) {
      res.status(500).json({ error: 'Error actualizando tarea' });
    }
  };

  deleteTask = async (req: Request, res: Response) => {
    try {
      await this.taskService.deleteTask(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'Error eliminando tarea' });
    }
  };
}