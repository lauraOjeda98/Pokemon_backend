import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PokestadisticasModule } from './pokestadisticas/pokestadisticas.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'pokemon_db',
      autoLoadEntities: true,
      synchronize: true,
    }),
    PokestadisticasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
