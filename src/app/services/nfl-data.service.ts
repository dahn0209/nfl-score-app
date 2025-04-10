


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'  // This is global
})
export class NflDataService {
  private apiUrl = 'https://monkfish-app-ohv8p.ondigitalocean.app/nfl/current-season-schedule';

  constructor(private http: HttpClient) {}

  getGames(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  
}
