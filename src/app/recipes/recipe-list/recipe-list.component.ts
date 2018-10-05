import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
	selector: 'app-recipe-list',
	templateUrl: './recipe-list.component.html',
	styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

	@Output() recipeWasSelected = new EventEmitter<Recipe>();

	recipes: Recipe[] = [
		new Recipe('A test recipe', 'A test', 'https://hips.hearstapps.com/del.h-cdn.co/assets/17/34/2048x1024/landscape-1503418862-chicken-thighs-delish.jpg?resize=1200:*'),
		new Recipe('Another test recipe', 'A test', 'https://hips.hearstapps.com/del.h-cdn.co/assets/17/34/2048x1024/landscape-1503418862-chicken-thighs-delish.jpg?resize=1200:*'),
		new Recipe('Third test recipe', 'A test', 'https://hips.hearstapps.com/del.h-cdn.co/assets/17/34/2048x1024/landscape-1503418862-chicken-thighs-delish.jpg?resize=1200:*')
	];

	constructor() { }

	ngOnInit() {
	}

	onRecipeSelected(recipe: Recipe) {
		this.recipeWasSelected.emit(recipe);
	}
}
