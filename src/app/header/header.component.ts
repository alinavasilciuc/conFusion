import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  //Inject the service MatDialog into the constructor. MatDialog enables us to open the component as a dialog component
  constructor(public dialog: MatDialog ) { }

  ngOnInit() {
  }
  
  // This function triggers the showing of the Login component.
  // We supply the Login component that is going to act as the view that is overlaid on top of the current web view
  openLoginForm() {
    this.dialog.open(LoginComponent, {width: '500px', height: '450px'});
  }

}
