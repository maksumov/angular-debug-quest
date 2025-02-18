import { Component, inject } from '@angular/core';
import { ProfileService } from '../../profile.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-profile-details',
  imports: [AsyncPipe, RouterLink],
  templateUrl: './profile-details.component.html',
})
export class ProfileDetailsComponent {
  route = inject(ActivatedRoute);
  profileService = inject(ProfileService);

  profile$ = this.profileService.getProfile(this.route.snapshot.params['id']);
  teamMembers$ = this.profileService.getTeamMembers(
    this.route.snapshot.params['id']
  );
}
