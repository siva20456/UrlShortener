import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponentComponent } from './landing-component/landing-component.component';
import HomeComponentComponent from './home-component/home-component.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { RedirectComponent } from './redirect/redirect.component';

const routes: Routes = [
  {
    path:'',
    component:LandingComponentComponent
  },
  {
    path:'home',
    component:HomeComponentComponent
  },
  {
    path:'analytics',
    component:AnalyticsComponent
  },
  {
    path:'target/:id',
    component:RedirectComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
