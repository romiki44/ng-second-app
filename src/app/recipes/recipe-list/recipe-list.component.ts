import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected=new EventEmitter<Recipe>();
  recipes:Recipe[] =[
    new Recipe('First recipe', 'Meat recipe', 'https://iowagirleats-iowagirleats.netdna-ssl.com/wp-content/uploads/2015/10/Crock-Pot-Chicken-and-Wild-Rice-Soup-iowagirleats-04.jpg'),
    new Recipe('Second recipe', 'Vegatable recipe', 'https://culinaryarts.ca/wp-content/uploads/2015/08/Recipes-Widget.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
