import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-td-task',
  templateUrl: './td-task.component.html',
  styleUrls: ['./td-task.component.css']
})
export class TdTaskComponent implements OnInit {
  @ViewChild('tdf') signinForm: NgForm;
  subscriptions = ['Basic', 'Advanced', 'Pro']
  defaultSubscription = 'Advanced';
  userData = {
    email: '',
    subscription: '',
    password: ''
  }
  submitted = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;
    this.userData.email = this.signinForm.value.email;
    this.userData.subscription = this.signinForm.value.subscription;
    this.userData.password = this.signinForm.value.password;
    this.signinForm.form.reset({
      subscription: this.defaultSubscription
    });
  }

}
