import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
	selector: 'app-recipe-detail',
	templateUrl: './recipe-detail.component.html',
	styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {

	@Input() selectedRecipe: Recipe;

	constructor(private shoppinglistService: ShoppingListService) {}

	addIngredientsToList() {
		this.shoppinglistService.addMoreIngredients(this.selectedRecipe.ingredients);
	}

}
