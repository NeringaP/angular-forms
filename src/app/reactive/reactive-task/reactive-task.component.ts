import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-task',
  templateUrl: './reactive-task.component.html',
  styleUrls: ['./reactive-task.component.css']
})
export class ReactiveTaskComponent implements OnInit {
  projectStatuses = ['Stable', 'Critical', 'Finished'];
  defaultstatus = this.projectStatuses[0];
  projectForm: FormGroup;
  forbiddenProjectNames = ['Test'];
  submited = false;
  projectName = '';
  projectEmail = '';
  projectStatus = '';

  constructor() { }

  ngOnInit() {
    this.projectForm = new FormGroup({
      'projectName': new FormControl(null, [Validators.required, this.forbidenNames.bind(this)]),
      'projectEmail': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl(this.defaultstatus)
    });
  }

  onSubmit() {
    this.submited = true;

    this.projectName = this.projectForm.get('projectName').value;
    this.projectEmail = this.projectForm.get('projectEmail').value;
    this.projectStatus = this.projectForm.get('projectStatus').value;

    this.projectForm.reset();
    this.projectForm.patchValue({
      'projectStatus': this.defaultstatus
    });
  }

  forbidenNames(controlToCheck: FormControl): {[s: string]: boolean} {
    if(this.forbiddenProjectNames.indexOf(controlToCheck.value) !== -1) {
      return {'projectNameIsForbidden': true}
    } 
    return null;
  }

  forbidenNamesAsync(controlToCheck: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if(controlToCheck.value === 'Testproject') {
          resolve({'projectNameIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1000);
    });
    return promise;
  }

}
