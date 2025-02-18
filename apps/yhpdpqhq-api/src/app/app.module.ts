import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProfileController } from './profile/profile.controller';
import { ProfileService } from './profile/profile.service';
import { Profile } from './profile/profile.model';
import { ProfileSeeder } from './profile/profile.seeder';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      storage: './apps/yhpdpqhq-api/src/assets/database.sqlite',
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([Profile]),
  ],
  controllers: [ProfileController],
  providers: [ProfileService, ProfileSeeder],
})
export class AppModule {}
