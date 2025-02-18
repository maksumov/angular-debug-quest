import { Controller, Get, Param } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { Profile } from './profile.model';

@Controller('profiles')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get()
  async findAll(): Promise<Profile[]> {
    return this.profileService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Profile> {
    return this.profileService.findOne(+id);
  }

  @Get('team/:team')
  async findByTeam(@Param('team') team: string): Promise<Profile[]> {
    return this.profileService.findByTeam(team);
  }
}
