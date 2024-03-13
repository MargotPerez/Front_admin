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

  currentPage: number = 1;
  itemsPerPage: number = 15; // Nombre d'éléments par page
  


  /********************************* */
  getCurrentPage() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    
    return this.products.slice(startIndex, endIndex);
  }
   // Méthode pour aller à la page suivante
   nextPage() {
    this.currentPage++;
    console.log("nextPage")

  }

   // Méthode pour aller à la page précédente
   previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
    console.log("previousPage")
  }
  onPageChange(pageNumber: number) {
    console.log("ca marche")
    this.currentPage = pageNumber;
    this.productService.getProductsPagination(this.currentPage,this.itemsPerPage);
  }
  /********************************* */


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
    this.productService.getProductsPagination(this.currentPage, this.itemsPerPage);

    this.productsSubscription = this.productService.productsUpdated.subscribe(
      products => {
        this.products = products;
       
        this.productsToDisplay = this.transformProductToDisplay();
        console.log(this.productsToDisplay);

      
      }
    );
  }
}
