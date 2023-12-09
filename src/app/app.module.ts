import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ActionComponent } from './action/action.component';
import { HttpClientModule } from '@angular/common/http';
import { ActionListComponent } from './action/action-list/action-list.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ActionComponent,
    ActionListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
   
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
