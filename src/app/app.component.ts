import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signinForm: NgForm;
  defaultQuestion = 'pet';
  answer = '';
  genders = ['female', 'male'];
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };
  submitted = false;

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signinForm.setValue({
      // userData: {
        // username: suggestedName,
        // email: ''
      // },
      // secret: 'pet',
      // questionAnswer: '',
      // gender: 'female'
    // });
    this.signinForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    })
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  onSubmit() {
    this.submitted = true;
    this.user.username = this.signinForm.value.userData.username;
    this.user.email = this.signinForm.value.userData.email;
    this.user.secretQuestion = this.signinForm.value.secret;
    this.user.answer = this.signinForm.value.questionAnswer;
    this.user.gender = this.signinForm.value.gender;

    this.signinForm.reset({
      userData: {
        username: this.user.username,
      },
      gender: this.user.gender
    });
  }
}
