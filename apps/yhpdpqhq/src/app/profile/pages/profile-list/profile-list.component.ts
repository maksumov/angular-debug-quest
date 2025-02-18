import { Component, inject } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProfileService } from '../../profile.service';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  imports: [CommonModule, RouterLink, AsyncPipe],
})
export class ProfileListComponent {
  profiles$ = inject(ProfileService).getProfiles();
}
