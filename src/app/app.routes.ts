import { Routes } from '@angular/router';
import { DCHeroListComponent } from './features/heroes/pages/dc-hero-list/dc-hero-list.component';

export const routes: Routes = [
  { path: 'dc-heroes', component: DCHeroListComponent },
  { path: '', redirectTo: '/dc-heroes', pathMatch: 'full' },
];
