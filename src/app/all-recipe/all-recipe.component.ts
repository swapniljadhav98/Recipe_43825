import { Component, OnInit } from '@angular/core';
import { Http,Response } from '@angular/http';
import { baseURL } from "../BASE_URL";

@Component({
  selector: 'app-all-recipe',
  templateUrl: './all-recipe.component.html',
  styleUrls: ['./all-recipe.component.css']
})
export class AllRecipeComponent implements OnInit {
  recipes: any = [];
  term: string;

  constructor(private http: Http) { }

  getAllRecipes() {
    //TODO
  };

  ngOnInit() {
    //TODO
  }

  deleteRecipe(id: number) {
    //TODO
  }
}
