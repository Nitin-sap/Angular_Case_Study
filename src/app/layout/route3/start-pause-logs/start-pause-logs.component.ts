import { Component, Input, OnInit } from '@angular/core';
import { startPauseCount } from '../timer.model';

@Component({
  selector: 'app-start-pause-logs',
  templateUrl: './start-pause-logs.component.html',
  styleUrls: ['./start-pause-logs.component.css'],
})
export class StartPauseLogsComponent implements OnInit {
  @Input() startPauseCount: startPauseCount = {
    start: 0,
    pause: 0,
  };
  constructor() {}

  ngOnInit(): void {}
}
