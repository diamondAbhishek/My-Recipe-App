import { Component } from '@angular/core';
import { ShoppingListPage } from '../shopping-list/shopping-list';
import { RecipesPage } from '../recipes/recipes';
// import { RecipePage } from '../recipe/recipe';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  slPage = ShoppingListPage;
  recipesPage = RecipesPage;
  // addrecipePage = RecipePage;  
  

}
