import { ToastrService } from 'ngx-toastr';
import { CartService } from './../../services/cart.service';
import { CartItem } from './../../../products/models/cart-item';
import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/products/models/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems!:CartItem[];
  total:number = 0;
  loading:boolean = true;
  items!:{productId:number,quantity:number}[];
  constructor(private cartService:CartService, private toaster: ToastrService) { }

  ngOnInit(): void {
    this.getCartItems();
  }

  getCartItems(){
    this.cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
    this.loading= false;
    this.total = +this.cartItems.reduce((total, item) => total + item.quantity * item.price, 0).toFixed(2);
  }

  addAmount(index:number){
    this.cartItems[index].quantity++;
    this.updateCart();
  }

  minsAmount(index:number){
    if(this.cartItems[index].quantity > 1){
      this.cartItems[index].quantity--;
      this.updateCart();
    }
  }

  deleteProduct(index:number){
    this.cartItems.splice(index, 1);
    this.updateCart();
  }
  
  addCart(){
    this.getItems();
    let cart:Cart = {
      userId: 1,
      date: new Date(),
      products: this.items
    }
    this.cartService.addCart(cart).subscribe(() => {
      this.toaster.success('Thank you for your order!', 'Success');
      this.clearCart();
    })
  }

  getItems(){
    this.items = this.cartItems.map(item => {
      return {
        productId: item.id,
        quantity: item.quantity
      }
    })
  }

  clearCart(){
    localStorage.removeItem('cart');
    this.getCartItems();
  }

  updateCart(){
    localStorage.removeItem('cart');
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
    this.total = 0;
    this.total = +this.getTotal();
  }

  getTotal(){
    return this.cartItems.reduce((total, item) => total + item.quantity * item.price, 0).toFixed(2);
  }
}
