import { Body, Controller, Get, Post } from '@nestjs/common';
import { Prisma, Task } from '@prisma/client';
import { TaskService } from 'src/services/task.service';

@Controller()
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get('/task')
  async getTasks(): Promise<Task[]> {
    return this.taskService.tasks();
  }

  @Post('/task')
  async createTask(@Body() data: Prisma.TaskCreateInput): Promise<void> {
    await this.taskService.create(data);
  }
}
