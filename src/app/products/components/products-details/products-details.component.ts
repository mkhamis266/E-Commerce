import { Product } from './../../models/product';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {
  product!:Product;
  loading:boolean = true;
  id!:number;
  constructor(private router:ActivatedRoute, private productsService: ProductsService) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(){
    /* option 1 */
    // this.router.params.subscribe(params => {
    //   const id = params['id'];
    //   this.productsService.getProduct(id).subscribe(product => {
    //     this.product = product;
    //     this.loading = false;
    //   })
    // })

    /* option 2 */
    this.id = +this.router.snapshot.paramMap.get('id')!;
    this.productsService.getProduct(this.id).subscribe(product => {
      this.product = product;
      this.loading = false;
    })
  }
}
