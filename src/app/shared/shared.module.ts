import { NgModule } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { SpinnerComponent } from './components/spinner/spinner.component';
import { SelectComponent } from './components/select/select.component';

@NgModule({
  declarations: [
    NavbarComponent,
    SpinnerComponent,
    SelectComponent
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    RouterModule,
    BrowserModule,
    FormsModule,

    ToastrModule.forRoot(),
    
  ],
  exports: [
    NavbarComponent,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    RouterModule,
    BrowserModule,
    FormsModule,
    SpinnerComponent,
    SelectComponent
  ]

})
export class SharedModule { }
