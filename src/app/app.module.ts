import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from 'material.module';
import { MainPageComponent } from './Component/main-page/main-page.component';
import { HeaderComponent } from './Component/header/header.component';
import { HomePageComponent } from './Component/home-page/home-page.component';
import { FouterComponent } from './Component/fouter/fouter.component';
import { CoursesPageComponent } from './Component/courses-page/courses-page.component';
import { SeeMorrePageComponent } from './Component/see-morre-page/see-morre-page.component';
import { Header2Component } from './Component/header2/header2.component';
import { AdvantagesPageComponent } from './Component/advantages-page/advantages-page.component';
import { AboutUsPageComponent } from './Component/about-us-page/about-us-page.component';
import {CarouselModule} from "ngx-bootstrap/carousel";
import { RegistrPageComponent } from './Component/registr-page/registr-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HeaderComponent,
    HomePageComponent,
    FouterComponent,
    CoursesPageComponent,
    SeeMorrePageComponent,
    Header2Component,
    AdvantagesPageComponent,
    AboutUsPageComponent,
    RegistrPageComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
