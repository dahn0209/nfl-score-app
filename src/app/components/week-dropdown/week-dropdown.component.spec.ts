import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekDropdownComponent } from './week-dropdown.component';

describe('WeekDropdownComponent', () => {
  let component: WeekDropdownComponent;
  let fixture: ComponentFixture<WeekDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeekDropdownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeekDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
