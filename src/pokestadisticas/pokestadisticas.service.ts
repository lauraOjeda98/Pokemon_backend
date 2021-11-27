import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePokestadisticaDto } from './dto/create-pokestadistica.dto';
import { UpdatePokestadisticaDto } from './dto/update-pokestadistica.dto';
import { Pokestadistica } from './entities/pokestadistica.entity';

@Injectable()
export class PokestadisticasService {
  constructor(
    @InjectRepository(Pokestadistica) private pokestadisticaRepository: Repository<Pokestadistica>
  ){}

  create(createPokestadisticaDto: CreatePokestadisticaDto) {
    return this.pokestadisticaRepository.save(createPokestadisticaDto);
  }

  findAll() {
    return this.pokestadisticaRepository.find();
  }
  
  async findOne(id: number) {
    return await this.pokestadisticaRepository.findOne(id);
  }

  update(id: number, updatePokestadisticaDto: UpdatePokestadisticaDto) {
    return this.pokestadisticaRepository.update(id, updatePokestadisticaDto);
  }

  remove(id: number) {
    return this.pokestadisticaRepository.delete(id);
  }
}
