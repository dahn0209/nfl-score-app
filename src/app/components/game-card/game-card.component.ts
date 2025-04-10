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
    if (this.game.scoring && !this.game.scoring.periods?.some((p: any) => p.clock)) return 'FINAL';
    if (this.game.scoring?.periods?.some((p: any) => p.clock)) {
      const last = this.game.scoring.periods.at(-1);
      return `${last.period_type.toUpperCase()}${last.number} | ${last.clock ?? '--:--'}`;
    }
    return 'UPCOMING';
  }

  getGameStatusClass(): string {
    if (this.game.scoring && !this.game.scoring.periods?.some((p: any) => p.clock)) return 'final';
    if (this.game.scoring?.periods?.some((p: any) => p.clock)) return 'live';
    return 'upcoming';
  }
}
