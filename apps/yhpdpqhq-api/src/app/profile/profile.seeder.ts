import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Profile } from './profile.model';

@Injectable()
export class ProfileSeeder {
  constructor(
    @InjectModel(Profile)
    private profileModel: typeof Profile
  ) {}

  async seed() {
    // Check if any profiles exist
    const count = await this.profileModel.count();

    // Only seed if the table is empty
    if (count === 0) {
      const profiles = [
        {
          name: 'Sarah Chen',
          team: 'Frontend Platform',
          email: 'sarah.chen@company.com',
        },
        {
          name: 'Marcus Rodriguez',
          team: 'Frontend Platform',
          email: 'marcus.rodriguez@company.com',
        },
        {
          name: 'Priya Patel',
          team: 'Frontend Platform',
          email: 'priya.patel@company.com',
        },
        {
          name: 'James Wilson',
          team: 'Frontend Platform',
          email: 'james.wilson@company.com',
        },
        {
          name: 'Aisha Mohammed',
          team: 'Frontend Platform',
          email: 'aisha.mohammed@company.com',
        },
      ];

      await this.profileModel.bulkCreate(profiles);
    }
  }
}
