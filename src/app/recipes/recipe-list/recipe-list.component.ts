import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[] =[
    new Recipe('A test recipe', 'Recipe for testing', 'https://iowagirleats-iowagirleats.netdna-ssl.com/wp-content/uploads/2015/10/Crock-Pot-Chicken-and-Wild-Rice-Soup-iowagirleats-04.jpg'),
    new Recipe('A test recipe', 'Recipe for testing', 'https://culinaryarts.ca/wp-content/uploads/2015/08/Recipes-Widget.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
