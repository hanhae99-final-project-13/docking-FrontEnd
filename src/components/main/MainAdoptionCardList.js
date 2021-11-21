import React, { useEffect } from 'react';
import styled from 'styled-components';
import { history } from '../../redux/configureStore';

import { Card, Carousel2 } from '../';
import { Grid, Text } from '../../elements';
import { useSelector } from 'react-redux';
import SliderBox from '../SliderBox';

const MainAdoptionCardList = (props) => {
  const mainPostList = useSelector((state) => state.post.mainPostList);
  const goAdoptionPage = () => {
    history.push('/adoption');
  };

  return (
    <Grid margin='0 0 40px 0'>
      <Grid
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        margin='0 0 5px 0'
        width='calc(100% - 36px)'
        height='auto'
      >
        <Grid display='flex'>
          <Text
            margin='0 8px 0 0'
            size='18px'
            weight='800'
            _onClick={goAdoptionPage}
          >
            저랑 <ElSpan>가족 </ElSpan>하실래요?
          </Text>
          <img src={process.env.PUBLIC_URL + '/img/icon/eye_heart.svg'} />
        </Grid>
        <img
          width='13'
          height='4'
          src={process.env.PUBLIC_URL + '/img/icon/setting_horizontal_icon.svg'}
          onClick={() => history.push('/adoption')}
        />
      </Grid>
      <Carousel2 width={mainPostList.length}>
        {mainPostList.map((p) => {
          return (
            <Card
              key={p.postId}
              breed={p.breed}
              sex={p.sex}
              age={p.age}
              createAt={p.createAt}
              modifiedAt={p.modifiedAt}
              ownerType={p.ownerType}
              address={p.address}
              img={p.img.split(' ##')[0]}
              postId={p.postId}
              isAdopted={p.isAdopted}
              margin='0 20px 0 0'
            />
          );
        })}
      </Carousel2>
    </Grid>
  );
};

const ElSpan = styled.span`
  color: #fe7968;
  font-size: 18px;
  font-weight: 800;
`;

export default MainAdoptionCardList;
