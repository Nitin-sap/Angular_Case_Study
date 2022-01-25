import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route4Component } from './route4.component';
import { RouterModule, Routes } from '@angular/router';
import { TimerCountComponent } from './timer-count/timer-count.component';
import { StartPauseLogsComponent } from './start-pause-logs/start-pause-logs.component';
import { TimestampLogsComponent } from './timestamp-logs/timestamp-logs.component';
import { TimerLimitInputComponent } from './timer-limit-input/timer-limit-input.component';
import { FormsModule } from '@angular/forms';
import { TimerService } from './timer.service';

const routes: Routes = [
  {
    path: '',
    component: Route4Component,
  },
];

@NgModule({
  declarations: [
    Route4Component,
    TimerCountComponent,
    StartPauseLogsComponent,
    TimestampLogsComponent,
    TimerLimitInputComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
  providers: [TimerService],
})
export class Route4Module {}
