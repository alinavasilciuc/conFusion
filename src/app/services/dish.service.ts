import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }
  /*
  getDishes(): Dish[] {
    return DISHES;
  }
  getDishes(): Promise<Dish[]>{
    return Promise.resolve(DISHES);
  }
  getDishes(): Promise<Dish[]> {
    return new Promise(resolve=> {
      setTimeout(() => resolve(DISHES), 2000);   // Simulate server latency with 2 second delay
  });
  */

  getDishes(): Observable<Dish[]> {
    return of(DISHES).pipe(delay(2000));
  }

  getDish(id: string): Observable<Dish> {
    return of(DISHES.filter((dish) => (dish.id === id))[0]).pipe(delay(2000));
  }

  getFeaturedDish(): Observable<Dish> {
    return of(DISHES.filter((dish) => dish.featured)[0]).pipe(delay(2000));
  }
}