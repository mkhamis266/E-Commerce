import { NgModule } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    
  ],
  exports: [
    NavbarComponent,
    AppRoutingModule,
    HttpClientModule,
  ]

})
export class SharedModule { }
