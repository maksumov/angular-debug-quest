import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { authGuard } from './auth/auth.guard';
import { LayoutComponent } from './core/layout/layout.component';
import { DashboardMainComponent } from './features/dashboard/dashboard-main.component';
import { ProfilePageComponent } from './features/profile/profile-page.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: '',
        component: DashboardMainComponent,
      },
      {
        path: 'profile',
        component: ProfilePageComponent,
      },
    ],
  },
  {
    path: 'auth',
    component: AuthComponent,
  },
];
