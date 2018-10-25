import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../../shopping-list/store/shopping-list.actions';
import * as fromShoppingList from '../../shopping-list/store/shopping-list.reducers';
@Component({
	selector: 'app-recipe-detail',
	templateUrl: './recipe-detail.component.html',
	styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

	selectedRecipe: Recipe;
	id: number;

	constructor(private route: ActivatedRoute,
		private recipeService: RecipeService, private router: Router, private store: Store<fromShoppingList.AppState>) { }

	addIngredientsToList() {
		// this.shoppinglistService.addMoreIngredients(this.selectedRecipe.ingredients);
		this.store.dispatch(new ShoppingListActions.AddIngredients(this.selectedRecipe.ingredients));
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

	onDeleteRecipe() {
		this.recipeService.deleteRecipe(this.id);
		this.router.navigate(['/recipes']);
	}

}
