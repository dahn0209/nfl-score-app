import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'week-tabs',
  standalone: true,
  templateUrl: './week-tabs.component.html',
  styleUrls: ['./week-tabs.component.scss']
})
export class WeekTabsComponent {
  @Input() weeks: any[] = [];
  @Input() selected: string = '';
  @Output() weekSelected = new EventEmitter<string>();
}
