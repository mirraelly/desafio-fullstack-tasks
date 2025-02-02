import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Prisma, Task } from '@prisma/client';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}

  async tasks(): Promise<Task[]> {
    return this.prisma.task.findMany();
  }

  async create(data: Prisma.TaskCreateInput): Promise<void> {
    await this.prisma.task.create({ data });
  }

  async update(params: {
    where: Prisma.TaskWhereUniqueInput;
    data: Prisma.TaskUpdateInput;
  }): Promise<Task> {
    const { data, where } = params;
    return this.prisma.task.update({
      data,
      where,
    });
  }

  async delete(where: Prisma.TaskWhereUniqueInput): Promise<void> {
    await this.prisma.task.delete({ where });
  }
}
