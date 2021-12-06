import { User } from "src/app/model/user.model";

export interface authState {
    user : User | null
}
export const initialState : authState ={
    user : null
}