import { Controller, Get } from '@nestjs/common';
import { Task } from '@prisma/client';
import { TaskService } from 'src/services/task.service';

@Controller()
export class TaskController {
  constructor(private readonly taskService: TaskService) {}
  @Get('/task')
  async getTasks(): Promise<Task[]> {
    return this.taskService.tasks();
  }
}
