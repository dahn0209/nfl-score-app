import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { TeamBlockComponent } from '../team-block/team-block.component';
import { ScoreBlockComponent } from '../score-block/score-block.component';

@Component({
  selector: 'game-card',
  standalone: true,
  imports: [NgClass, TeamBlockComponent, ScoreBlockComponent],
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent {
  @Input() game!: any;

  getGameStatusText(): string {
    const hasScoring = this.game.scoring;
    const periods = hasScoring && this.game.scoring.periods;

    const livePeriod = periods && periods.find((p: any) => p.clock);

    if (hasScoring && periods && !livePeriod) {
      return 'FINAL';
    }

    if (hasScoring && periods && livePeriod) {
      const last = periods[periods.length - 1];
      const clock = last.clock ?? '--:--';
      return `${last.period_type.toUpperCase()}${last.number} | ${clock}`;
    }

    return 'UPCOMING';
  }

  getGameStatusClass(): string {
    const hasScoring = this.game.scoring;
    const periods = hasScoring && this.game.scoring.periods;

    const livePeriod = periods && periods.find((p: any) => p.clock);

    if (hasScoring && periods && !livePeriod) return 'final';
    if (hasScoring && periods && livePeriod) return 'live';
    return 'upcoming';
  }
}
