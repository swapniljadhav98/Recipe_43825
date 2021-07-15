import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AllRecipeComponent } from './all-recipe/all-recipe.component';
import { ViewRecipeComponent } from './view-recipe/view-recipe.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { UpdateRecipeComponent } from './update-recipe/update-recipe.component';
import { HttpClientModule } from "@angular/common/http";
import { SearchPipe, FilterPipe } from './search.pipe';
import { RecommendationComponent } from './recommendation/recommendation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllRecipeComponent,
    ViewRecipeComponent,
    AddRecipeComponent,
    UpdateRecipeComponent,
    SearchPipe,
    FilterPipe,
    RecommendationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
