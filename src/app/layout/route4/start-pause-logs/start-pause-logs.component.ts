import { Component, OnDestroy, OnInit } from '@angular/core';
import { startPauseCount, timestampModel } from '../timer.model';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-start-pause-logs',
  templateUrl: './start-pause-logs.component.html',
  styleUrls: ['./start-pause-logs.component.css'],
})
export class StartPauseLogsComponent implements OnInit, OnDestroy {
  startPauseCount: startPauseCount = {
    start: 0,
    pause: 0,
  };
  timeStampSubscription: any;

  constructor(private _timerService: TimerService) {}

  ngOnInit(): void {
    this.timeStampSubscription = this._timerService
      .getTimeStamp()
      .subscribe((res: timestampModel[]) => {
        this.startPauseCount = {
          start: res.filter((val) => val.type === 'started').length,
          pause: res.filter((val) => val.type === 'paused').length,
        };
      });
  }

  ngOnDestroy(): void {
    this.timeStampSubscription.unsubscribe();
  }
}
