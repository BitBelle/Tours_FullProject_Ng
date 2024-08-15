import { createReducer, on } from "@ngrx/store"
import { AuthActions } from "../Actions/auth.actions"


export interface AuthInterface {
    signupSuccessMessage:string
    signupErrorMessage:string
    signupLoading:boolean

    loginSuccessMessage:string
    loginErrorMessage:string
    loginLoading:boolean
}


const initialstate:AuthInterface={
    signupErrorMessage:'',
    signupLoading:false,
    signupSuccessMessage:'',

    loginErrorMessage:'',
    loginLoading:false,
    loginSuccessMessage:'',
    
}


export const authReducer= createReducer(
    initialstate,
    on(AuthActions.login, (state)=>{
        return{
            ...state,
            loginErrorMessage:'',
            loginSuccessMessage:'',
            loginLoading:true
        }
    }),

    on(AuthActions.loginSuccess, (state, action)=>{
        return{
            ...state,
            loginErrorMessage:'',
            loginSuccessMessage:action.response.message,
            loginLoading:false
        }
    }),
    on(AuthActions.loginFailure, (state, {message})=>{
        return{
            ...state,
            loginErrorMessage:message,
            loginSuccessMessage:'',
            loginLoading:false
        }
    }),
    on(AuthActions.signup, (state)=>{
        return{
            ...state,
            signupErrorMessage:'',
            signupSuccessMessage:'',
            signupLoading:true
        }
    }),

    on(AuthActions.signupSuccess, (state,action)=>{
        return{
            ...state,
            signupErrorMessage:'',
            signupSuccessMessage:action.response.message,
            signupLoading:false
        }
    }),

    on(AuthActions.signupFailure, (state, {message})=>{
        return{
            ...state,
            signupErrorMessage:message,
            signupSuccessMessage:'',
            signupLoading:false
        }
    }),
)
