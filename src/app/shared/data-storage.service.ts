import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

const API_URL = 'https://udemy-ng-http-befca.firebaseio.com/';

@Injectable()
export class DataStorageService {
	constructor(private http: Http,
		private recService: RecipeService,
		private authService: AuthService) {}

	storeRecipes() {
		const token = this.authService.getToken();
		// firebase miatt put, felülírja mindig az újjal a régit
		return this.http.put(API_URL + 'recipes.json?auth=' + token, this.recService.getRecipes());
	}

	getRecipes() {
		const token = this.authService.getToken();
		this.http.get(API_URL + 'recipes.json?auth=' + token)
		.pipe(map(
			(response: Response) => {
				const recipes: Recipe[] = response.json();
				for (const recipe of recipes) {
					if (!recipe['ingredients']) {
						recipe['ingredients'] = [];
					}
				}
				return recipes;
			}
		)).subscribe(
			(recipes: Recipe[]) => {
				this.recService.updateRecipes(recipes);
			}
		);
	}
}
