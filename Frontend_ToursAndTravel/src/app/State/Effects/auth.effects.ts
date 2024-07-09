import { Injectable } from "@angular/core";
import { AuthenticationService } from "../../services/user/auth.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthActions } from "../Actions/auth.actions";
import { catchError, concatMap, exhaustMap, map, of } from "rxjs";
import { Router } from "@angular/router";


@Injectable()

export class AuthEffects {
    constructor(private action$: Actions, private auth: AuthenticationService, private router:Router) {

    }

    signupUser$ = createEffect(() => {
        return this.action$.pipe(
            //action to listen to
            ofType(AuthActions.signup),
            // reaching out to the service and receiving input from action
            concatMap(req => this.auth.signUpUser(req.user).pipe(
                map(res =>{
                    this.router.navigate(["/login"])
                    return AuthActions.signupSuccess({ response: res })}) 

            )
            )
        )
    })

    loginUser$=createEffect(()=>{
        return this.action$.pipe(
             //filtering all action and only listening to Register action
             ofType(AuthActions.login),
             //receiving input from action reaching out tho the service
             exhaustMap(({user})=>this.auth.LoginUser(user).pipe(
                 map(res=>{
                    localStorage.setItem('token', res.token)
                    this.router.navigate([''])
                   return AuthActions.loginSuccess({response:res})
                }),
                 catchError(error=>of(AuthActions.loginFailure({message:error.error.message})))
             ))
         )
     })
}