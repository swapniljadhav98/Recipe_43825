import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { baseURL } from "../BASE_URL";

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent implements OnInit {
  recipes: any = [];
  recipeFilter: any;
  constructor(private http: Http) { }

  getAllRecipes() {
    //TODO
  };

  findRecipe(calories) {
    //TODO
  }

   ngOnInit() {
    //TODO
  }

}
