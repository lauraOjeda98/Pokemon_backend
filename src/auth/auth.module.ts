import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { PokestadisticasModule } from 'src/pokestadisticas/pokestadisticas.module';
import { AuthService } from './auth.service';
import { jwtConstants } from './constants';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
  imports: [
    PokestadisticasModule,
    PassportModule,
    PassportModule.register({defaultStrategy:'jwt'}),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '3600s' },
    }),
  ],
  providers: [AuthService, LocalStrategy],
  exports: [AuthService],
})
export class AuthModule { }
