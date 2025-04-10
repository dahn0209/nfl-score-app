import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekTabsComponent } from './week-tabs.component';

describe('WeekTabsComponent', () => {
  let component: WeekTabsComponent;
  let fixture: ComponentFixture<WeekTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeekTabsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeekTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
