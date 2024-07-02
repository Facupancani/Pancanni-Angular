import { Injectable } from '@angular/core';
import { drink } from './drink-list/drink';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DrinkCartService {

  private _cartList: drink[] = [];
  cartList: BehaviorSubject<drink[]> = new BehaviorSubject([]);

  constructor() { }

  addToCart(drink: drink) {
    let item: drink = this._cartList.find((v1) => v1.name === drink.name);
    if(!item){
      this._cartList.push({... drink});
    }
    else{
      item.quantity += drink.quantity;
    }
    this.cartList.next(this._cartList);
  }

  

}
