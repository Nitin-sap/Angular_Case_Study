import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimestampLogsComponent } from './timestamp-logs.component';

describe('TimestampLogsComponent', () => {
  let component: TimestampLogsComponent;
  let fixture: ComponentFixture<TimestampLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimestampLogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimestampLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
