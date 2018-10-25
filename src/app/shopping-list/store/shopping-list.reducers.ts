import { Ingredient } from '../../shared/ingredient.model';

import * as ShoppingListActions from './shopping-list.actions';

export interface AppState {
	shoppingList: State;
}

export interface State {
	ingredients: Ingredient[];
	editedIngredient: Ingredient;
	editedIngredientIndex: number;
}

// define init state
const initState = {
	ingredients: [
		new Ingredient('Apples', 5),
		new Ingredient('Tomatoes', 10)
	],
	editedIngredient: null,
	editedIngredientIndex: -1
};

// state def value-val
export function shoppingListReducer(state = initState, action: ShoppingListActions.ShoppingListActions) {
	switch (action.type) {
		case ShoppingListActions.ADD_INGREDIENT:
			return {
				...state,
				ingredients: [...state.ingredients, action.payload]
			};
		case ShoppingListActions.ADD_INGREDIENTS:
			return {
				...state,
				ingredients: [...state.ingredients, ...action.payload]
			};
		case ShoppingListActions.UPDATE_INGREDIENT:
			// a régi ami megváltozott
			const ingredient = state.ingredients[state.editedIngredientIndex];
			// megváltoztatás, mergelés a régivel
			const updatedIngredient = {
				...ingredient,
				...action.payload.ingredient
			};
			// az eredeti tömb
			const ingredients = [...state.ingredients];
			// a tömbbe a módosítás
			ingredients[state.editedIngredientIndex] = updatedIngredient;
			return {
				...state,
				ingredients: ingredients,
				editedIngredient: null,
				editedIngredientIndex: -1
			};
		case ShoppingListActions.DELETE_INGREDIENT:
			const oldingredients = [...state.ingredients];
			oldingredients.splice(state.editedIngredientIndex, 1);
			return {
				...state,
				ingredients: oldingredients,
				editedIngredient: null,
				editedIngredientIndex: -1
			};
		case ShoppingListActions.START_EDIT:
			const editedIng = { ...state.ingredients[action.payload] };
			return {
				...state,
				editedIngredient: editedIng,
				editedIngredientIndex: action.payload
			};
		case ShoppingListActions.STOP_EDIT:
			return {
				...state,
				editedIngredient: null,
				editedIngredientIndex: -1
			};
		default:
			return state;
	}
}
