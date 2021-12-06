import { createReducer, on } from '@ngrx/store'
import {initialState, postState} from './post.state'
import { addpost, deletePost, updatePost } from './post.action'

const  _postReducer= createReducer(initialState,
    
on(addpost, (state, action) => {
    // initial post data set to newpost vaiable 
    let newpost = {...action.post};
    newpost.id = state.post.length +1;
    return {
        ...state,
        post: [...state.post,newpost]
    }
}),
on(updatePost,(state, action)=>{

    let updatePost = state.post.map(data =>{
        // to change the post object if action id is match 
        return data.id === action.post.id ? action.post : data
    })
    return {
        ...state,
        post: updatePost
    }
}),
on(deletePost,(state, action)=>{
    const AfterDeletePostlist = state.post.filter((data) => {
        // ignore post object if action id is match 
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