import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route5Component } from './route5.component';
import { RouterModule, Routes } from '@angular/router';
import { SortTableDataPipe } from 'src/app/common/pipes/sort-table-data.pipe';

const routes: Routes = [
  {
    path: '',
    component: Route5Component,
  },
];

@NgModule({
  declarations: [Route5Component, SortTableDataPipe],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class Route5Module {}
