import { Component, OnInit } from '@angular/core';
import { Category } from '../model/category';
import { CategoryService } from '../services/category.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  categories : Category[] = [];
  constructor(
    private categoryService : CategoryService, 
    private router : Router,
   ){}
  

  addCategory(f : NgForm){
    this.categoryService.addCategory(f.value.name);
    this.router.navigate(['/categories']);
  }

  
  ngOnInit(): void {
    this.categoryService.categoriesUpdated.subscribe(categories => this.categories = categories)
    this.categoryService.getCategories();
  }

}
