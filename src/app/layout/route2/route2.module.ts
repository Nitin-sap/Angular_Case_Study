import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route2Component } from './route2.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: Route2Component,
  },
];

@NgModule({
  declarations: [Route2Component],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class Route2Module {}
