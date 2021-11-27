import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PokestadisticasService } from './pokestadisticas.service';
import { CreatePokestadisticaDto } from './dto/create-pokestadistica.dto';
import { UpdatePokestadisticaDto } from './dto/update-pokestadistica.dto';
import { Roles } from 'src/decorators/roles.decorator';
import { Role } from 'src/enums/role.enum';

@Controller('pokestadisticas')
export class PokestadisticasController {
  constructor(private readonly pokestadisticasService: PokestadisticasService) {}

  @Post()
  @Roles(Role.Admin)
  create(@Body() createPokestadisticaDto: CreatePokestadisticaDto) {
    return this.pokestadisticasService.create(createPokestadisticaDto);
  }

  @Get()
  findAll() {
    return this.pokestadisticasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pokestadisticasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePokestadisticaDto: UpdatePokestadisticaDto) {
    return this.pokestadisticasService.update(+id, updatePokestadisticaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pokestadisticasService.remove(+id);
  }
}
