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
  @Input()
  game: {
    home: {
      alias: string;
      name: string;
      record: { wins: number; losses: number };
    };
    away: {
      alias: string;
      name: string;
      record: { wins: number; losses: number };
    };
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
    venue: {
      name: string;
      city: string;
    };
  } = {
    home: { alias: '', name: '', record: { wins: 0, losses: 0 } },
    away: { alias: '', name: '', record: { wins: 0, losses: 0 } },
    scoring: null,
    scheduled: '',
    venue: { name: '', city: '' }
  };

  getGameStatusText(): string {
    const scoring = this.game.scoring;
    const periods = scoring && scoring.periods;

    if (scoring && periods && !periods.some((p) => p.clock)) {
      return 'FINAL';
    }

    if (scoring && periods && periods.some((p) => p.clock)) {
      const last = periods[periods.length - 1];
      const clock = last.clock !== undefined && last.clock !== null ? last.clock : '--:--';
      return `${last.period_type.toUpperCase()}${last.number} | ${clock}`;
    }

    return 'UPCOMING';
  }

  getScoreColorClass(isHome: boolean): string {
    const status = this.getGameStatusText();

    if (status.includes('Q') || status.includes('OT')) {
      return 'score-white';
    }

    const scoring = this.game.scoring;
    if (!scoring || status !== 'FINAL') return '';

    const h = scoring.home_points !== undefined ? scoring.home_points : 0;
    const a = scoring.away_points !== undefined ? scoring.away_points : 0;
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
      hour12: true
    });
  }
}
