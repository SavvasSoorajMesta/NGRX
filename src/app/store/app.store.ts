import { counterState } from "../Counter/state/counter.state";
import { postState } from "../post/postlist/state/post.state";
import { CounterReduce } from '../Counter/state/counter.reducer';
import {postReducer} from '../post/postlist/state/post.reducer'
import { authState } from "../auth/state/auth.state";
import { AuthReducer } from "../auth/state/auth.reducer";

export interface appState {
    counter: counterState,
    post: postState,
    auth: authState
}

export const appstore = {
    counter: CounterReduce,
    post: postReducer,
    auth: AuthReducer

}