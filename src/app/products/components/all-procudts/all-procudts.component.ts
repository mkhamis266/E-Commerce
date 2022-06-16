import { ProductsService } from './../../services/products.service';
import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-procudts',
  templateUrl: './all-procudts.component.html',
  styleUrls: ['./all-procudts.component.css']
})
export class AllProcudtsComponent implements OnInit {

  products!:Product[];
  loading:boolean = true;
  constructor(private productsService:ProductsService) { }

  ngOnInit(): void {
    this.geAllProducts();
  }

  geAllProducts(){
    this.productsService.getAllProducts().subscribe((res:Product[])=>{
      this.products = [];
      this.products = res;
      this.loading = false;
    })
  }
}
