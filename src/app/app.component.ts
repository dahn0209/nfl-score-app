// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.scss'
// })
// export class AppComponent {
//   title = 'nfl-scores-app';
// }

import { Component } from '@angular/core';
import { GameListComponent } from './components/game-list/game-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GameListComponent],
  template: `<app-game-list />`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}


