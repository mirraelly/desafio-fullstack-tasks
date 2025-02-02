import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { TaskController } from './controllers/task.controller';
import { TaskService } from './services/task.service';
import { PrismaService } from './services/prisma.service';

@Module({
  imports: [],
  controllers: [AppController, TaskController],
  providers: [AppService, TaskService, PrismaService],
})
export class AppModule {}
