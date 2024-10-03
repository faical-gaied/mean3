import { Component, OnInit } from '@angular/core';
import axios from 'axios';

interface Category {
  strCategory: string;
}

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'] // Fixed typo here from styleUrl to styleUrls
})
export class CategoriesComponent implements OnInit {
  categories: Category[] = []; // Specify the type here

  constructor() {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {  //consommation API
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
      .then(res => {
        console.log(res.data);
        this.categories = res.data.drinks; // Ensure drinks is an array of Category
      })
      .catch(err => {console.log(err)});
  }
  valideCategorie (categorie:string) {
    if (categorie.indexOf("/") ==-1) {
      return true;
      
    }else{
      return false;
    }
  }
}
