import { Component, OnInit } from '@angular/core';

import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  dish: Dish;
  promotion: Promotion;
  featured_leader: Leader;

  // INJECTI-NG SERVICE INTO THE CONSTRUCTOR
  constructor(private dishservice: DishService,
    private promotionservice: PromotionService,
    private leaderservice: LeaderService) { }

  ngOnInit() {
    ////the handling of the call to getFeaturedDish() now receives a promise here
    //this.dish = this.dishservice.getFeaturedDish();
    this.dishservice.getFeaturedDish().then((dish) => this.dish = dish);

    //this.promotion = this.promotionservice.getFeaturedPromotion();
    this.promotionservice.getFeaturedPromotion().then( (promotion) => this.promotion = promotion);

    //this.featured_leader = this.leaderservice.getFeaturedLeader();
    this.leaderservice.getFeaturedLeader().then( (featured_leader) => this.featured_leader = featured_leader);
  }

}
