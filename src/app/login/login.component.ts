import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  //user object with the properties username, password and remember
  user = {username: '', password: '', remember: false};

  //Inject the service MatDialogRef into the constructor, so it can be used later. 
  // MatDialogRef will enable us to handle the submitted form
  constructor(public dialogRef:MatDialogRef<LoginComponent>){}

  ngOnInit() {
  }

  onSubmit() {
    console.log('User: ', this.user);
    this.dialogRef.close();
  }
}