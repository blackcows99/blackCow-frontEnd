import React, { useEffect } from 'react';
import styled from 'styled-components';
import StarIcon from '@mui/icons-material/Star';
import axios from 'axios';
import { async } from '@firebase/util';
import { postApi } from '../shared/api';
import { loadCommercial } from '../redux/modules/Commercial';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const PostList = (props) => {
  const navigate = useNavigate();
  const [star, setStar] = React.useState([0, 1, 2, 3, 4]);

  const [category, setCategory] = React.useState([
    '컴퓨터',
    '노트북',
    '웨어러블',
    '가전제품',
    '기타',
  ]);

  const dispatch = useDispatch();

  // 리덕스에 데이터 보내기
  const posts = async () => {
    const post_list = await postApi.loadPost();
    console.log(post_list.data);

    dispatch(loadCommercial(post_list.data));
  };

  useEffect(() => {
    posts();
  }, []);

  // 리덕스 데이터 들고오기
  const data = useSelector((state) => state.commercial);

  // 탭 버튼 클릭에 따른 데이터
  const tabContent = data.filter((x) => {
    if (x.category == props.activeIndex) {
      return x.category;
    }
    if (props.activeIndex === 0) {
      return x;
    }
  });

  return (
    <Container>
      {tabContent.map((list, idx) => {
        return (
          <Post key={idx}>
            <Top>
              <h4>{list.member}</h4>
              <p>{list.date}</p>
            </Top>
            {list.img && (
              <Picture
                onClick={() => {
                  navigate(`/detail/${list.id}`);
                }}
                style={{ backgroundImage: `url(${list.img})` }}
              />
            )}

            <Contents>
              <h4>{list.device}</h4>
              <p>{list.content}</p>
            </Contents>
            <Bottom style={{ marginTop: '10px' }}>
              <div
                style={{
                  backgroundColor: 'red',
                  padding: '3px',
                  borderRadius: '5px',
                }}
              >
                {category[list.category - 1]}
              </div>
              <div>
                {star.map((star, idx) => {
                  return <StarIcon style={{ color: list.score > idx ? '#ffe596' : '#eee' }} />;
                })}
              </div>
            </Bottom>
          </Post>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  width: 80%;
  margin: 20px auto;

  display: grid;

  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 15px 10px;

  justify-items: center;
`;

const Post = styled.div`
  width: 300px;
  border: 1px solid #000000;

  box-sizing: content-box;
  padding: 10px 0;

  & div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const Top = styled.div`
  width: calc(100% - 20px);
  margin: auto;

  & h4,
  p {
    margin: 10px 0;
  }
`;

const Picture = styled.div`
  width: 100%;
  height: 300px;

  background-color: #eee;

  // background-image: url('https://firebasestorage.googleapis.com/v0/b/sparta-megazine.appspot.com/o/images%2FvJs3tlUkPSQvipVB4YeItYrnhTS2_1654739445381?alt=media&token=8a7daa41-8ace-4893-ad86-888b31fa2ed3');

  background-position: center;
  background-size: cover;
`;

const Contents = styled.div`
  width: calc(100% - 20px);
  height: auto;

  display: flex;
  flex-direction: column;
  margin: auto;

  text-align: left;

  & h4 {
    width: 100%;
    margin: 10px 0;
  }

  & p {
    width: 100%;
    margin: 3px 0;
  }
`;

const Bottom = styled.div`
  width: calc(100% - 20px);
  margin: auto;
`;

export default PostList;
