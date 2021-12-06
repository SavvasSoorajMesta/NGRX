import { Post } from "src/app/model/post.model";

export interface postState {
    post: Post[]
}
export const initialState : postState = {
    post: [{
        id: 1,
        title: 'post the link',
        description: 'test demo'
    },
    {
        id: 2,
        title: 'post the link 2',
        description: 'test demo 2'
    }]
}