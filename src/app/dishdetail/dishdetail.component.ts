import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../shared/dish';


@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.less']
})
export class DishdetailComponent implements OnInit {
  // introduce a new variable in the dishdetail.component.ts file in the dishdetail class called dish and set it equal to the DISH constant above:
  selectedDish =  Dish;
  
  constructor() { }

  ngOnInit() {
  }

  @Input()
  dish: Dish;
  
}
