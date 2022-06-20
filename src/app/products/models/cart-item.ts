import { Product } from "./product";

export class CartItem extends Product{
  quantity:number = 1;
  constructor(product:Product, quantity:number){
    super(product.id, product.title, product.price, product.category, product.description, product.image);
    this.quantity = quantity;
  }
}

