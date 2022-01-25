import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { timestampModel } from '../timer.model';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-timer-limit-input',
  templateUrl: './timer-limit-input.component.html',
  styleUrls: ['./timer-limit-input.component.css'],
})
export class TimerLimitInputComponent implements OnInit, OnDestroy {
  timerLimit: number = 0;
  timeInterval: any;
  pause: boolean = true;
  startPauseBtnDisabled: boolean = false;
  timeStamp: timestampModel[] = [];

  constructor(private _timerService: TimerService) {}

  ngOnInit(): void {}

  get pausedTimeInterval(): number[] {
    return this.timeStamp
      .filter((val) => val.type === 'paused')
      .map((val) => val.interval);
  }

  resetTimer(): void {
    this.timerLimit = 0;
    this.pause = true;
    this.startPauseBtnDisabled = false;
    this.timeStamp = [];
    this._timerService.setTimestamp(this.timeStamp);
    this._timerService.setCounter(this.timerLimit);
    clearInterval(this.timeInterval);
  }

  startPauseTimer(event: Event, form: NgForm): void {
    event?.preventDefault();

    this.pause = !this.pause;

    if (this.pause) {
      //
      // pause timer
      clearInterval(this.timeInterval);
      this.timeStamp.push({
        datetime: new Date(),
        interval: this.timerLimit,
        type: 'paused',
      });
      this._timerService.setTimestamp(this.timeStamp);
    } else {
      //
      // Start Timer
      this.timeStamp.push({
        datetime: new Date(),
        interval: this.timerLimit,
        type: 'started',
      });
      this._timerService.setTimestamp(this.timeStamp);
      this.timerLimit = !this.timerLimit
        ? form.value.timerLimit
        : this.timerLimit;
      this._timerService.setCounter(this.timerLimit);
      this.timeInterval = setInterval(() => {
        if (this.timerLimit > 0) {
          this.timerLimit--;
          this._timerService.setCounter(this.timerLimit);
        } else {
          this.startPauseBtnDisabled = true;
          this._timerService.setCounter(this.timerLimit);
          this.pause = true;
          clearInterval(this.timeInterval);
        }
      }, 1000);
    }
  }

  ngOnDestroy(): void {
    this.resetTimer();
  }
}
