import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
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

  @Delete('/task/:id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.taskService.delete({ id });
  }
}
