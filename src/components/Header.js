import React from 'react';
import styled from 'styled-components';
import { FaHome } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loadUser } from '../redux/modules/user';
import axios from "axios";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [member,setMemeber] = React.useState({});
  
  const signIn = () => {
    navigate('/login');
  };
  const signOut = () => {
    navigate('/login');
  };
  const signUp = () => {
    navigate('/sign_up');
  };
  const getMemberInfo = async () =>{
     await axios.get('/api_member')
          .then((response)=>{
            // setMemeber(response.data);
            setMemeber(...response.data)
            dispatch(loadUser(...response.data))
          }).catch((error)=>{
              console.log(error);
            setMemeber({});
      });
  }
  React.useEffect(()=>{
      getMemberInfo();
  },[])
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
        <p>{member.name==undefined?"":member.name+'님, 안녕하세요!'}</p>
        <button onClick={signIn} style={{display:member.name==undefined?'':'none'}}>로그인</button>
        <button onClick={signUp} style={{display:member.name==undefined?'':'none'}}>회원가입</button>
        <button onClick={signOut} style={{display:member.name!=undefined?'':'none'}}>로그아웃</button>
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
  z-index: 1;

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
    justify-content: center;

    vertical-align: center;
  }

  & div > button {
    width: 90px;
    height: 40px;
    margin-left: 10px;
  }
`;
export default Header;
