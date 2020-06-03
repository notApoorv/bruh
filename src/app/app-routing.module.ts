import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonLeftNavComponent } from './common-left-nav/common-left-nav.component';

const routes: Routes = [
  {
    path: '',
    component: CommonLeftNavComponent
  },
  // {
  //   path: 'analytics',

  //   loadChildren: () => import('./analytics/analytics.module').then(m => m.AnalyticsModule),
  // },

  {
    path: 'nba22',
    loadChildren: () => import('./nba22/nba22.module').then(m => m.Nba22Module),
  },
  {
    path: 'nba23',
    loadChildren: () => import('./nba23/nba23.module').then(m => m.Nba23Module),
  },
  {
    path: 'nba24',
    loadChildren: () => import('./nba24/nba24.module').then(m => m.Nba24Module),
  },
  {
    path: 'nba25',
    loadChildren: () => import('./nba25/nba25.module').then(m => m.Nba25Module),
  },
  {
    path: 'nba26',
    loadChildren: () => import('./nba26/nba26.module').then(m => m.Nba26Module),
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
