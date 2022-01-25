import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartPauseLogsComponent } from './start-pause-logs.component';

describe('StartPauseLogsComponent', () => {
  let component: StartPauseLogsComponent;
  let fixture: ComponentFixture<StartPauseLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartPauseLogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartPauseLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
