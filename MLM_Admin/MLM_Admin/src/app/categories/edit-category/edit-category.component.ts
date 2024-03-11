import { Component, OnInit } from '@angular/core';
import { Category } from '../model/category';
import { CategoryService } from '../services/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  category? : Category ;

  constructor(
    private categoryService : CategoryService, 
    private router : Router,
    private activatedRoute : ActivatedRoute
  ){}
  
  editCategory(f : NgForm){
    this.category!.name = f.value.name;
    this.categoryService.editCategory(this.category!);
    this.router.navigate(['/categories']);
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      parametres => {
        const id = parametres['id'];
        this.category = this.categoryService.getCategoryById(+id)
      });
  }
}
