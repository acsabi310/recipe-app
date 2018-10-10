import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
	selector: 'app-recipe-detail',
	templateUrl: './recipe-detail.component.html',
	styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

	selectedRecipe: Recipe;
	id: number;

	constructor(private shoppinglistService: ShoppingListService, private route: ActivatedRoute,
		private recipeService: RecipeService, private router: Router) { }

	addIngredientsToList() {
		this.shoppinglistService.addMoreIngredients(this.selectedRecipe.ingredients);
	}

	ngOnInit() {
		this.route.params.subscribe(
			(params: Params) => {
				this.id = +params['id'];
				this.selectedRecipe = this.recipeService.getRecipeById(this.id);
			}
		);
	}

	onEditRecipe() {
		// this.router.navigate(['edit'], {relativeTo: this.route});
		this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
	}

}
