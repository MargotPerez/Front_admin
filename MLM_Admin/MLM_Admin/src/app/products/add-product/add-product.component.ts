import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CategoryService } from 'src/app/categories/services/category.service';
import { Category } from 'src/app/categories/model/category';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  products : Product[] = [];
  categories : Category[] = [];
  constructor(
    private productService : ProductService, 
    private categoryService : CategoryService,
    private router : Router,
   ){}
  

  addProduct(f : NgForm){
    this.productService.addProduct(f.value.productNumber, f.value.productName, +f.value.quantityInStock, +f.value.unitPrice, +f.value.categoryId, f.value.image, f.value.color, f.value.size, f.value.description);
    this.router.navigate(['/products']);
  }

  
  ngOnInit(): void {
    this.categoryService.categoriesUpdated.subscribe(categories => this.categories = categories)
    this.categoryService.getCategories();
    this.productService.productsUpdated.subscribe(products => this.products = products)
    this.productService.getProducts();
  }

}
