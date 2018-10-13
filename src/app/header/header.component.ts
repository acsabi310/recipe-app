import { Component} from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Response } from '@angular/http';
import { RecipeService } from '../recipes/recipe.service';
import { AuthService } from '../auth/auth.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent {

	constructor(private dsService: DataStorageService, private authService: AuthService) {}

	onSave() {
		this.dsService.storeRecipes().subscribe(
			(response: Response) => console.log(response.json())
		);
	}

	onGet() {
		this.dsService.getRecipes();
	}

	onLogout() {
		this.authService.logOut();
	}
}
