import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Task } from '@prisma/client';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}

  async tasks(): Promise<Task[]> {
    return this.prisma.task.findMany();
  }
}
