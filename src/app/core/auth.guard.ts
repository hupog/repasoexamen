import { CanActivateFn, Router } from "@angular/router";
import { AuthStateService } from "../shared/data-access/auth.state.service";
import { inject } from "@angular/core";
import { map } from "rxjs";

export const privateGuard = () : CanActivateFn  => {
    return () => {
        const router = inject(Router);
        const authState = inject(AuthStateService);

        return authState.AuthState$.pipe(
            map(state => {
                if(!state) {
                    router.navigate(['/auth/sign-in']);
                    return false;
                }
                return true;
            })
        );
    }
} 

export const publicGuard = () : CanActivateFn  => {
    return () => {
        const router = inject(Router);
        const authState = inject(AuthStateService);

        return authState.AuthState$.pipe(
            map(state => {
                if(state) {
                    router.navigate(['/tasks']);
                    return false;
                }
                return true;
            })
        );
    }
} 
