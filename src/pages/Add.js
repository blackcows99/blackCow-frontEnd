import React from 'react';
import Form from './Form';
import { postApi } from '../shared/api';


const Add =  () => {
    const addPost = (data) => {
        postApi.addPost(data);
      };
      return (
        <div>
          <Form mode="add" addPost={ addPost } />
        </div>
      );
}


export default Add;