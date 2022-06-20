import { CartItem } from './../../models/cart-item';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../models/product';

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
  constructor() { }

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

}
