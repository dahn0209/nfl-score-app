import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'score-block',
  standalone: true,
  imports: [NgClass],
  templateUrl: './score-block.component.html',
  styleUrls: ['./score-block.component.scss']
})
export class ScoreBlockComponent {
  @Input() game!: any;

  getGameStatusText(): string {
    if (this.game.scoring && !this.game.scoring.periods?.some((p: any) => p.clock)) {
      return 'FINAL';
    }
    if (this.game.scoring?.periods?.some((p: any) => p.clock)) {
      const last = this.game.scoring.periods.at(-1);
      return `${last.period_type.toUpperCase()}${last.number} | ${last.clock ?? '--:--'}`;
    }
    return 'UPCOMING';
  }

  getScoreColorClass(isHome: boolean): string {
    const status = this.getGameStatusText();
  
    if (status.includes('Q') || status.includes('OT')) {
      return 'score-white';
    }
  
    if (!this.game.scoring || status !== 'FINAL') return '';
    const h = this.game.scoring.home_points ?? 0;
    const a = this.game.scoring.away_points ?? 0;
    const isWinner = isHome ? h > a : a > h;
    return isWinner ? 'score-white' : 'score-gray';
  }
  

  formatUpcomingDate(dateStr: string): string {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric'
    });
  }

  formatUpcomingTime(dateStr: string): string {
    const d = new Date(dateStr);
    return d.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  }

  formatGameTime(dateStr: string): string {
    const d = new Date(dateStr);
    return d.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
  }
}
