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
    redirectTo:'/գլխավոր',
    pathMatch:'full'
  },
  {
    path:'գլխավոր',
    component:MainPageComponent 
  },
  {
    path:'մեր-մասին',
    component:AboutUsPageComponent,
  },
  {
    path:'դասընթացներ',
    component:CoursesPageComponent,
  },
  {
    path:'կապ',
    component:MainPageComponent,
  },
  {
    path:'տեսնե-ավելին',
    component:SeeMorrePageComponent
  },
  {
    path:'առավելություններ',
    component:AdvantagesPageComponent
  },
  {
    path:'գրանցվել',
    component:RegistrPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
