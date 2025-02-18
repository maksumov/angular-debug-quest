import { Route } from '@angular/router';
import { ProfileListComponent } from './profile/pages/profile-list/profile-list.component';
import { ProfileDetailsComponent } from './profile/pages/profile-details/profile-details.component';

export const appRoutes: Route[] = [
  { path: '', redirectTo: 'profiles', pathMatch: 'full' },
  { path: 'profiles', component: ProfileListComponent },
  { path: 'profiles/:id', component: ProfileDetailsComponent },
];
