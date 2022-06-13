import React, { useState } from 'react';
import Form from './Form';
import { postApi } from '../shared/api';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { updateCommercial } from '../redux/modules/Commercial';
const Update = () => {
    const dispatch = useDispatch();
    const commercial = useSelector( state => state.commercial );
    const [_data, set_data] = useState({});
    const updatePost = async (object) => {
        // dispatch ~~  db에 저장할 수 있는 로직, data 넘겨줘야함
        // dispatch(updateCommercial(data.data));
    };
    const call = async () => {
        const data = await postApi.loadOnePost(1);
        set_data({ ...data });
    }

    React.useEffect( ()=>{
        call();
    },[])

    const data = {};
    return (
        <div>
            <Form mode="update" updatePost={ updatePost } data={_data} />
        </div>
    );
}

export default Update;