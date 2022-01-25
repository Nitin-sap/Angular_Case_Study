import { Component, OnInit } from '@angular/core';
import { startPauseCount, timestampModel } from './timer.model';

@Component({
  selector: 'app-route3',
  templateUrl: './route3.component.html',
  styleUrls: ['./route3.component.css'],
})
export class Route3Component implements OnInit {
  count: number = 0;
  timestamp: timestampModel[] = [];
  startPauseCount: startPauseCount = { start: 0, pause: 0 };
  constructor() {}

  ngOnInit(): void {}

  setCounterValue(value: number) {
    this.count = value;
  }

  setTimestampValue(value: any[]) {
    this.timestamp = value;
    this.startPauseCount = {
      start: this.timestamp.filter((val) => val.type === 'started').length,
      pause: this.timestamp.filter((val) => val.type === 'paused').length,
    };
  }
}
