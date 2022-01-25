import { Component, Input, OnInit } from '@angular/core';
import { timestampModel } from '../timer.model';

@Component({
  selector: 'app-timestamp-logs',
  templateUrl: './timestamp-logs.component.html',
  styleUrls: ['./timestamp-logs.component.css'],
})
export class TimestampLogsComponent implements OnInit {
  @Input() timestamp: timestampModel[] = [];
  constructor() {}

  ngOnInit(): void {}
}
