import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },

  // future viewer route
//   {
//     path: 'viewer',
//     loadComponent: () =>
//       import('./viewer/viewer.component').then(m => m.ViewerComponent)
//   },

  {
    path: '**',
    redirectTo: ''
  }
];
