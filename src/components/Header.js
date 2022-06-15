import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import CreateIcon from '@mui/icons-material/Create';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../font.css';

import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loadUser } from '../redux/modules/user';
import { authApi } from '../shared/api';

const Header = () => {
  const navigate = useNavigate();
  const [member, setMember] = React.useState({});

  const signIn = () => {
    navigate('/login');
  };

  const signOut = () => {
    // navigate('/login');
    axios.get('/logout').then((res) => {
      setMember({});
      navigate('/login');
    });
  };

  const signUp = () => {
    navigate('/sign_up');
  };

  const getMemberInfo = async () => {
    authApi.authCheck(
      (response) => {
        setMember(response.data);
        // setMemeber(...response.data);
        // dispatch(loadUser(...response.data));
      },
      (error) => {
        console.log(error);
        setMember({});
      }
    );
  };

  React.useEffect(() => {
    getMemberInfo();
  }, []);

  return (
    <Container>
      <h1
        onClick={() => {
          navigate('/');
        }}
      >
        BlackCow
      </h1>
      <div>
        <p>{member.name == undefined ? '' : member.name + '님, 안녕하세요!'}</p>
        <button onClick={signIn} style={{ display: member.name == undefined ? '' : 'none' }}>
          로그인
        </button>
        <button onClick={signUp} style={{ display: member.name == undefined ? '' : 'none' }}>
          회원가입
        </button>
        <button onClick={signOut} style={{ display: member.name != undefined ? '' : 'none' }}>
          로그아웃
        </button>
      </div>
      <WriteBtn
        onClick={() => {
          navigate('/add');
        }}
        style={{ display: member.name != undefined ? '' : 'none' }}
      >
        <CreateIcon style={{ color: '#ffd5d5' }} />
      </WriteBtn>
    </Container>
  );
};

const Container = styled.div`
  background-color: #222831;
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

  & h1 {
    font-family: 'Hahmlet-ExtraBold';
    color: #f05454;
    font-size: 33px;
    cursor: pointer;
    margin: 0;
  }

  & div {
    font-family: 'MinSans-Medium';
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & div > p {
    color: #818181;
    font-size: 16px;
    margin: 0;
  }

  & div > button {
    width: 85px;
    height: 45px;
    margin-left: 10px;

    background-color: transparent;
    color: #f05454;
    border: none;
    border-radius: 5px;
  }

  & div > button:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const WriteBtn = styled.div`
  width: 60px;
  height: 60px;

  background-color: #f05454;
  border-radius: 50px;
  box-shadow: 0px 0px 10px 1px rgba(166, 49, 49, 0.5);

  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  right: 2em;
  bottom: 2em;

  cursor: pointer;
`;

export default Header;
