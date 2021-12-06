import { createAction, props } from "@ngrx/store";
import { Post } from "src/app/model/post.model";

export const addpost = createAction('addpost',props<{post: Post}>());
export const updatePost = createAction('updatePost',props<{post: Post}>());
export const deletePost = createAction('delete post list', props<{id:number}>());