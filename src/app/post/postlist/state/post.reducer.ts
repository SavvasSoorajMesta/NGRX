import { createReducer, on } from '@ngrx/store'
import {initialState, postState} from './post.state'
import { addpost, deletePost, updatePost } from './post.action'

const  _postReducer= createReducer(initialState, on(addpost, (state, action) => {
    let post = {...action.post};
    post.id = state.post.length +1;
    return {
        ...state,
        post: [...state.post,post]
    }
}),
on(updatePost,(state, action)=>{
    let updatePost = state.post.map(data =>{
        return data.id === action.post.id ? action.post : data
    })
    return {
        ...state,
        post: updatePost
    }
}),
on(deletePost,(state, action)=>{
    const AfterDeletePostlist = state.post.filter((data) => {
        return data.id !== action.id
    })
    return {
        ...state,
        post: AfterDeletePostlist
    }
})
);

export function postReducer(state: any, action: any) {
    return _postReducer(state, action)
}