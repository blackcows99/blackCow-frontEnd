import { createSlice } from "@reduxjs/toolkit";
import { current } from '@reduxjs/toolkit'
const CommentSlice = createSlice({      // = useState
    name : 'comment',   // state 이름
    initialState : [],
    reducers:{
        loadComments: (state, action) => {
            state.push(action.payload);
        },
        // loadComment: (state, action) => {
        //     console.log(action.payload);
        //     state.push(action.payload);
        // }
        
}
})

export const { loadComments, loadComment } = CommentSlice.actions;

export default CommentSlice;