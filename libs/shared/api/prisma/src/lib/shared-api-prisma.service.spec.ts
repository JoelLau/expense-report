import { Test } from '@nestjs/testing';
import { SharedApiPrismaService } from './shared-api-prisma.service';

describe('SharedApiPrismaService', () => {
  let service: SharedApiPrismaService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [SharedApiPrismaService],
    }).compile();

    service = module.get(SharedApiPrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
