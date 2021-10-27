import React, { useEffect } from 'react';
import styled from 'styled-components';
import { history } from '../redux/configureStore';

import { Card } from '../components';
import { Grid, Image } from '../elements';

const MainAdoptionCardList = (props) => {
  const slider = React.useRef();
  const innerSlider = React.useRef();
  // const slider = document.querySelector('#sliderBox');
  // const innerSlider = document.querySelector('#sliderInner');
  let pressed = false;
  let startX;
  let x;

  const sliderMouseDown = (e) => {
    console.log(e.offsetLeft);
    console.log(slider);
    console.log(slider.current.style.cursor);
    pressed = true;
    startX = e.offsetX - InnerSlider.offsetLeft;
    console.log(startX);
    slider.current.style.cursor = 'grabbing';
  };
  const sliderMouseenter = () => {
    slider.current.style.cursor = 'grab';
  };
  const sliderMouseUp = () => {
    slider.current.style.cursor = 'grab';
  };
  window.addEventListener('mouseup', () => {
    pressed = false;
  });

  const checkBoundary = () => {
    let outer = slider.current.getBoundingClientRect();
    let inner = innerSlider.current.getBoundingClientRect();
    console.log(outer, inner);
    if (parseInt(innerSlider.style.left) > 0) {
      innerSlider.style.left = '0';
    } else if (inner.right < outer.right) {
    }
  };

  const goAdoptionPage = () => {
    history.push('/');
  };

  useEffect(() => {}, []);

  return (
    <Grid overflowX='hidden'>
      <Grid display='flex' justifyContent='space-between'>
        <Title onClick={goAdoptionPage}>
          저랑 <span>가족</span>하실래요?
        </Title>
        <Image size='12' _onClick={goAdoptionPage} />
      </Grid>
      <SliderBox
        ref={slider}
        onMouseDown={sliderMouseDown}
        onMouseEnter={sliderMouseenter}
        onMouseUp={sliderMouseUp}
      >
        <InnerSlider ref={innerSlider}>
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

const SliderBox = styled.div``;

const InnerSlider = styled.div`
  display: flex;
  justify-content: space-between;
  width: 800vw;
  pointer-events: none;
`;

export default MainAdoptionCardList;
