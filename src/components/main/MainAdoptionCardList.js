import React, { useEffect } from 'react';
import styled from 'styled-components';
import { history } from '../../redux/configureStore';

import { Card } from '../';
import { Grid, Image } from '../../elements';

const MainAdoptionCardList = (props) => {
  const goAdoptionPage = () => {
    history.push('/adoption');
  };

  return (
    <Grid width='calc(100% + 1rem)' margin='0 0 20px 0'>
      <Grid display='flex' justifyContent='space-between'>
        <Title onClick={goAdoptionPage}>
          저랑 <span>가족</span>하실래요?
        </Title>
        <Image size='12' _onClick={goAdoptionPage} />
      </Grid>
      <SliderBox>
        <InnerSlider>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </InnerSlider>
      </SliderBox>
    </Grid>
  );
};

const Title = styled.p`
  margin: 0 0 20px 0;

  span {
    font-weight: bold;
  }
`;

const SliderBox = styled.div`
  height: 220px;
  margin-left: -1rem;
  margin-top: -1rem;
  overflow: visible;
  overflow-x: scroll;

  :: -webkit-scrollbar {
    display: none;
  }
`;

const InnerSlider = styled.div`
  display: flex;
  justify-content: space-between;
  width: 800vw;
  padding-left: 1rem;
  padding-top: 1rem;
`;

export default MainAdoptionCardList;