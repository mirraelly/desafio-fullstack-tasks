import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Prisma, Task } from '@prisma/client';
import { TaskService } from 'src/services/task.service';

@Controller()
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get('/task')
  async getTasks(): Promise<Task[]> {
    return this.taskService.tasks();
  }

  @Get('task/:id')
  async getTask(@Param('id') id: string): Promise<Task | null> {
    const task = await this.taskService.task(id);

    if (!task) {
      throw new NotFoundException('Task not found');
    }

    return task;
  }

  @Post('/task')
  async createTask(@Body() data: Prisma.TaskCreateInput): Promise<void> {
    await this.taskService.create(data);
  }

  @Put('task/:id')
  async update(
    @Param('id') id: string,
    @Body() data: Prisma.TaskUpdateInput,
  ): Promise<void> {
    await this.taskService.update({
      where: { id },
      data,
    });
  }

  @Delete('/task/:id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.taskService.delete({ id });
  }
}
