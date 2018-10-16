import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
	{ path: '', component: HomeComponent },
	// {path: '', redirectTo: '/recipes', pathMatch: 'full'},
	// csak 1 sor, nincs sok értelme kivenni
	{ path: 'shopping-list', component: ShoppingListComponent },
	// lazy, modult kell megadni
	{ path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule'}
];

@NgModule({
	imports: [RouterModule.forRoot(appRoutes)],
	exports: [RouterModule]
})
export class AppRoutingModule {

}
