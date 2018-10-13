import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from '../recipe.service';


@Component({
	selector: 'app-recipe-edit',
	templateUrl: './recipe-edit.component.html',
	styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

	id: number;
	editMode = false;
	recipeForm: FormGroup;

	constructor(private route: ActivatedRoute, private recService: RecipeService,
		private router: Router) { }

	ngOnInit() {
		this.route.params.subscribe(
			(params: Params) => {
				this.id = +params['id'];
				this.editMode = params['id'] != null;
				this.initForm();
			}
		);
	}

	private initForm() {

		let recipeName = '';
		let imagePath = '';
		let description = '';
		const recipeIngredients = new FormArray([]);

		if (this.editMode) {
			const recipe = this.recService.getRecipeById(this.id);
			recipeName = recipe.name;
			imagePath = recipe.imagePath;
			description = recipe.description;
			if (recipe['ingredients']) {
				for (const ingredient of recipe.ingredients) {
					recipeIngredients.push(
						new FormGroup({
							'name': new FormControl(ingredient.name, [Validators.required]),
							'amount': new FormControl(ingredient.amount, [
								Validators.required,
								Validators.pattern(/^[1-9]+[0-9]*$/)
							])
						})
					);
				}
			}
		}

		this.recipeForm = new FormGroup({
			'name': new FormControl(recipeName, [Validators.required]),
			'imagePath': new FormControl(imagePath, [Validators.required]),
			'description': new FormControl(description, [Validators.required]),
			'ingredients': recipeIngredients
		});
	}

	onSubmit() {
		// const newRecipe = new Recipe(
		// 	this.recipeForm.value['name'],
		// 	this.recipeForm.value['description'],
		// 	this.recipeForm.value['imagePath'],
		// 	this.recipeForm.value['ingredients']
		// );
		if (this.editMode) {
			// mivel ugyanaz a model mint amit a Recipe konstruktora vár, odaadható így is
			this.recService.updateRecipe(this.id, this.recipeForm.value);
		} else {
			this.recService.addRecipe(this.recipeForm.value);
		}
		this.onCancel();
	}

	onAddIngredient() {
		(<FormArray>this.recipeForm.get('ingredients')).push(
			new FormGroup({
				'name': new FormControl(null, Validators.required),
				'amount': new FormControl(null, [
					Validators.required,
					Validators.pattern(/^[1-9]+[0-9]*$/)
				])
			})
		);
	}

	onCancel() {
		this.router.navigate(['../'], { relativeTo: this.route });
	}

	onRemoveIngredient(index: number) {
		(<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
	}
}
