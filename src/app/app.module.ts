import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeService } from './recipes/recipe.service';
import { DataStorageService } from './shared/data-storage.service';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { CoreModule } from './core/core.module';

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
		CoreModule
	],
	// servicek nehezen szervezhetők ki, több helyen használjuk
	providers: [
		ShoppingListService,
		RecipeService,
		DataStorageService,
		AuthService,
		AuthGuard
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
