import React from 'react';
import Form from './Form';
import { postApi } from '../shared/api';
import { useDispatch } from "react-redux";
import { addCommercial } from "../redux/modules/Commercial";
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../shared/firebase';

const Add =  () => {
  const dispatch = useDispatch();
    const addPost = async (data) => {
        const file = data.file;                     // 복잡한 파일 담겨있음 변환 필요
        const uploaded_file = await uploadBytes(
            ref(storage, `images/${data.fileName}`),// 파일이름
            file                                    //  파일
        );                                          // ref로 다운로드url에 씀
        console.log(data.category)
        const file_url = await getDownloadURL(uploaded_file.ref);
        
        

        const real_data = {
          device: data.device,
          contents: data.contents,
          category: data.category,
          score: data.score,
          img: file_url,
        }
        console.log(real_data)
        postApi.addPost(real_data);                // 서버에 보내기
        dispatch(addCommercial(real_data));        // 리덕스에 보내기
      };

      return (
        <div>
          <Form mode="add" addPost={ addPost } />
        </div>
      );
}


export default Add;