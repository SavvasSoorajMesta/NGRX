import { createAction, props } from "@ngrx/store";
import { User } from "src/app/model/user.model";

 const LoginLabel = 'login start';
export const LoginStart = createAction(LoginLabel, props<{email:string;password:string}>())
export const LoginSuccess = createAction('loginsccess',props<{user: User}>());