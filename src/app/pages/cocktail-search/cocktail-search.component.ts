import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';

interface Cocktail {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  scocktail:string;
}

@Component({
  selector: 'app-cocktail-search',
  templateUrl: './cocktail-search.component.html',
  styleUrls: ['./cocktail-search.component.css']  // Correction ici
})
export class CocktailSearchComponent {
  scoktail: any = '';  // Initialiser avec une chaîne vide
  cocktails: Cocktail[] = [];  // Typage correct pour la liste des cocktails

  constructor() {}

  ngOnInit(): void {
    // Peut-être du code ici plus tard si besoin
  }

  // Typage du paramètre search pour garantir qu'il soit une chaîne
  searchCocktail(search: string): void {
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + search)
      .then(res => {
        // Vérification que l'API renvoie des résultats
        if (res.data && res.data.drinks) {
          this.cocktails = res.data.drinks as Cocktail[];  // On affecte l'ensemble des cocktails
        } else {
          this.cocktails = [];  // Si aucun résultat n'est trouvé, vider la liste
        }
        console.log(this.cocktails);
      })
      .catch(err => {
        console.log(err);
      });
  }
}
