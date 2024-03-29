import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';

import { DishService } from '../services/dish.service';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.less']
})

export class DishdetailComponent implements OnInit {

  dish: Dish;

  constructor(private dishservice: DishService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {  // allows for /dishdetail/0 or /dishdetail/1, ...
    const id = this.route.snapshot.params['id'];
    
    //this.dish = this.dishservice.getDish(id);
    this.dishservice.getDish(id).subscribe(  dish => this.dish = dish);
  }

  goBack(): void {
    this.location.back();
  }

}