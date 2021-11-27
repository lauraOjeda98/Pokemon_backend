import { Module } from '@nestjs/common';
import { PokestadisticasService } from './pokestadisticas.service';
import { PokestadisticasController } from './pokestadisticas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pokestadistica } from './entities/pokestadistica.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pokestadistica])],
  controllers: [PokestadisticasController],
  providers: [PokestadisticasService],
  exports: [PokestadisticasService]
})
export class PokestadisticasModule {}
