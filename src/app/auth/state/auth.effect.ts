import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthService } from "../auth.service";
import { LoginStart, LoginSuccess } from "./auth.action";
import { exhaustMap, map } from "rxjs/operators"

@Injectable({
    providedIn: 'root'
})
export class AuthEffect {
    constructor(private action$: Actions, private authService: AuthService) { }
    loginStart$ = createEffect(() => {
        return this.action$.pipe(
            ofType(LoginStart),
            exhaustMap((action) => {
                return this.authService.PostLogin(action.email,action.password)
                    .pipe(
                        map(data => {
                            const user = this.authService.FormatUserData(data);
                            return LoginSuccess({user})
                        })
                    )
            })

        );
    });
}
