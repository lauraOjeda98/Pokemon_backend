import { Test, TestingModule } from '@nestjs/testing';
import { PokestadisticasService } from './pokestadisticas.service';

describe('PokestadisticasService', () => {
  let service: PokestadisticasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PokestadisticasService],
    }).compile();

    service = module.get<PokestadisticasService>(PokestadisticasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
