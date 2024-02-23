import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit{
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUsernames = ['Admin', 'Root'];

  ngOnInit() {
    this.signupForm = new FormGroup({
      'ruserData': new FormGroup({
        'rusername': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'remail': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails)
      }),
      'rgender': new FormControl('female'),
      'hobbies': new FormArray([])
    });

    // this.signupForm.valueChanges.subscribe(
      // (value) => console.log(value)
    // )
    this.signupForm.statusChanges.subscribe(
      (staus) => console.log(staus)
    );

    this.signupForm.setValue({
      'ruserData': {
        'rusername': 'Tom',
        'remail': 'neri@test.com',
      },
      'rgender': 'female',
      'hobbies': []
    });

    this.signupForm.patchValue({
      'ruserData': {
        'rusername': 'Neri',
      },
    })
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  getControls() {
    return (<FormArray>this.signupForm.get('hobbies')).controls;
  }

  onSubmit() {
    console.log(this.signupForm);
    this.signupForm.reset();

  }

  forbiddenNames(controlToCheck: FormControl): {[s: string]: boolean} {
    if(this.forbiddenUsernames.indexOf(controlToCheck.value) !== -1) {
      return {'nameIsForbidden': true};
    }
    return null; // return null or eliminate ruturn statement entirely, do not return {'nameIsForbidden': false}
  }

  forbiddenEmails(controlToCheck: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if(controlToCheck.value === 'test@test.com') {
          resolve({'emailIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
  
}
