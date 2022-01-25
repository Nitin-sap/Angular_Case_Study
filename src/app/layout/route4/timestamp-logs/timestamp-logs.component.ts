import { Component, OnDestroy, OnInit } from '@angular/core';
import { timestampModel } from '../timer.model';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-timestamp-logs',
  templateUrl: './timestamp-logs.component.html',
  styleUrls: ['./timestamp-logs.component.css'],
})
export class TimestampLogsComponent implements OnInit, OnDestroy {
  timestamp: timestampModel[] = [];
  timeStampSubscription: any;
  constructor(private _timerService: TimerService) {}

  ngOnInit(): void {
    this.timeStampSubscription = this._timerService
      .getTimeStamp()
      .subscribe((val: timestampModel[]) => {
        this.timestamp = val;
      });
  }

  ngOnDestroy(): void {
    this.timeStampSubscription.unsubscribe();
  }
}
