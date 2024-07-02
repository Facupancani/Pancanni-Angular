import { Component, EventEmitter, Input, Output } from '@angular/core';
import { drink } from '../drink-list/drink';
import { max } from 'rxjs';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.scss'
})
export class InputIntegerComponent {

  @Input()
  quantity: number;
  
  @Input()
  maxQuantity: number;

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
  increaseQuantity(): void {
    if (this.quantity < this.maxQuantity) {
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    } else {
      this.maxReached.emit("Se ha alcanzado la cantidad máxima");
    }
  }

  onChangeQuantity(event): void {
    const newValue = parseInt(event.target.value, 10);
    if (!isNaN(newValue) && newValue >= 0 && newValue <= this.maxQuantity) {
      this.quantity = newValue;
    } else {
      this.quantity = 0;
    }
    this.quantityChange.emit(this.quantity);
  }

}
