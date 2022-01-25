import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { timestampModel } from './timer.model';

@Injectable()
export class TimerService {
  public timestamp = new Subject<timestampModel[]>();
  public counter = new Subject<number>();
  constructor() {}

  setTimestamp(value: timestampModel[]) {
    this.timestamp.next(value);
  }

  getTimeStamp(): Observable<timestampModel[]> {
    return this.timestamp.asObservable();
  }

  setCounter(value: number) {
    this.counter.next(value);
  }

  getCounter(): Observable<number> {
    return this.counter.asObservable();
  }
}
