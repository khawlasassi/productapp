import { Component ,OnInit } from '@angular/core';

import { products } from '../DATA/products';
import { ProductService } from '../services/product.service';
import { product } from '../product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productsList : product[];

  
  constructor(private productService  : ProductService,private router: Router) { }
  ngOnInit(): void {
      this.productsList = products;

  }


  share() {
    window.alert('The product has been shared!');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/