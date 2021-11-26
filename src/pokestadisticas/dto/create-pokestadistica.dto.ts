import { IsInt, IsNotEmpty } from "class-validator";
import { Double } from "typeorm";

export class CreatePokestadisticaDto {    
    @IsNotEmpty()
    pokemon: string;

    @IsNotEmpty()
    @IsInt()
    puntosDeSalud: number;

    @IsNotEmpty()
    @IsInt()
    ataque: number;

    @IsNotEmpty()
    @IsInt()
    defensa: number;

    @IsNotEmpty()
    @IsInt()
    ataqueEspecial: number;

    @IsNotEmpty()
    @IsInt()
    defensaEspecial: number;

    @IsNotEmpty()
    @IsInt()
    especial: number;

    @IsNotEmpty()
    @IsInt()
    velocidad: number;

    @IsNotEmpty()
    precision: Double;

    @IsNotEmpty()
    evasion: Double;
}
