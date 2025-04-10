import { Component, Input } from '@angular/core';

@Component({
  selector: 'team-block',
  standalone: true,
  templateUrl: './team-block.component.html',
  styleUrls: ['./team-block.component.scss']
})
export class TeamBlockComponent {
  @Input()
  team: { alias: string; name: string; record: { wins: number; losses: number } } = {
    alias: '',
    name: '',
    record: { wins: 0, losses: 0 }
  };
  

  getLogo(alias: string): string {
    return `https://a.espncdn.com/i/teamlogos/nfl/500/${alias.toUpperCase()}.png`;
  }

  getLastName(name: string): string {
    return name.split(' ').at(-1) ?? name;
  }
}
