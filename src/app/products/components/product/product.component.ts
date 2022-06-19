import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product!:Product;
  @Output() addedToCart = new EventEmitter<Product>();
  constructor() { }

  ngOnInit(): void {
  }

  add(){
    this.addedToCart.emit(this.product);
  }

}
