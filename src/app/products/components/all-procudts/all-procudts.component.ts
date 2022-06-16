import { ProductsService } from './../../services/products.service';
import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-all-procudts',
  templateUrl: './all-procudts.component.html',
  styleUrls: ['./all-procudts.component.css']
})
export class AllProcudtsComponent implements OnInit {

  products!:Product[];
  loading:boolean = true;
  constructor(private productsService:ProductsService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.geAllProducts();
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
}
