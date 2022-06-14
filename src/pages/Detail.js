import React, { useState } from 'react';
import styled from 'styled-components';
import { MyContainer, Image, CustomButton } from '../elements';
import { TabContent } from '../components';
import { BsStarFill } from 'react-icons/bs';
import { useNavigate, useParams } from 'react-router-dom';
import { postApi } from '../shared/api';
import { loadComment } from '../redux/modules/Comment';
const Detail = ({ data }) => {
    const params = useParams();
    const navigate = useNavigate();
    const id = params.id;
    const [commercial, setCommercial] = useState(null);
    const [comments, setComments] = useState([]);
    const [content,setContent] = useState('');


    const call = async () => {
        const data = await postApi.loadOnePost(id);
        setCommercial(data);
        setComments(data.comments);
    }

    const handleComment = async () => {
        const _data = {
            comment: content,
        }
        const response = await postApi.addComment(id, _data)
        console.log(response);
        setContent('');
        console.log(comments)
    }
    React.useEffect(() => {
        call();
    }, [])

    return (
        <>  <div style={{ margin:"70px auto 0 auto"}}>
            <CustomButton width="10vw" _onClick={() => { navigate(`/update/${commercial?.id}`) }} >수정하기</CustomButton>
            <CustomButton width="10vw"_onClick={() => { navigate(-1) }}>뒤로가기</CustomButton>
            </div>
            <MyContainer width="60vw">

                <TitleBox>
                    <strong>{commercial?.member}</strong>

                    <div>{commercial?.date}</div>

                </TitleBox>
                <ContentBox>
                    <Image src={commercial?.img} width="50%"></Image>
                    <div style={{ padding: "10px" }}>
                        <p><strong style={{ fontSize: "1.1rem" }}>{commercial?.device}</strong></p>
                        <p>{commercial?.comtents}</p>
                    </div>
                </ContentBox>
                <Center>
                    <div>
                        <Category>{commercial?.category === 1 ? "컴퓨터"
                            : (commercial?.category === 2 ? "노트북"
                                : (commercial?.category === 3 ? "웨어러블"
                                    : (commercial?.category === 4 ? "가전제품"
                                        : (commercial?.category === 5 ? "기타" : ""))))
                        }</Category>
                        {[1, 2, 3, 4, 5].map(el => (
                            <BsStarFill
                                key={el}
                                style={{
                                    fontSize: "30px",
                                    color: `${commercial?.score >= el ? "yellow" : "#dfdfdf"}`
                                }}
                            />
                        ))}
                    </div>
                </Center>
                <TabContent data={comments} postId={id} content={content} setContent={(e)=>setContent(e.target.value)} onClick={()=>handleComment()}  />
                <SideMenu>상세 페이지</SideMenu>
            </MyContainer>
        </>
    )
}



const TitleBox = styled.div`
    display: flex;
    justify-content : space-between;
    padding : 8px;
`;

const ContentBox = styled.div`
    border:1px solid rgba(108,117,125,0.3);
    display:flex;
`;

const Center = styled.div`
    display:flex;
    margin : 13px 0;
    justify-content : space-between;
`;

const Category = styled.span`
    background-color: rgba(108,117,125,0.3);
    color: black;
    padding : 8px;
    border-radius: 1.2rem;
    font-size : 0.8rem;
    margin-right:5px;
`;

const SideMenu = styled.strong`
    position: absolute;
    top:3%;
    left:-21%;
    padding:10px;
    border-radius:5px;
    font-size : 1.5rem;
`;

export default Detail;