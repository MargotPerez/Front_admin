import { Component, OnInit } from '@angular/core';
import { Category } from '../model/category';
import { CategoryService } from '../services/category.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent implements OnInit {
  categories : Category[] = [];
  categoriesSubscription? : Subscription

  constructor(private categoryService : CategoryService){}

  deleteCategory(id : number){
    if(confirm("Êtes-vous sûre de vouloir supprimer la catégorie et ses produits associés ?"))
      this.categoryService.deleteCategory(id);
  }

  ngOnInit(): void {
    this.categoryService.getCategories();

    this.categoriesSubscription = this.categoryService.categoriesUpdated.subscribe(
      categories => {
        this.categories = categories;
       
        
      }
    );
  }
}
