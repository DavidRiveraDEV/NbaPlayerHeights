import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from 'rxjs/operators';
import {Player} from "../model/Player";
import {PlayersResponse} from "../model/PlayersResponse";

@Injectable({
  providedIn: 'root'
})
export class NbaService {

  private BASE_URL = 'https://mach-eight.uc.r.appspot.com/';

  constructor(private http: HttpClient) {}

  getPlayers(): Observable<Player[] | undefined> {
    return this.http.get(this.BASE_URL).pipe(
      map(response => {
        return Object.assign(new PlayersResponse(), response).values;
      })
    );
  }
}
