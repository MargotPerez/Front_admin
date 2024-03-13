import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { IProductToDisplay } from '../model/iproduct-to-display';
import { Subscription } from 'rxjs';
import { ProductService } from '../services/product.service';
import { CategoryService } from 'src/app/categories/services/category.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  
  products : Product[] = [];
  productsToDisplay : IProductToDisplay[] = [];
  filteredProducts? : IProductToDisplay[];
  productsSubscription? : Subscription

  constructor(private productService : ProductService, private categoryService : CategoryService){}

  transformProductToDisplay() : IProductToDisplay[]{
    return this.products.map(p=>{
      return {
        id : p.id,
        productNumber : p.productNumber,
        productName : p.productName,
        quantityInStock : p.quantityInStock,
        unitPrice : p.unitPrice,
        category : this.categoryService.getCategoryName(p.categoryId),
        image : p.image,
        color : p.color,
        size : p.size,
        description : p.description
      } as IProductToDisplay
    });
  }

  deleteProduct(id : number){
    if(confirm("Êtes-vous sûre de vouloir supprimer ce produit ?"))
      this.productService.deleteProduct(id);
  }
  
  filterProducts(keyword : string){
    this.filteredProducts = this.productsToDisplay!.filter(
      p=>p.productNumber.toLowerCase().includes(keyword.toLowerCase()) || p.productName.toLowerCase().includes(keyword.toLowerCase())
    );
  }

  ngOnInit(): void {
    this.productService.getProducts();

    this.productsSubscription = this.productService.productsUpdated.subscribe(
      products => {
        this.products = products;
       
        this.productsToDisplay = this.transformProductToDisplay();
        console.log(this.productsToDisplay);
      }
    );
  }
}
