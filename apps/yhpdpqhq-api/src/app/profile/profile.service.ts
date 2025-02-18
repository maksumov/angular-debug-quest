import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Profile } from './profile.model';

@Injectable()
export class ProfileService {
  constructor(
    @InjectModel(Profile)
    private profileModel: typeof Profile
  ) {}

  async findAll(): Promise<Profile[]> {
    return this.profileModel.findAll();
  }

  async findOne(id: number): Promise<Profile> {
    return this.profileModel.findOne({
      where: {
        id,
      },
    });
  }

  async findByTeam(team: string): Promise<Profile[]> {
    return this.profileModel.findAll({
      where: {
        team,
      },
    });
  }
}
