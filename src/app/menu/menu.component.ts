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
    this.dishes = this.DishService.getDishes();
  }
  onSelect(dish: Dish){
    this.selectedDish = dish
  }
}
