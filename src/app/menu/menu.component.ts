import { Component, OnInit} from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {

  dishes: Dish[];
  selectedDish: Dish;
 
  // INJECTING SERVICE INTO THE CONSTRUCTOR
  constructor(private DishService: DishService) { }

  ngOnInit() {
    //the handling of the call to getDishes() now receives a promise here
    //this.dishes = this.DishService.getDishes(); 
    this.DishService.getDishes().subscribe(  dishes => this.dishes = dishes);
  }
  onSelect(dish: Dish){
    this.selectedDish = dish
  }
}
