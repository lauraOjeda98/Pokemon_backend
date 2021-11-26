import { PartialType } from '@nestjs/mapped-types';
import { Double } from 'typeorm';
import { CreatePokestadisticaDto } from './create-pokestadistica.dto';

export class UpdatePokestadisticaDto extends PartialType(CreatePokestadisticaDto) {
    pokemon: string;
    puntosDeSalud: number;
    ataque: number;
    defensa: number;
    ataqueEspecial: number;
    defensaEspecial: number;
    especial: number;
    velocidad: number;
    precision: Double;
    evasion: Double;
}
