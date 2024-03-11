import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Category } from 'src/app/categories/model/category';
import { CategoryService } from 'src/app/categories/services/category.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  product? : Product ;
  categories : Category[] = [];

  constructor(
    private productService : ProductService, 
    private categoryService : CategoryService,
    private router : Router,
    private activatedRoute : ActivatedRoute
  ){}
  
  editProduct(f : NgForm){
    this.product!.productNumber = f.value.productNumber;
    this.product!.productName = f.value.productName;
    this.product!.quantityInStock = f.value.quantityInStock;
    this.product!.unitPrice = f.value.unitPrice;
    this.product!.categoryId = Number(this.product!.categoryId);
    this.product!.image = f.value.image;
    this.product!.color = f.value.color;
    this.product!.size = f.value.size;
    this.product!.description = f.value.description;

    this.productService.editProduct(this.product!);
    this.router.navigate(['/products']);
  }

  ngOnInit(): void {
    this.categoryService.categoriesUpdated.subscribe(categories => this.categories = categories)
    this.categoryService.getCategories();
    this.activatedRoute.params.subscribe(
      parametres => {
        const id = parametres['id'];
        this.product = this.productService.getProductById(+id)
      });
  }
}




