import React, { useRef, useState } from 'react';
import { Input, Title, Select, Textarea, Image, MyContainer, CustomButton } from '../elements';
import { Score } from '../components';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';



const Form = ({ mode, addPost, updatePost, data }) => {
    const fileInput = useRef();
    const [fileName, setFileName] = useState("");
    const [rating, setRating] = useState(1);
    const [selected, setSelected] = useState("");
    const [inputText, setInputText] = useState("");
    const [areaText, setAreaText] = useState("");
    const [fileImage, setFileImage] = useState("");

    const _data = {
        device: inputText,
        contents: areaText,
        category: selected,
        score: rating,
        file: fileInput,
        filename : fileName,
    }
    console.log(data)



    const selectFile = (e) => {
        setFileName(e.target.value.split("\\")[2]);   // 파일 name 뽑기
        setFileImage(URL.createObjectURL(fileInput.current.files[0]))  // 이미지 미리보기
    };

    const onClickScore = (score) => {
        setRating(score);
    }

    const onChangeSelect = (e) => {
        setSelected(e.target.value);
    }



    return (
        <MyContainer width="60vw">
            <Title text="이미지를 선택해주세요."></Title>
            <div>
                <div style={{display :"flex", alignItems:"center"}}>
                <Input
                    placeholder="파일을 선택해주세요."
                    value={fileName}
                    disabled
                    width="50%"
                />

                <CustomButton>
                    <label htmlFor="file" style={{ cursor:"pointer"}}>파일 찾기</label>
                </CustomButton>
                </div>
                <input
                    id="file"
                    ref={fileInput}
                    type="file"
                    style={{ display: "none" }}
                    onChange={selectFile}
                />

                <Image src={ mode === "add" ? 
                ( fileImage ? fileImage : null) 
                : data.img} >
                </Image>
                <Title text="평점을 선택해주세요."></Title>
                <Score score={data?.score} _onClick={ onClickScore } />
            </div>
            <Title text="내용을 입력해주세요." ></Title><br />
            <Input
                placeholder="제품명을 입력해주세요."
                value={data?.device}
                width="50%"
                _onChange={(e) => { setInputText(e.target.value) }}
            />
            <Select _onChange={ onChangeSelect } ></Select>
            <Textarea
                placeholder="내용을 입력해주세요."
                value={data?.content}
                _onChange={(e) => { setAreaText(e.target.value) }}
            />
            { mode === "add" ?
                <CustomButton style={{ padding: "10px", width: "100%" }}
                    _onClick={()=>{ addPost(_data)} }
                >작성하기
                </CustomButton>
                : <CustomButton
                    style={{ padding: "10px", width: "100%" }}
                    _onClick={()=>{updatePost(_data)}}
                >수정하기
                </CustomButton>
            }
            <SideMenu>{mode === 'add' ? "추가 페이지" : "수정 페이지"}</SideMenu>
        </MyContainer>
    )
}























// const Image = styled.div`
//     width: 72.5%;
//     height : 50vh;
//     border: 1px solid black;
//     background-size: cover;
//     background-image: url("${(props) => props.src ? props.src : "https://user-images.githubusercontent.com/75834421/124501682-fb25fd00-ddfc-11eb-93ec-c0330dff399b.jpg"}");
//     margin-bottom : 13px;
// `;

const SideMenu = styled.strong`
    position: absolute;
    top:3%;
    left:-21%;
    padding:10px;
    border-radius:5px;
    font-size : 1.5rem;
`;
export default Form;