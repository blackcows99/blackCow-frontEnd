import React from 'react';
import Form from './Form';
import { useDispatch } from 'react-redux';
import { uploadBytes, getDownloadURL, ref } from 'firebase/storage';
import { storage } from '../shared/firebase';
import { postApi } from '../shared/api';
import { updateCommercial } from '../redux/modules/Commercial';
const Update = () => {
    const dispatch = useDispatch();
    


    const data = {};
    return (
        <div>
            <Form mode="update"  />
        </div>
    );
}

export default Update;