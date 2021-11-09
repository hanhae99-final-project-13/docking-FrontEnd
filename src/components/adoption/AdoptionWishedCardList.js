import React from 'react';
import styled from 'styled-components';

import { Grid, Image } from '../../elements';
import { Card } from '../';
import { history } from '../../redux/configureStore';
import { useSelector } from 'react-redux';

const AdoptionWishedCardList = (props) => {
  const wishPostList = useSelector((state) => state.post.wishPostList);
  const goDetail = () => {
    history.push('/');
  };
  return (
    <Grid width='calc(100% + 1rem)'>
      <Grid
        display='flex'
        justifyContent='space-between'
        width='calc(100% - 1rem)'
      >
        <Title>
          저에게 <span>관심</span>있으시죠?
        </Title>
        <Image size='12' />
      </Grid>
      <SliderBox>
        <InnerSlider width={wishPostList.length}>
          {wishPostList.map((p) => {
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
                img={p.img.split(' ##'[0])}
                postId={p.postId}
                isAdopted={p.isAdopted}
              />
            );
          })}
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
  width: ${(props) => props.width * 63}%;
  padding-left: 1rem;
  padding-top: 1rem;
`;

export default AdoptionWishedCardList;
