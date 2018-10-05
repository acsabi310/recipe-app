import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
	selector: 'app-shopping-edit',
	templateUrl: './shopping-edit.component.html',
	styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

	@ViewChild('nameInput') nameRef: ElementRef;
	@ViewChild('amountInput') amountRef: ElementRef;
	@Output() ingredientAdded = new EventEmitter<Ingredient>();
	constructor() { }

	ngOnInit() {
	}

	add() {
		const newIng = new Ingredient(this.nameRef.nativeElement.value, this.amountRef.nativeElement.value);
		this.ingredientAdded.emit(newIng);
	}

	clear() {}

	delete() {}

}
