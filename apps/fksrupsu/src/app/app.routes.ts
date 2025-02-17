import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { ProfileComponent } from './pages/profile/profile.component';

export const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'about', component: AboutComponent },
  { path: 'profile', component: ProfileComponent },
];
