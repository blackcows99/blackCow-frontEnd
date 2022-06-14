import React from 'react';
import Form from './Form';
import { useDispatch } from 'react-redux';
import { uploadBytes, getDownloadURL, ref } from 'firebase/storage';
import { storage } from '../shared/firebase';
import { postApi } from '../shared/api';
import { updateCommercial } from '../redux/modules/Commercial';
const Update = ( data ) => {
    const dispatch = useDispatch();
    // const updatePost = () => {
    //     console.log(data)
    //     postApi.updatePost(commercial.id,data);                // 서버에 보내기
    //     // dispatch(updateCommercial(real_data));  

    //     navigate("/");
    // }

    return (
        <div>
            <Form mode="update"  />
        </div>
    );
}

export default Update;