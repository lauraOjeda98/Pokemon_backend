import { Test, TestingModule } from '@nestjs/testing';
import { PokestadisticasController } from './pokestadisticas.controller';
import { PokestadisticasService } from './pokestadisticas.service';

describe('PokestadisticasController', () => {
  let controller: PokestadisticasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PokestadisticasController],
      providers: [PokestadisticasService],
    }).compile();

    controller = module.get<PokestadisticasController>(PokestadisticasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
