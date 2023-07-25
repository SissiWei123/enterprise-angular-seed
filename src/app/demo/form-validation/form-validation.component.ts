import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent {
  registrationForm!: FormGroup;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder) {

  }

  get address() {
    return this.registrationForm.controls['address'] as FormGroup;
  }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      firstName: ['', [Validators.required, this.validateName]],
      lastName: ['', [Validators.required, this.validateName]],
      gender: ['', Validators.required],
      birthday: ['', Validators.required],
      address: this.formBuilder.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        country: ['', Validators.required],
        postal: ['', [Validators.required, this.validatePostal]]
      }),
      email: ['', [Validators.required, this.validateEmail]]
    });
  }

  validateName(c: FormControl) {
    let NAME_REGEXP = /^[a-z ,.'-]+$/i;
    if (NAME_REGEXP.test(c.value) == true) {
      return {nameError: false}
    }
    else {
      return {nameError: true}
    }
  }

  validatePostal(c: FormControl) {
    let POST_REGEXP = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
    if (POST_REGEXP.test(c.value) == true) {
      return {postalError: false}
    }
    else {
      return {postalError: true}
    }
  }

  validateEmail(c: FormControl) {
    let EMAIL_REGEXP = /^[\w._]+@[A-Za-z]+\.(com|edu|org)$/;
    if (EMAIL_REGEXP.test(c.value) == true) {
      return {emailError: false}
    }
    else {
      return {emailError: true}
    }
  }

  onSubmit() {
    //this.submitted = false;
    console.log(this.registrationForm.valid);
    let controls = this.registrationForm.controls;
    console.log(controls);
    for (let control in controls) {
      console.log(control + ' ' + controls[control].valid);
    }
  }

}
