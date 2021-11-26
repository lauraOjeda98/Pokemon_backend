import { Column, Double, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('pokestadisticas')

export class Pokestadistica {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    pokemon: string;

    @Column()
    puntosDeSalud: number;

    @Column()
    ataque: number;

    @Column()
    defensa: number;

    @Column()
    ataqueEspecial: number;

    @Column()
    defensaEspecial: number;

    @Column()
    especial: number;

    @Column()
    velocidad: number;

    @Column("double")
    precision: Double;

    @Column("double")
    evasion: Double;
}
