import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
    ingredientsChanged=new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[]=[
        new Ingredient('Apples', 5),
        new Ingredient('Tomatos', 10)
    ];

    getIngredients() {
        return this.ingredients.slice(); //len kopia pola, tu je to problem
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);

        //kvoli kopii, hoci najjednoduchsie je odstranit slice
        this.ingredientsChanged.emit(this.ingredients.slice());  
    }

    addIngredients(ingredients: Ingredient[]) {
        // for(let ingredient of ingredients) {
        //     this.addIngredient(ingredient);
        // }

        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}