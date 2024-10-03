import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';

strInstructionsIT:String;

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrl: './cocktail-details.component.css'

  
})
export class CocktailDetailsComponent {
  idC: any;
  cocktail: any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.idC = this.route.snapshot.params['idC'];  // Assign value from route params
    this.getCocktailsById();
    
  }
  getCocktailsById() {
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + this.idC)
      .then(res => {
        this.cocktail = res.data.drinks[0];  // Ensure the response is typed as Cocktail[]
        console.log(this.cocktail);
      })
      .catch(err => {
        console.log(err);
      });
  }
}