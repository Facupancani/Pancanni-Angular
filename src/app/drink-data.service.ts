import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { drink } from './drink-list/drink';

const URL = "https://631bcd2b1b470e0e12f5a4d1.mockapi.io/api/v1/Drinks";

@Injectable({
  providedIn: 'root'
})
export class DrinkDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<drink[]>{
    //Consumir Api REST
    return this.http.get<drink[]>(URL)
    .pipe(
      tap((drinks: drink[]) => drinks.forEach(drink => drink.quantity = 0))
    );
  }
}
