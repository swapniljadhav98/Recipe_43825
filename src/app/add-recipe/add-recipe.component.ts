import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import { baseURL } from "../BASE_URL";
import { Http } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent {

  recipeName: string;
  ingredients: string;
  category: string;
  calories: any;
  showMessage = false;

  constructor(private http: HttpClient) { }

 onSubmit(recipe: NgForm) {
   //TODO
 }

}
