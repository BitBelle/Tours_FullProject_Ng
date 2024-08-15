import { createActionGroup, props } from "@ngrx/store";
import { User, SignUpResponse, LogInResponse, LoginUser } from "../../models/user.model";

export const AuthActions=createActionGroup({
    source:"AUTH API",
    events:{
        
        'signup':props<{user:User}>(),
        'signup success':props<{response:SignUpResponse}>(),
        'signup failure':props<{message:string}>(),

        'login':props<{user:LoginUser}>(),
        'login success':props<{response:LogInResponse}>(),
        'login failure':props<{message:string}>(),
        
    }
})