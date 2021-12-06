import { counterState } from "../Counter/state/counter.state";
import { postState } from "../post/state/post.state";
import { CounterReduce } from '../Counter/state/counter.reducer';
import {postReducer} from '../post/state/post.reducer'
export interface appState {
    counter: counterState,
    post: postState,
}

export const appstore = {
    counter: CounterReduce,
    post: postReducer,

}