import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from '../common/components/header/header.component';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/route-1',
        pathMatch: 'full',
      },
      {
        path: 'route-1',
        loadChildren: () =>
          import('./route1/route1.module').then((m) => m.Route1Module),
      },
      {
        path: 'route-2',
        loadChildren: () =>
          import('./route2/route2.module').then((m) => m.Route2Module),
      },
      {
        path: 'route-3',
        loadChildren: () =>
          import('./route3/route3.module').then((m) => m.Route3Module),
      },
      {
        path: 'route-4',
        loadChildren: () =>
          import('./route4/route4.module').then((m) => m.Route4Module),
      },
      {
        path: 'route-5',
        loadChildren: () =>
          import('./route5/route5.module').then((m) => m.Route5Module),
      },
      {
        path: 'route-6',
        loadChildren: () =>
          import('./route6/route6.module').then((m) => m.Route6Module),
      },
      {
        path: '**',
        redirectTo: '/route-1',
      },
    ],
  },
];

@NgModule({
  declarations: [LayoutComponent, HeaderComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class LayoutModule {}
