import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/user/auth.service';
import { Store } from '@ngrx/store';
import { AuthActions } from '../../State/Actions/auth.actions';
import { AppState } from '../../State';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private store:Store<AppState>) {
    this.signUpForm = this.fb.group({
      user_Name: ['', Validators.required],
      user_Email: ['', [Validators.required, Validators.email]],
      password_Hash: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).+$')
      ]]
    });
  }

  ngOnInit(): void {}


  onSubmit(): void {
    // if (this.signUpForm.valid) {
    //   console.log('Sign Up Form Data:', this.signUpForm.value)
    //   this.auth.signUpUser(this.signUpForm.value).subscribe(
    //     (response)=>{
    //       console.log(response),
    //       this.router.navigate(['/login']); // Navigate to login component after sign-up

    //     })
    // }
    this.store.dispatch(AuthActions.signup({user:this.signUpForm.value}))
  }
}
