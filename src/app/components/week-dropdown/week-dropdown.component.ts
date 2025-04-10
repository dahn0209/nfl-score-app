import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'week-dropdown',
  standalone: true,
  templateUrl: './week-dropdown.component.html',
  styleUrls: ['./week-dropdown.component.scss']
})
export class WeekDropdownComponent {
  @Input() weeks: any[] = [];
  @Input() selected: string = '';
  @Output() weekSelected = new EventEmitter<string>();
}
