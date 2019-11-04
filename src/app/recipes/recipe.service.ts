import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipyService {
    recipeSelected=new EventEmitter<Recipe>();

    private recipes:Recipe[] =[
        new Recipe(
            'First recipe', 
            'Meat recipe', 
            'https://iowagirleats-iowagirleats.netdna-ssl.com/wp-content/uploads/2015/10/Crock-Pot-Chicken-and-Wild-Rice-Soup-iowagirleats-04.jpg',
            [
                new Ingredient('meat', 1),
                new Ingredient('French Fries', 20)
            ]
        ),
        new Recipe(
            'Second recipe', 
            'Vegatable recipe', 
            'https://culinaryarts.ca/wp-content/uploads/2015/08/Recipes-Widget.jpg',
            [
                new Ingredient('onion', 2),
                new Ingredient('tomato', 5),
                new Ingredient('rice', 10)
            ]
        )
    ];

    constructor(private slService: ShoppingListService) {

    }

    getRecipes() {
        return this.recipes.slice(); // return copy 
    }

    addIngredientToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

}