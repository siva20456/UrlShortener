import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponentComponent } from './landing-component/landing-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';

const routes: Routes = [
  {
    path:'',
    component:LandingComponentComponent
  },
  {
    path:'home',
    component:HomeComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
