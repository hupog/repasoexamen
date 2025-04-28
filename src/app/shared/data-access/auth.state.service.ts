import { inject, Injectable } from "@angular/core";
import { Auth } from "@angular/fire/auth";
import { authState, signOut } from "@angular/fire/auth";
import { Observable } from "rxjs";
@Injectable({
    providedIn: 'root'
})
export class AuthStateService {
    private _auth = inject(Auth);

    get AuthState$(): Observable <any> {
        return authState(this._auth);
    }

    logOut() {
        return signOut(this._auth);
    }
}