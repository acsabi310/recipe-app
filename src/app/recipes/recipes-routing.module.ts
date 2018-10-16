import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipesComponent } from './recipes.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { AuthGuard } from '../auth/auth-guard.service';

const recipesRoutes: Routes = [
	// lazy miatt innen kivenni üresre a 'recipes' path-t
	{path: '', component: RecipesComponent, children: [
		{path: '', component: RecipeStartComponent},
		// ha ilyen van, mindig a konkrét legyen elöl, utána a dinamikus! különben a 'new' szót ':id'-ként értelmezi
		{path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard]},
		{path: ':id', component: RecipeDetailComponent},
		{path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard]}
	]},
];

@NgModule({
	imports: [
		RouterModule.forChild(recipesRoutes)
	],
	exports: [
		RouterModule
	]
})
export class RecipesRoutingModule {

}
