import { Module } from '@nestjs/common';
import { SharedApiPrismaService } from './shared-api-prisma.service';

@Module({
  controllers: [],
  providers: [SharedApiPrismaService],
  exports: [SharedApiPrismaService],
})
export class SharedApiPrismaModule {}
