import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(id: string, poke: string): Promise<any> {
    const pokemon = await this.authService.validatePokemon(id, poke);
    if (!pokemon) {
      throw new UnauthorizedException();
    }
    return pokemon;
  }
}