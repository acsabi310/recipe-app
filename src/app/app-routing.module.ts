import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HomeComponent } from './core/home/home.component';

const appRoutes: Routes = [
	{ path: '', component: HomeComponent },
	// {path: '', redirectTo: '/recipes', pathMatch: 'full'},
	// csak 1 sor, nincs sok értelme kivenni
	{ path: 'shopping-list', component: ShoppingListComponent },
	// lazy, modult kell megadni
	{ path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule'},
	{ path: 'auth', loadChildren: './auth/auth.module#AuthModule'}
];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes, {
			// lazy modulok előtöltése
			preloadingStrategy: PreloadAllModules
		})
	],
	exports: [RouterModule]
})
export class AppRoutingModule {

}
