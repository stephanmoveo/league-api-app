import { Component, OnInit } from '@angular/core';
import { LeagueService } from '../league.service';
import { Team } from './interface';
@Component({
  selector: 'app-all-leagues',
  templateUrl: './all-leagues.component.html',
  styleUrls: ['./all-leagues.component.scss']
})



export class AllLeaguesComponent implements OnInit {

  constructor(public leagueService: LeagueService) { }

  leagueNames = [
    { name: 'English_Premier_League', title: 'Premier League', text: 'Premier League' },
    { name: 'Italian_Serie_A', title: 'Serie A', text: 'Serie A' },
    { name: 'Spanish_La_Liga', title: 'La Liga', text: 'La Liga' },
    { name: 'French_Ligue_1', title: 'Ligue 1', text: 'Ligue 1' },
    { name: 'German_Bundesliga', title: 'Bundesliga', text: 'Bundesliga' },
  ];

  teamName = "";
  allteams: Team[] = []

  getTeamByName(name: string, title: string) {
    this.leagueService.getTeams(name).subscribe(data => {
      console.log(data.teams);
      this.teamName = title
      this.allteams = data.teams
    })
  }

  ngOnInit(): void {
  }

}
