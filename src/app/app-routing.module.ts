import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsPageComponent } from './Component/about-us-page/about-us-page.component';
import { AdvantagesPageComponent } from './Component/advantages-page/advantages-page.component';
import { CoursesPageComponent } from './Component/courses-page/courses-page.component';
import { MainPageComponent } from './Component/main-page/main-page.component';
import { RegistrPageComponent } from './Component/registr-page/registr-page.component';
import { SeeMorrePageComponent } from './Component/see-morre-page/see-morre-page.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/main',
    pathMatch:'full'
  },
  {
    path:'main',
    component:MainPageComponent 
  },
  {
    path:'about-us',
    component:AboutUsPageComponent,
  },
  {
    path:'courses',
    component:CoursesPageComponent,
  },
  {
    path:'see-more',
    component:SeeMorrePageComponent
  },
  {
    path:'advantages',
    component:AdvantagesPageComponent
  },
  {
    path:'registr',
    component:RegistrPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
