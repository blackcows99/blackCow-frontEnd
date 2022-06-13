import React, { useEffect } from 'react';
import styled from 'styled-components';
import StarIcon from '@mui/icons-material/Star';
import axios from 'axios';
import { async } from '@firebase/util';
import { postApi } from '../shared/api';
import { loadCommercial } from '../redux/modules/Commercial';
import { useDispatch, useSelector } from 'react-redux';

const PostList = () => {
  const dispatch = useDispatch();

  const posts = async () => {
    const post_list = await postApi.loadPost();
    console.log(post_list.data);

    dispatch(loadCommercial(post_list.data));
  };

  useEffect(() => {
    posts();
  }, []);

  const data = useSelector((state) => state);
  console.log(data.commercial);

  return (
    <Container>
      <Post>
        <Top>
          <h4>닉네임</h4>
          <p>2022/02/09</p>
        </Top>
        <Picture />
        <Contents>
          <h4>제품명이 들어갑니다.</h4>
          <p>내용이 들어갑니다.</p>
        </Contents>
        <Bottom style={{ marginTop: '10px' }}>
          <div
            style={{
              backgroundColor: 'red',
              padding: '3px',
              borderRadius: '5px',
            }}
          >
            카테고리명
          </div>
          <div>
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </div>
        </Bottom>
      </Post>
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

  // background-color: #7ceba0;

  background-image: url('https://firebasestorage.googleapis.com/v0/b/sparta-megazine.appspot.com/o/images%2FvJs3tlUkPSQvipVB4YeItYrnhTS2_1654739445381?alt=media&token=8a7daa41-8ace-4893-ad86-888b31fa2ed3');
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
