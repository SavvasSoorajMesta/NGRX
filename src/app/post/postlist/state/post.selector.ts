import { createFeatureSelector, createSelector } from "@ngrx/store";
import { initialState, postState } from "./post.state";


const getPostList = createFeatureSelector<postState>('post');

export const postselector = createSelector(getPostList, state => {
    return state.post;
});

export const GetPostById = createSelector(getPostList, (state:any, props: any) => {
return state.post.find( (post:any) => {
    return post.id === Number(props.id)
});
})