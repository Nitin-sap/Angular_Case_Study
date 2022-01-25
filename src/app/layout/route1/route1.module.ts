import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Route1Component } from './route1.component';

const routes: Routes = [
  {
    path: '',
    component: Route1Component,
  },
];

@NgModule({
  declarations: [Route1Component],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class Route1Module {}
