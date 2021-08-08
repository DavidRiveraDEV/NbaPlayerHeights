import { Component } from '@angular/core';
import {NbaService} from "./service/nba.service";
import {Player} from "./model/Player";
import {PlayersResult} from "./model/PlayersResult";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NbaService]
})
export class AppComponent {

  title = 'NBA Player Heights';
  height: number = 0;
  results: PlayersResult[] | undefined;
  displayHeight = false;
  loading = false;
  error = false;

  constructor(private nbaService: NbaService) {}

  getPlayers() {
    this.loading = true;
    this.error = false;
    this.nbaService.getPlayers().subscribe(
      players => {
        if (players != undefined) {
          this.results = this.getResults(players, this.height);
        } else {
          this.results = [];
        }
        this.loading = false;
      }, error => {
        console.error(error);
        this.loading = false;
        this.error = true;
        this.results = [];
      }
    );
  }

  getResults(players: Player[], height: number): PlayersResult[] {//OK
    let result: PlayersResult[] = [];
    let low = 0;
    let high = players.length - 1;
    while (low < high) {
      if (Number(players[low].h_in!) + Number(players[high].h_in!) == height) {
        let playerResult = new PlayersResult();
        playerResult.first = players[low];
        playerResult.second = players[high];
        result.push(playerResult);
      }
      if (high > low + 1) {
        high--;
      } else {
        high = players.length - 1;
        low++;
      }
    }
    return result;
  }

  public getFullName(player: Player): string {
    let fullName = "";
    if (player.first_name) {
      fullName = player.first_name;
    }
    if (player.last_name) {
      fullName += ' ' + player.last_name;
    }
    return fullName;
  }

  public getDisplayableHeight(player: Player): string {
    return this.displayHeight ? `Height: ${player.h_in} inches` : '';
  }
}
