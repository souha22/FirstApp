import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import {AuthenticationService } from '../shared/authentication.service';
import {UserService } from '../shared/user.service';
import {AlertService } from '../shared/alert.service';
@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  constructor(
    public formBuilder: FormBuilder,
    public router: Router,
    public authenticationService: AuthenticationService,
    public userService: UserService,
    public alertService: AlertService
  )   {

  }


  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
  }

// convenience getter for easy access to form fields
get f() { return this.registerForm.controls; }


onSubmit() {
  this.submitted = true;

  // stop here if form is invalid
  if (this.registerForm.invalid) {
      return;
  }

  this.loading = true;
  this.userService.addUser(this.registerForm.value)
      .pipe(first())
      .subscribe(
          data => {
              this.alertService.success('Registration successful', true);
              this.router.navigate(['/login']);
          },
          error => {
              this.alertService.error(error);
              this.loading = false;
          });
}

}
