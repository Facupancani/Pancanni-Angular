import { Component } from '@angular/core';
import { DrinkCartService } from '../drink-cart.service';
import { drink } from '../drink-list/drink';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrl: './cart-list.component.scss'
})
export class CartListComponent {
  
  
  cartList: drink[];
  constructor(private cart: DrinkCartService){
    cart.cartList.subscribe(c => this.cartList = c);
  }
}
