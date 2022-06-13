import React from 'react';
import styled from 'styled-components';
import PostList from '../components/PostList';
import CreateIcon from '@mui/icons-material/Create';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const navigate = useNavigate();

  // 탭 메뉴 구현 부분
  const [activeIndex, setActiveIndex] = React.useState(0);
  const tabArr = [
    {
      tabTitle: <button onClick={() => tabClickHandler(0)}>All</button>,
      tabContent: <PostList activeIndex={activeIndex} />,
    },
    {
      tabTitle: <button onClick={() => tabClickHandler(1)}>컴퓨터</button>,
      tabContent: <PostList activeIndex={activeIndex} />,
    },
    {
      tabTitle: <button onClick={() => tabClickHandler(2)}>노트북</button>,
      tabContent: <PostList activeIndex={activeIndex} />,
    },
    {
      tabTitle: <button onClick={() => tabClickHandler(3)}>웨어러블</button>,
      tabContent: <PostList activeIndex={activeIndex} />,
    },
    {
      tabTitle: <button onClick={() => tabClickHandler(4)}>가전제품</button>,
      tabContent: <PostList activeIndex={activeIndex} />,
    },
    {
      tabTitle: <button onClick={() => tabClickHandler(5)}>기타</button>,
      tabContent: <PostList activeIndex={activeIndex} />,
    },
  ];

  const tabClickHandler = (index) => {
    setActiveIndex(index);
  };

  return (
    //   박승현님 부분
    // <div>

    //   <button
    //     onClick={() => {
    //       navigate('/update');
    //     }}
    //   >
    //     update
    //   </button>
    //   <button
    //     onClick={() => {
    //       navigate('/detail');
    //     }}
    //   >
    //     detail
    //   </button>
    //   <WriteBtn onClick={() => { navigate('/add') }} >
    //     <CreateIcon/>
    //   </WriteBtn>
    // </div>

    // 오누리님 부분
    <Container>
      <Banner>배너 이미지 들어가유~</Banner>
      <TabMenu>
        {tabArr.map((section, idx) => {
          return section.tabTitle;
        })}
        {/* <button>All</button>
        <button>컴퓨터</button>
        <button>노트북</button>
        <button>웨어러블</button>
        <button>가전제품</button>
        <button>기타</button> */}
      </TabMenu>
      <div>
        {/* <PostList /> */}
        {tabArr[activeIndex].tabContent}
      </div>
      <WriteBtn>
        <CreateIcon />
      </WriteBtn>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 70px;
`;

const Banner = styled.div`
  background-color: #beaffc;
  width: 100%;
  height: 200px;
`;

const TabMenu = styled.div`
  width: 100%;
  height: 50px;

  border-bottom: 1px solid #eee;

  display: flex;
  align-items: center;
  justify-content: center;

  & button {
    width: 120px;
    height: 100%;

    background-color: transparent;
    border: none;

    font-size: 15px;
  }

  & button:hover {
    cursor: pointer;
    background-color: #fafafa;
  }

  & button:focus {
    border-bottom: 2px solid red;
    font-weight: bold;
  }
`;

const WriteBtn = styled.div`
  width: 60px;
  height: 60px;

  background-color: green;
  border-radius: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  right: 2em;
  bottom: 2em;

  cursor: pointer;
`;

export default Main;
