import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProcudtsComponent } from './components/all-procudts/all-procudts.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { SharedModule } from '../shared/shared.module';
import { ProductComponent } from './components/product/product.component';



@NgModule({
  declarations: [
    AllProcudtsComponent,
    ProductsDetailsComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ProductsModule { }
