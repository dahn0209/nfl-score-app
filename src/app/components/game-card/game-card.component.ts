import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { TeamBlockComponent } from '../team-block/team-block.component';
import { ScoreBlockComponent } from '../score-block/score-block.component';

interface Team {
  alias: string;
  name: string;
  record: { wins: number; losses: number };
}

interface Game {
  home: Team;
  away: Team;
  scoring: {
    home_points: number;
    away_points: number;
    periods: {
      period_type: string;
      number: number;
      clock?: string;
    }[];
  } | null;
  scheduled: string;
  venue: { name: string; city: string };
}

@Component({
  selector: 'game-card',
  standalone: true,
  imports: [NgClass, TeamBlockComponent, ScoreBlockComponent],
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent {
  @Input()
  game: Game = {
    home: { alias: '', name: '', record: { wins: 0, losses: 0 } },
    away: { alias: '', name: '', record: { wins: 0, losses: 0 } },
    scoring: null,
    scheduled: '',
    venue: { name: '', city: '' }
  };

  getGameStatusText(): string {
    const scoring = this.game.scoring;
    const periods = scoring && scoring.periods;
    const livePeriod = periods && periods.find((p) => p.clock);

    if (scoring && periods && !livePeriod) return 'FINAL';

    if (scoring && periods && livePeriod) {
      const last = periods[periods.length - 1];
      const clock = last.clock ?? '--:--';
      return `${last.period_type.toUpperCase()}${last.number} | ${clock}`;
    }

    return 'UPCOMING';
  }

  getGameStatusClass(): string {
    const scoring = this.game.scoring;
    const periods = scoring && scoring.periods;
    const livePeriod = periods && periods.find((p) => p.clock);

    if (scoring && periods && !livePeriod) return 'final';
    if (scoring && periods && livePeriod) return 'live';
    return 'upcoming';
  }
}
