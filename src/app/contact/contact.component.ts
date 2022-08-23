import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Feedback, ContactType } from '../shared/feedback';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})

export class ContactComponent implements OnInit {

  feedbackForm: FormGroup;  //form model that is going to host the Reactive form 
  feedback: Feedback;       // variable Feedback, corresponding data model
  contactType = ContactType;

  @ViewChild('fform') feedbackFormDirective;
  
  // Inject the FormBuilder service into the constructer
  constructor(private fb: FormBuilder) {
    this.createForm(); // when class is built the form will be also created 
  }

  ngOnInit() {
  }

  createForm() {
    this.feedbackForm = this.fb.group({
      firstname: ['', Validators.required ],
      lastname: ['', Validators.required ],
      telnum: ['', Validators.required ],
      email: ['', Validators.required ],
      agree: false,
      contacttype: 'None',
      message: ''
    });
  }

  onSubmit() {
    this.feedback = this.feedbackForm.value;
    console.log(this.feedback);
    this.feedbackForm.reset({
      firstname: '',
      lastname: '',
      telnum: '',
      email: '',
      agree: false,
      contacttype: 'None',
      message: ''
    });
    this.feedbackFormDirective.resetForm();
  }

}