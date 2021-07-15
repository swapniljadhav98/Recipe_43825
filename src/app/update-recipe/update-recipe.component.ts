import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import {NgForm} from '@angular/forms';
import { baseURL } from "../BASE_URL";
import { Http } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-update-recipe',
  templateUrl: './update-recipe.component.html',
  styleUrls: ['./update-recipe.component.css']
})

export class UpdateRecipeComponent implements OnInit {

  recipeName: string;
  ingredients: string;
  category: string;
  calories: string;
  recipeId: number;

  constructor(
  private http: HttpClient,
  public route: ActivatedRoute,
  private router: Router) {
    //TODO
  }

  getRecipe() {
    //TODO
  };

  ngOnInit() {
    //TODO
  }

  onSubmit(recipe: NgForm) {
    //TODO
  }
}
