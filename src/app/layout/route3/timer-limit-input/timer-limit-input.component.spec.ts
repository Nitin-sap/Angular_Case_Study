import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerLimitInputComponent } from './timer-limit-input.component';

describe('TimerLimitInputComponent', () => {
  let component: TimerLimitInputComponent;
  let fixture: ComponentFixture<TimerLimitInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerLimitInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerLimitInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
