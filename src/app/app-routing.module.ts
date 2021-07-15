import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AllRecipeComponent } from './all-recipe/all-recipe.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { UpdateRecipeComponent } from './update-recipe/update-recipe.component';
import { ViewRecipeComponent } from './view-recipe/view-recipe.component';
import { RecommendationComponent } from './recommendation/recommendation.component'

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'allRecipe', component: AllRecipeComponent },
  { path: 'addRecipe', component: AddRecipeComponent },
  { path: 'updateRecipe/:id', component: UpdateRecipeComponent },
  { path: 'viewRecipe/:id', component: ViewRecipeComponent },
  { path: 'recommendation', component: RecommendationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
