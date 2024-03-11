import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products : Product[] = [];
  
  productsUpdated = new Subject<Product[]>();
  baseUrl = "https://localhost:7200/api/Products";

  constructor(private http : HttpClient) { }

  getProducts(){
    this.http.get<Product[]>(this.baseUrl).subscribe(
      products => {
        this.products = products;
        console.log(this.products);
        this.productsUpdated.next([...this.products]);
      }
    );
  }

  getProductById(id : number) : Product | undefined {
    return this.products.find(p=>p.id === id)
  }

  
  editProduct(product : Product) {
    const id = product.id
    this.http.put<Product>(this.baseUrl+"/"+id, product).subscribe(
      product => {
      this.products = this.products.map(
        p=>p.id === product.id?product:p
      );
      this.productsUpdated.next([...this.products]);
    }
    );
  }

  
  addProduct(productNumber: string, productName: string, quantityInStock: number, unitPrice: number, categoryId: number, image: string, color: string, size: string, description: string){
    const options = {
      headers: new HttpHeaders(
        { 'content-type': 'application/json'}
      )
    };
    this.http.post<Product>(
      this.baseUrl,
      JSON.stringify({
        ProductNumber : productNumber,
        ProductName :productName,
        QuantityInStock : quantityInStock,
        UnitPrice : unitPrice,
        CategoryId : categoryId,
        Image : image,
        Color : color,
        Size : size,
        Description : description
      }),
      options
      )
      .subscribe(
        product => {
          this.products.push(product);
          this.productsUpdated.next([...this.products]);
        }
      )
  }

  deleteProduct(id : number){
    this.http.delete<Product>(this.baseUrl +"/"+id).subscribe(
    product => {
    this.products = this.products.filter(p=>p.id !== id);
    this.productsUpdated.next([...this.products]);
    }
    );
  }
}
