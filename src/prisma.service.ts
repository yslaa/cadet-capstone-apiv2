import { PrismaClient } from '@prisma/client';
import {
  INestApplication,
  Injectable,
  OnModuleInit,
  BeforeApplicationShutdown,
} from '@nestjs/common';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, BeforeApplicationShutdown
{
  async onModuleInit() {
    await this.$connect();
  }

  async beforeApplicationShutdown(signal?: string) {
    console.log(`Application is shutting down due to signal: ${signal}`);
    await this.$disconnect();
  }

  async enableShutdownHooks(app: INestApplication) {
    app.enableShutdownHooks();
  }
}
