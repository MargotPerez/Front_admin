import { Injectable } from '@angular/core';
import { Category } from '../model/category';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categories : Category[] = [];

  categoriesUpdated = new Subject<Category[]>();
  baseUrl = "https://localhost:7200/api/Categories";

  constructor(private http : HttpClient) { }

  getCategories(){
    this.http.get<Category[]>(this.baseUrl).subscribe(
      categories => {
        this.categories = categories;
        console.log("test");
        this.categoriesUpdated.next([...this.categories]);
      }
    );
  }

  deleteCategory(id : number){
    this.http.delete<Category>(this.baseUrl +"/"+id).subscribe(
    category => {
    this.categories = this.categories.filter(c=>c.id !== id);
    this.categoriesUpdated.next([...this.categories]);
    }
    );
  }


  getCategoryById(id : number) : Category | undefined {
    return this.categories.find(c=>c.id === id)
   // return this.http.get<Category>(this.baseUrl+"/"+id);
    
  }

  editCategory(category : Category) {
    const id = category.id
    this.http.put<Category>(this.baseUrl+"/"+id, category).subscribe(
      category => {
      this.categories = this.categories.map(
        c=>c.id === category.id?category:c
      );
      this.categoriesUpdated.next([...this.categories]);
    }
    );
  }


  getCategoryName(id : number){
    const category = this.getCategoryById(id);
    return category?.name
  }


  addCategory(name : string){
    const options = {
      headers: new HttpHeaders(
        { 'content-type': 'application/json'}
      )
    };
    this.http.post<Category>(
      this.baseUrl,
      JSON.stringify({
        Name : name
      }),
      options
      )
      .subscribe(
        category => {
          this.categories.push(category);
          this.categoriesUpdated.next([...this.categories]);
        }
      )
  }
}


