import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';

// Define an interface for cocktail objects
interface Cocktail {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
}

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent implements OnInit {
  cocktails: Cocktail[] = [];  // Type the cocktails array to Cocktail[]
  nomC: string = '';  // Initialize with an empty string

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.nomC = this.route.snapshot.params['nomC'];  // Assign value from route params
    console.log(this.nomC);
    this.getCocktailsByCategorie();
  }

  getCocktailsByCategorie() {
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=" + this.nomC)
      .then(res => {
        this.cocktails = res.data.drinks as Cocktail[];  // Ensure the response is typed as Cocktail[]
        console.log(this.cocktails);
      })
      .catch(err => {
        console.log(err);
      });
  }

  valideCategorie(categorie: string | string[]): boolean {
    if (typeof categorie === 'string' && categorie.indexOf("/") === -1) {
      return true;
    } else {
      return false;
    }
  }
}
