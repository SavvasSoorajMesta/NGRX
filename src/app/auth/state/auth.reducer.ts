
import { createReducer, on } from "@ngrx/store";
import { LoginStart, LoginSuccess } from "./auth.action";
import { authState, initialState } from "./auth.state";

const _AuthReducer = createReducer(initialState, on(LoginSuccess,(state, action)=>{
  if(Object.keys(action.user).length === 0){
     alert("invalid credentials");
  }
  return {
    ...state,
    user: action.user
  }
} ))
export function AuthReducer(state: authState,action: any){
    return _AuthReducer(state, action)
}