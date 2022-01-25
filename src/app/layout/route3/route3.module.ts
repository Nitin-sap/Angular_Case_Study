import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route3Component } from './route3.component';
import { RouterModule, Routes } from '@angular/router';
import { TimerCountComponent } from './timer-count/timer-count.component';
import { TimerLimitInputComponent } from './timer-limit-input/timer-limit-input.component';
import { TimestampLogsComponent } from './timestamp-logs/timestamp-logs.component';
import { StartPauseLogsComponent } from './start-pause-logs/start-pause-logs.component';
import { FormsModule } from '@angular/forms';
const routes: Routes = [
  {
    path: '',
    component: Route3Component,
  },
];

@NgModule({
  declarations: [
    Route3Component,
    TimerCountComponent,
    TimerLimitInputComponent,
    TimestampLogsComponent,
    StartPauseLogsComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
})
export class Route3Module {}
