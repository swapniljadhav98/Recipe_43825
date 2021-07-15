import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import {NgForm} from '@angular/forms';
import { baseURL } from "../BASE_URL";
import { Http } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-view-recipe',
  templateUrl: './view-recipe.component.html',
  styleUrls: ['./view-recipe.component.css']
})
export class ViewRecipeComponent implements OnInit {
  recipeId;
  recipe;
  constructor(private http: HttpClient, public route: ActivatedRoute, public router: Router) {
    //TODO
  }

  getRecipe() {
    //TODO
  };

  ngOnInit() {
    //TODO
  }
  
  deleteRecipe(id: number) {
    //TODO
  }

}
