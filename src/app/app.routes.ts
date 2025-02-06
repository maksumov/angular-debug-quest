import { Routes } from '@angular/router';
import { DCHeroListComponent } from './features/heroes/pages/dc-hero-list/dc-hero-list.component';
import { MarvelHeroListComponent } from './features/heroes/pages/marvel-hero-list/marvel-hero-list.component';
import { AppComponent } from './app.component';
export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'dc-heroes', component: DCHeroListComponent },
  { path: 'marvel-heroes', component: MarvelHeroListComponent },
  { path: '', redirectTo: '/dc-heroes', pathMatch: 'full' },
];
