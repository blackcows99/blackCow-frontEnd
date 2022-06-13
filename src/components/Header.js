import React from 'react';
import styled from 'styled-components';
import { FaHome } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const signIn = () => {
    navigate('/login');
  };
  const signOut = () => {
    navigate('/login');
  };
  const signUp = () => {
    navigate('/sign_up');
  };
  return (
    // <Container>
    //   <FaHome
    //     onClick={() => {
    //       navigate('/');
    //     }}
    //     style={{
    //       marginLeft: '20px',
    //       fontSize: '30px',
    //       cursor: 'pointer',
    //     }}
    //   />
    //   <BtnBox>
    //     <strong>잘생긴님 안녕하세요.</strong>
    //     <Button onClick={signIn} variant='secondary'>
    //       로그인
    //     </Button>{' '}
    //     <Button onClick={signOut} variant='secondary'>
    //       로그아웃
    //     </Button>{' '}
    //     <Button onClick={signUp} variant='secondary'>
    //       회원가입
    //     </Button>{' '}
    //   </BtnBox>
    // </Container>

    // 오누리님 부분
    <Container>
      <h1>Black Cow</h1>
      <div>
        <p>000님, 안녕하세요!</p>
        <button onClick={signIn}>로그인</button>
        <button onClick={signUp}>회원가입</button>
        <button onClick={signOut}>로그아웃</button>
      </div>
    </Container>
  );
};

// const Container = styled.div`
//   border: 1px solid black;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   height: 70px;
// `;

// const BtnBox = styled.div`
//   display: flex;
//   align-items: center;
//   & > * {
//     margin-right: 10px;
//   }
// `;

// 오누리님 부분
const Container = styled.div`
  background-color: #eee;
  width: 100%;
  height: 70px;

  box-sizing: border-box;
  padding: 0px 15px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  top: 0;

  & div {
    display: flex;
    align-items: center;
    vertical-align: text-bottom;
  }

  & div > button {
    width: 90px;
    height: 40px;
    margin-left: 10px;
  }
`;
export default Header;
