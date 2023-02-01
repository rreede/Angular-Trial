import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { UserDetailsComponent } from './user-details/user-details.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { Component, OnInit } from '@angular/core';
import { AddNewUserComponent } from './add-new-user/add-new-user.component';

@NgModule({
  declarations: [AppComponent, UserDetailsComponent, HomeComponent, AddNewUserComponent],
  imports: [BrowserModule, FormsModule, Ng2SearchPipeModule, RouterModule, AppRoutingModule,],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}