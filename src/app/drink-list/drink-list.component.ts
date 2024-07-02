import { Component } from '@angular/core';
import { drink } from './drink';
import { DrinkCartService } from '../drink-cart.service';
import { DrinkDataService } from '../drink-data.service';

@Component({
  selector: 'app-drink-list',
  templateUrl: './drink-list.component.html',
  styleUrl: './drink-list.component.scss'
})
export class DrinkListComponent {
    drinks: drink[] = [];


  constructor(
    private cart: DrinkCartService,
    private drinkDataService: DrinkDataService,){
  }

  ngOnInit(): void{
    this.drinkDataService.getAll().subscribe(drinks => this.drinks = drinks);
  }

    maxReached(m:string):void{
      alert(m);
    }

    addToCart(drink: drink):void{
      if(0 < drink.quantity){
        this.cart.addToCart(drink);
        drink.stock -= drink.quantity;
        drink.quantity=0;
      }
    }

  }
  