import { Component, EventEmitter, Input, Output } from '@angular/core';
import { drink } from '../drink-list/drink';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.scss'
})
export class InputIntegerComponent {

  @Input()
  quantity: number;
  
  @Input()
  maxQantity: number;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();
  
  @Output()
  maxReached: EventEmitter<string> = new EventEmitter<string>();

  downQuantity():void{
    if(this.quantity > 0){
      this.quantity --;
      this.quantityChange.emit(this.quantity);
    }
    else{
      this.maxReached.emit("No puede haber stock negativo!");
    }
  }
  increaseQuantity():void{
    if(this.maxQantity > this.quantity){
      this.quantity ++;
      this.quantityChange.emit(this.quantity);
    }
    else{
      this.maxReached.emit("se llego al tope");
    }
  }
  onChangeQuantity(event): void {
    this.quantityChange.emit(this.quantity);
  }

}
