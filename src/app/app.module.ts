import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { CoreModule } from './core/core.module';
import { StoreModule } from '@ngrx/store';
import { shoppingListReducer } from './shopping-list/store/shopping-list.reducers';

@NgModule({
	declarations: [
		AppComponent
	],
	// ami itt be van húzva, az be is töltődik! -> lazy miatt kivenni
	imports: [
		BrowserModule,	// contains commonModule + ami ahhoz kell h inicializálódjon a cucc
		HttpModule,
		AppRoutingModule,
		ShoppingListModule,
		SharedModule,
		CoreModule,
		StoreModule.forRoot({
			shoppingList: shoppingListReducer
		})
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
