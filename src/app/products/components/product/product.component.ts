import { CartItem } from './../../models/cart-item';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product!:Product;
  @Output() addedToCart = new EventEmitter<CartItem>();

  quantityTag=false;
  quantity:number = 1;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  showQuantity(){
    this.quantityTag = !this.quantityTag;
  }

  add(){
    const cartItem = new CartItem(this.product, this.quantity);
    this.addedToCart.emit(cartItem);
    this.quantityTag = false;
  }

  openDetails(id:number){
    this.router.navigate(['/details', id]);
  }
}
