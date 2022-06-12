import React from 'react';
import Form from './Form';
import { postApi } from '../shared/api';
import { useDispatch } from "react-redux";
import { addCommercial } from "../redux/modules/Commercial";

const Add =  () => {
  const dispatch = useDispatch();
    const addPost = (data) => {
        postApi.addPost(data);
        dispatch(addCommercial(data));
      };
      return (
        <div>
          <Form mode="add" addPost={ addPost } />
        </div>
      );
}


export default Add;