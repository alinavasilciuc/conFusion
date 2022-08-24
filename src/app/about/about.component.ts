import { Component, OnInit } from '@angular/core';

import { LeaderService } from '../services/leader.service';
import { Leader } from '../shared/leader';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent implements OnInit {

  leaders: Leader[];

  // INJECTING SERVICE INTO THE CONSTRUCTOR
  constructor(private _LeaderService: LeaderService) { }

  // USING THE SERVICE MEMBERS: ... =  this._LeaderService.getLeaders();

  ngOnInit() {

    //this.leaders = this._LeaderService.getLeaders();

    this._LeaderService.getLeaders().subscribe( leaders => this.leaders = leaders);

  }

}
