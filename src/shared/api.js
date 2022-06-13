import RESP from './response';
import { storage } from '../shared/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useDispatch } from 'react-redux';
import { loadCommercial } from '../redux/modules/Commercial';
import axios from 'axios';

const authApi = {
    signup: (data) => {
        // instance.post("/api/signup")
        RESP.LOGIN.user.push(data);
        console.log(RESP.LOGIN.user);
    },
};

const postApi = {
    loadPost: async () => {
        return await axios
            .get('/api_posts')
            .then((response) => {
                console.log('완료!');
                console.log(response);
                return response;
            })
            .catch((err) => {
                console.log('에러!');
            });
    },

    addPost: async (data) => {
        // RESP.COMMERCIALS.push({});
        // const file = data.file; // 복잡한 파일 담겨있음 변환 필요

        // const uploaded/file = await uploadBytes(
        //     ref(storage, `images/${data.filename}`), // 파일이름
        //     file //  파일
        // ); // ref로 다운로드url에 씀

        // const file/url = await getDownloadURL(uploaded/file.ref);

        // const real/data = {
        //     device: data.device,
        //     contents: data.contents,
        //     category: data.category,
        //     score: data.score,
        //     img: file/url,
        // };

        await axios
            .post('/api_post', data)
            .then((res) => {
                alert('등록 완료!');
            })
            .catch((error) => {
                alert('에러 발생!');
            });
    },

    loadOnePost: async (id) => {
        return await axios
            .get(`/api_post/${id}`)
            .then((res) => {
                return res.data;
            })
            .catch((error) => {
                alert('로드 에러 발생!');
            });
    },


    updatePost: async (id, data) => {
        return await axios
            .patch(`/api_post/` + id, data)
            .then((res) => {
                alert('업데이트 완료!');
            })
            .catch((error) => {
                alert('업데이트 에러 발생!');
            });
    },
    addComment: async (id, data) => {
        console.log(id, data)
        return await axios
            .post(`/api_comment/${id}`, data)
            .then((res) => {
                alert('코멘트 등록 완료!');
            })
            .catch((error) => {
                alert('에러 발생!');
            });
    },

};

export { authApi, postApi };
