import { Component, OnInit } from '@angular/core';
import { PizzaService } from 'src/app/services/pizza.service';
import { ActivatedRoute, Params } from '@angular/router';
import { map } from 'rxjs/operators';
import { HttpClientModule } from '@angular/common/http';
import { IngredientService } from 'src/app/services/ingredient.service';

@Component({
  selector: 'app-pizza-detail',
  templateUrl: './pizza-detail.page.html',
  styleUrls: ['./pizza-detail.page.scss'],
})
export class PizzaDetailPage implements OnInit {

  pizzaId: string;
  pizza: any = {};

  ingredient: any = [];

  constructor(private pizzaService: PizzaService, private ingredientService: IngredientService, private router: ActivatedRoute) { }

  ngOnInit() {
    const id = this.router.params.subscribe(
      (params: Params) => {
        const tmpid = params.id;
        this.pizzaId = tmpid;
      }
    );

    this.pizzaService.getPizzaById(this.pizzaId).subscribe(
      data => {
        this.pizza = data;
        console.log(this.pizza);
        for (let i = 0; i < this.pizza.ingredients.length; i++) {
          this.ingredientService.getIngredientById(this.pizza.ingredients[i]).subscribe(
            ingData => {
              this.ingredient[i] = ingData;
              console.log(this.ingredient[i]);
            },
            error => console.log(error)
          );
        }
      },
      error => console.log(error)
    );

  }

}
