import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cart } from 'src/app/products/models/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  addCart(cart:Cart ){
    return this.http.post(environment.apiUrl+'carts', cart);
  }
}
