import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  getProduct(id:number){
    return this.http.get<Product>(environment.apiUrl+'products/'+id);
  }

  getAllProducts(){
    return this.http.get<Product[]>(environment.apiUrl+'products');
  }
  getAllCategories(){
    return this.http.get<string[]>(environment.apiUrl+'products/categories');
  }
  getProductsByCategory(category:string){
    return this.http.get<Product[]>(environment.apiUrl+'products/category/'+category);
  }
}