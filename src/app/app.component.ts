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

  constructor(private nbaService: NbaService) {}

  getPlayers() {
    this.nbaService.getPlayers().subscribe(
      players => {
        console.log(players);
        if (players != undefined) {
          this.results = this.getResults(players);
        }
      }, error => {
        console.error(error);
      }
    );
  }

  private getResults(players: Player[]): PlayersResult[] {
    let result = new PlayersResult();
    result.first = players[0];
    result.second = players[1];
    let results: PlayersResult[] = [];
    results.push(result);
    return results;
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

}
