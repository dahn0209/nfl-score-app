import { Component, OnInit } from '@angular/core';
import { NflDataService } from '../../services/nfl-data.service';
import { GameCardComponent } from '../game-card/game-card.component';
import { WeekDropdownComponent } from '../week-dropdown/week-dropdown.component';
import { WeekTabsComponent } from '../week-tabs/week-tabs.component';

@Component({
  selector: 'app-game-list',
  standalone: true,
  imports: [
    GameCardComponent,
    WeekDropdownComponent,
    WeekTabsComponent
  ],
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {
  weeks: any[] = [];
  selectedWeekTitle = '';
  selectedWeekGames: any[] = [];

  dummyLiveGame = {
    home: {
      alias: 'KC',
      name: 'Kansas City Chiefs',
      record: { wins: 3, losses: 1 }
    },
    away: {
      alias: 'BUF',
      name: 'Buffalo Bills',
      record: { wins: 2, losses: 2 }
    },
    scoring: {
      home_points: 10,
      away_points: 13,
      periods: [
        { period_type: 'Q', number: 2, clock: '7:23' }
      ]
    },
    scheduled: new Date().toISOString(),
    venue: {
      name: 'Arrowhead Stadium',
      city: 'Kansas City'
    }
  };

  constructor(private nflService: NflDataService) {}

  ngOnInit() {
    this.nflService.getGames().subscribe((data) => {
      this.weeks = data.weeks;
      const currentWeek = this.weeks.find((w: any) => w.current);
      this.selectWeek(currentWeek?.title || this.weeks[0]?.title);
    });
  }

  selectWeek(weekTitle: string) {
    this.selectedWeekTitle = weekTitle;
    const week = this.weeks.find(w => w.title === weekTitle);
    this.selectedWeekGames = week?.games ?? [];

    this.selectedWeekGames.unshift(this.dummyLiveGame);

  }
}
