import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PokestadisticasService } from 'src/pokestadisticas/pokestadisticas.service';

@Injectable()
export class AuthService {
    constructor(
        private pokestadisticas: PokestadisticasService,
        private jwtService: JwtService
    ) { }

    async validatePokemon(id: string, pokemon: string): Promise<any> {
        const poke = await this.pokestadisticas.findOne(parseInt(id));
        if (poke.pokemon === pokemon) {
            const result = poke;
            return result;
        }
        return null;
    }

    async login(pokemon: any) {
        const payload = { pokemonName: pokemon.pokemon, sub: pokemon.id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
