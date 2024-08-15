import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { AuthenticationService } from "../services/user/auth.service";

export const authGuard: CanActivateFn = (route, state) =>{
    const router = inject(Router)
    const auth = inject(AuthenticationService)

    if(auth.showStatus()){
        return true
        //allow  them to access
      }else{
        router.navigate(['/login'])
        return false
      }
    
}