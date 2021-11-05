import React from 'react';
import { Grid, Image, Text } from '../elements';
import Footer from '../components/Footer';

const FosterKnowledge = (props) => {
  const { history } = props;

  return (
    <Grid width='375px' margin='10px auto 0'>
      <Grid width='150px' margin='0 auto'>
        <Text margin='0' weight='800' align='center'>
          튜토리얼 필수 현황
        </Text>

        <Grid
          margin='24px 0 0 0'
          position='relative'
          display='flex'
          flexDirection='column'
          alignItems='center'>
          <Grid
            left='15px'
            width='37px'
            height='37px'
            bg='#FF6666'
            position='absolute'
            borderRadius='18px'
            display='flex'
            justifyContent='center'
            alignItems='center'>
            <Text color='white' margin='0' size='12px'>
              완료
            </Text>
          </Grid>

          <Image
            size='128'
            src='https://image.shutterstock.com/image-vector/happy-woman-little-doghand-drawn-600w-1942348717.jpg'
            boxShadow='4px 4px 20px rgba(0, 0, 0, 0.1)'></Image>
          <Text margin='21px 0 0 0' weight='700'>
            필수지식
          </Text>
        </Grid>

        <Grid
          margin='24px 0 0 0'
          position='relative'
          display='flex'
          flexDirection='column'
          alignItems='center'>
          <Grid
            left='15px'
            width='37px'
            height='37px'
            bg='#FF6666'
            position='absolute'
            borderRadius='18px'
            display='flex'
            justifyContent='center'
            alignItems='center'>
            <Text color='white' margin='0' size='12px'>
              완료
            </Text>
          </Grid>

          <Image
            size='128'
            src='https://image.shutterstock.com/image-vector/happy-woman-little-doghand-drawn-600w-1942348717.jpg'
            boxShadow='4px 4px 20px rgba(0, 0, 0, 0.1)'></Image>
          <Text margin='21px 0 0 0' weight='700'>
            심화지식1
          </Text>
        </Grid>

        <Grid
          margin='24px 0 0 0'
          position='relative'
          display='flex'
          flexDirection='column'
          alignItems='center'>
          <Grid
            left='15px'
            width='37px'
            height='37px'
            bg='#FF6666'
            position='absolute'
            borderRadius='18px'
            display='flex'
            justifyContent='center'
            alignItems='center'>
            <Text color='white' margin='0' size='12px'>
              완료
            </Text>
          </Grid>

          <Image
            size='128'
            src='https://image.shutterstock.com/image-vector/happy-woman-little-doghand-drawn-600w-1942348717.jpg'
            boxShadow='4px 4px 20px rgba(0, 0, 0, 0.1)'></Image>
          <Text margin='21px 0 0 0' weight='700'>
            심화지식2
          </Text>
        </Grid>
      </Grid>
      <Footer></Footer>
    </Grid>
  );
};

export default FosterKnowledge;