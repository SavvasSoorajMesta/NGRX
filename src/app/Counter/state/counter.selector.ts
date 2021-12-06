import { createFeatureSelector, createSelector } from "@ngrx/store";
import { counterState } from "./counter.state";

export const getCounterState = createFeatureSelector<counterState>('counter');

export const getCounter = createSelector(getCounterState, (state)=> {
    return state.counter;
});

export const getAuthorname = createSelector(getCounterState, (state)=> {
    return state.authorName;
});