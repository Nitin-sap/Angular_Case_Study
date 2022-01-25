import { Component, OnDestroy, OnInit } from '@angular/core';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-timer-count',
  templateUrl: './timer-count.component.html',
  styleUrls: ['./timer-count.component.css'],
})
export class TimerCountComponent implements OnInit, OnDestroy {
  count: number = 0;
  timerCountSubscription: any;
  constructor(private _timerService: TimerService) {}

  ngOnInit(): void {
    this.timerCountSubscription = this._timerService
      .getCounter()
      .subscribe((val: number) => {
        console.log(val);
        this.count = val;
      });
  }

  ngOnDestroy(): void {
    this.timerCountSubscription.unsubscribe();
  }
}
