import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {

	private recipes: Recipe[] = [
		new Recipe('A test recipe',
		'A test',
		'https://hips.hearstapps.com/del.h-cdn.co/assets/17/34/2048x1024/landscape-1503418862-chicken-thighs-delish.jpg?resize=1200:*',
		[
			new Ingredient('Meat', 1),
			new Ingredient('Fries', 20)
		]),
		new Recipe('Another test recipe',
		'A test',
		'https://hips.hearstapps.com/del.h-cdn.co/assets/17/34/2048x1024/landscape-1503418862-chicken-thighs-delish.jpg?resize=1200:*',
		[
			new Ingredient('ASD', 1),
			new Ingredient('QEQWE', 20)
		]),
	];

	getRecipes() {
		return this.recipes.slice();	// ez egy új tömbböt ad vissza, ugyanaz mint ez, csak más referenciával
	}

	getRecipeById(index: number) {
		return this.recipes.slice()[index];
	}
}
