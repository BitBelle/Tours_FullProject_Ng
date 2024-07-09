import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/auth.service';
import { AuthenticationService } from '../../services/user/auth.service';
import { Router } from '@angular/router';
import { AppState } from '../../State';
import { Store } from '@ngrx/store';
import { AuthActions } from '../../State/Actions/auth.actions';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  showSignUp = false;
  errorMessage: string | null = null;
  form!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      user_Email: this.fb.control('', Validators.required),
      password_Hash: this.fb.control('', Validators.required)
    })
  }

  //  error$=this.store.select(errorSelector)

  onSubmit() {
    // if (this.loginForm.valid) {
    //   console.log('Login Form Data:', this.loginForm.value);
    //   this.auth.LoginUser(this.loginForm.value).subscribe(
    //     (response) => {
    //       console.log(response)

    //       localStorage.setItem('token',response.token)
    //     if(response.token){
    //       this.router.navigate(['']); // Navigate to login component after sign-up

    //     }

    //       // sign-up logic
    //       this.showSignUp = false; // Hide sign-up form and show login form

    //     }) }else {
    //     this.errorMessage = 'Please fill in all required fields correctly.';
    //   }


    this.store.dispatch(AuthActions.login({user: this.loginForm.value }))
  
  }

}





