import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeagueService {

  constructor(public http: HttpClient) {
  }

  getTeams(name: any): Observable<any> {
    return this.http.get(`https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=${name}`)
  }
}
