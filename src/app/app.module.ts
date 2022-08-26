import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmployeComponent } from './employe/employe.component';
import { RouterModule } from '@angular/router';
import { FORMComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WeekendComponent } from './HomeModule/weekend/weekend.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeComponent,
    FORMComponent,
    PageNotFoundComponent,
    WeekendComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:"", component: FORMComponent},
      {path:"home", component:HomeComponent},
      {path:"employee",component:EmployeComponent},
      {path:"**", component:PageNotFoundComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
