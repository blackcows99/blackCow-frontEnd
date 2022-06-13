import React, { useState } from 'react';
import styled from "styled-components";
import { Input, CustomButton } from '../elements';
import { postApi } from '../shared/api';
const TabContent = ({ data, postId }) => {
    const [fade, setFade] = useState('');
    const [tab, setTab] = useState(false);
    const [comments, setComments] = useState(data);
    const [inputText, setInputText] = useState("");
    React.useEffect(() => {
        const a = setTimeout(() => { setFade('end') }, 10)
        return () => { setFade(''); clearTimeout(a) }
    }, [tab])
    const clickTab = () => {
        setTab(!tab);
    }
    console.log(data)

    const handleComment = async () => {
        const _data = {
            comment: inputText,
        }
        console.log(postId)
        const response = await postApi.addComment(postId, _data)
        console.log(response);
    }

    React.useEffect(()=>{
        
    },[])

    return (
        <div className={`start ${fade}`}>
            <Span onClick={clickTab}>댓글</Span>
            <Line />
            {tab ?
                <>
                    <Input
                        placeholder="댓글을 입력하세요."
                        width="60%"
                        _onChange={(e) => {  setInputText(e.target.value) }}
                    />
                    <CustomButton _onClick={ handleComment } width="15%">등록</CustomButton>

                    {data.map((d, i) => {
                        return (
                        <div
                            key={i}
                            style={{
                                display: "flex",
                                padding: "10px",
                            }}>
                            <strong style={{ flexGrow: "1" }}>{d.member}</strong>
                            <div style={{ flexGrow: "2", textAlign: "center" }}>{d.comment}</div>
                            <Line />
                        </div>)

                    })}

                </>
                : null}
        </div>
    )
}

const Span = styled.div`
    display: inline-block;
    padding : 8px 15px;
    border:1px solid rgba(108,117,125,0.3);
    border-bottom : none;
    border-radius: 5px 5px 0 5px;
    cursor : pointer ;
    &:hover {
        background-color : rgba(0,0,0,0.7);
        color : white;
    }
`;

const Line = styled.div`
    border-bottom : 1px solid rgba(108,117,125,0.3);
`;

export default TabContent;