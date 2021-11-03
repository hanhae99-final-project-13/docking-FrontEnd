import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { Grid } from '../elements';
import {
  AdoptionCardList,
  AdoptionSearchInput,
  AdoptionWishedCardList,
} from '../components/adoption';
import { history } from '../redux/configureStore';
import Footer from '../components/Footer';
import { postActions } from '../redux/modules/post';

const Adoption = () => {
  const dispatch = useDispatch();
  const wishedPostList = useSelector((state) => state.post.wishedpostList);
  const cur = React.useRef();
  const old = React.useRef();

  const activeCurButton = () => {
    old.current.style.backgroundColor = 'white';
    cur.current.style.backgroundColor = 'steelblue';
  };
  const activeOldButton = () => {
    cur.current.style.backgroundColor = 'white';
    old.current.style.backgroundColor = 'steelblue';
  };

  const goAddPost = () => {
    history.push('/addpost');
  };

  useEffect(() => {
    dispatch(postActions.getPostMW());
    console.log(wishedPostList);
  }, []);

  return (
    <Grid>
      <Grid width='auto' padding='20px' overflow='auto' margin='80px 0 0 0'>
        <Grid>
          <AdoptionWishedCardList />
        </Grid>
        <Grid width='auto' margin='0 0 20px 0'>
          <AdoptionSearchInput />
        </Grid>
        <Grid>
          <Tag ref={cur} onClick={activeCurButton}>
            최신순
          </Tag>
          <Tag ref={old} onClick={activeOldButton}>
            등록순
          </Tag>
          <AdoptionCardList />
        </Grid>
        <AddButton onClick={goAddPost}>+</AddButton>
      </Grid>
      <Footer></Footer>
    </Grid>
  );
};

const Tag = styled.button`
  margin-right: 20px;
  padding: 3px 6px;
  background-color: white;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  :nth-child(1) {
    background-color: steelblue;
  }
`;

const AddButton = styled.button`
  position: fixed;
  bottom: 10%;
  right: 10%;
  width: 50px;
  height: 50px;
  line-height: 50px;
  background-color: white;
  text-align: center;
  border: none;
  border-radius: 50px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export default Adoption;
