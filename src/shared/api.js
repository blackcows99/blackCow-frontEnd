import RESP from "./response"
import { storage } from '../shared/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import axios from "axios";
const authApi = {
    signup: data => {
        // instance.post("/api/signup")
        RESP.LOGIN.user.push(data)
        console.log(RESP.LOGIN.user)

    }
}


const postApi = {
    addPost: async data => {
        // RESP.COMMERCIALS.push({});
        const file = data.file;                     // 복잡한 파일 담겨있음 변환 필요

        const uploaded_file = await uploadBytes(
            ref(storage, `images/${data.filename}`),    // 파일이름
            file                                    //  파일
        );                                      // ref로 다운로드url에 씀

        const file_url = await getDownloadURL(uploaded_file.ref);

        const real_data = {
            device: data.device,
            contents: data.contents,
            category: data.category,
            score: data.score,
            img: file_url,
        }

        await axios.post("http://localhost:5001/api_post", real_data)
            .then(res => {
                alert("등록 완료!")
            })
            .catch(error => {
                alert("에러 발생!")
            })
    },
    loadOnePost: async (id) => {
        return (
            await axios.get(`http://localhost:5001/api_post/${id}`)
                .then(res => {
                    alert("로드 완료!")
                    return res;
                })
                .catch(error => {
                    alert("로드 에러 발생!")
                })
        )
    },
}


export { authApi, postApi };