import { createFeatureSelector, createSelector } from "@ngrx/store";
import { initialState, postState } from "./post.state";


const getPostList = createFeatureSelector<postState>('post');

export const postselector = createSelector(getPostList, state => {
    return state.post;
});

// fetch the data form update formar.
export const GetPostById = createSelector(getPostList, (state:any, props: any) => {
    // return the object if id is match 
return state.post.find( (post:any) => {
    return post.id === Number(props.id)
});

})