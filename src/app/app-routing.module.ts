import { CartComponent } from './carts/components/cart/cart.component';
import { ProductsDetailsComponent } from './products/components/products-details/products-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProcudtsComponent } from './products/components/all-procudts/all-procudts.component';

const routes: Routes = [
  {path:'products', component: AllProcudtsComponent},
  {path:'details/:id', component: ProductsDetailsComponent },
  {path:'carts', component: CartComponent }, 
  {path:'**', redirectTo:'products', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
