import { ProductsService } from './../../services/products.service';
import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartItem } from '../../models/cart-item';

@Component({
  selector: 'app-all-procudts',
  templateUrl: './all-procudts.component.html',
  styleUrls: ['./all-procudts.component.css']
})
export class AllProcudtsComponent implements OnInit {

  products!:Product[];
  categories!:string[];
  loading:boolean = true;
  cartsProducts:Product[] = [];
  constructor(private productsService:ProductsService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.geAllProducts();
    this.getAllCategories();
  }

  geAllProducts(){
    this.productsService.getAllProducts().subscribe(
      {
        next: (res:Product[])=>{
          this.products = [];
          this.products = res;
          this.loading = false;
        },
        error: (err)=>{
          this.toastr.error(err.error.message, 'Error');
          this.loading = false;
        }
      }
    )
  }
  getAllCategories(){ 
    this.productsService.getAllCategories().subscribe((res:string[])=>{
      this.categories = [];
      this.categories = res;
      this.categories.push('All');
      this.categories.sort();
    })
  }
  filterProducts(event:Event){
    const category:string = (event.target as HTMLInputElement).value;

    if(category == 'All'){
      this.geAllProducts();
    }
    else{
      this.loading = true;
      this.products = [];
      this.productsService.getProductsByCategory(category).subscribe(
        
        {
          next: (res:Product[])=>{
            this.products = res;
            this.loading = false;
          }
        })
      }
  }
  addToCart(cartItem:CartItem){
    if ("cart" in localStorage){
      this.cartsProducts = JSON.parse(localStorage.getItem('cart')!);
      let exixts = this.cartsProducts.find(p => p.id == cartItem.id);
      if(exixts){
        this.toastr.warning('Product already in cart', 'Warning');
      }else{
        this.cartsProducts.push(cartItem);
        localStorage.setItem('cart', JSON.stringify(this.cartsProducts));
      }
    }else {
      this.cartsProducts.push(cartItem);
      localStorage.setItem('cart', JSON.stringify(this.cartsProducts));
    }
  }
}
