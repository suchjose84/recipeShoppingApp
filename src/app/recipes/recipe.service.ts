import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';

@Injectable()

export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe(
            'A tasty Schnitzel', 
            'A super tasty schnitzel. Super awesome!', 
            'https://daysofjay.com/wp-content/uploads/2020/09/Bavarian-Pork-Schnitzel-12-720x720.jpeg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French fries', 20)
            ]),
        new Recipe(
            'Big Fat Burger', 
            'What do you say?', 
            'https://cdn-cmjom.nitrocdn.com/FpMsHpAgoVrRMnuAdmBhGkyiizdsWlSU/assets/images/optimized/rev-dd2c928/wp-content/uploads/2015/07/fatburger_0014_UltimateBBQ-541x633.png',
            [
                new Ingredient('Buns', 1),
                new Ingredient('Meat', 1)
            ]),
    ];
    constructor(private slService: ShoppingListService){}

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];

    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);

    }

}