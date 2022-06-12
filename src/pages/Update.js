import React from 'react';
import Form from './Form';
const Update = () => {
    const updatePost = (object) => {
        // dispatch ~~  db에 저장할 수 있는 로직, data 넘겨줘야함
    };

    const data = {};
    return (
        <div>
            <Form mode="update" updatePost={updatePost} data={data} />
        </div>
    );
}

export default Update;