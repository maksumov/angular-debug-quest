import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from './profile.model';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private readonly http = inject(HttpClient);

  getProfiles(): Observable<Profile[]> {
    return this.http.get<Profile[]>('http://localhost:3000/api/profiles');
  }

  getProfile(id: string): Observable<Profile> {
    return this.http.get<Profile>(`http://localhost:3000/api/profiles/${id}`);
  }

  getTeamMembers(team: string): Observable<Profile[]> {
    return this.http.get<Profile[]>(
      `http://localhost:3000/api/profiles?team=${team}`
    );
  }
}
