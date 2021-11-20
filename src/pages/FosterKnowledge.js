import React from 'react';
import { Grid, Text } from '../elements';
import { useSelector } from 'react-redux';
import { WarningAlert } from '../shared/Alerts';

const FosterKnowledge = (props) => {
  const { history } = props;
  const userInfo = useSelector((state) => state.user.user.userInfo);

  const token = localStorage.getItem('USER_TOKEN');
  const isLogin = useSelector((state) => state.user?.user.isLogin);

  if (token && !isLogin) {
    return <div>로딩중~</div>;
  }

  return (
    <Grid
      maxWidth='414px'
      width='auto'
      margin='0 auto 90px'
      position='relative'>
      <Grid
        cusor='pointer'
        zIndex='9999'
        _onClick={() => {
          history.goBack();
        }}
        position='absolute'
        width='20px'
        height='20px'
        top='-58px'
        left='36px'>
        <Grid width='12px' height='7px'>
          <img src={process.env.PUBLIC_URL + '/img/icon/back_icon.svg'} />
        </Grid>
      </Grid>

      <Grid position='absolute' top='-58px' left='0' right='0'>
        <Text size='18px' margin='0' weight='800' align='center'>
          튜토리얼 이수 현황
        </Text>
      </Grid>

      {/* 필수지식 */}
      <Grid
        cusor='pointer'
        position='relative'
        _onClick={() => {
          history.push('/essentialknowledge');
          window.sessionStorage.clear();
        }}
        display='flex'
        justifyContent='center'
        alignItems='center'
        width='128px'
        height='128px'
        margin='119px auto 0'
        borderRadius='64px'
        bg='#FFFFFF'
        boxShadow='4px 4px 20px rgba(0, 0, 0, 0.1)'>
        {userInfo.eduList && userInfo.eduList[0].필수지식 === true ? (
          <Grid
            top='-8px'
            left='-7px'
            width='37px'
            height='37px'
            bg='#FFBE5B'
            position='absolute'
            borderRadius='18px'
            display='flex'
            justifyContent='center'
            alignItems='center'>
            <Text color='white' margin='0' size='12px'>
              완료
            </Text>
          </Grid>
        ) : (
          ''
        )}
        <img
          width='95.18px'
          height='87.97px'
          src={process.env.PUBLIC_URL + '/img/GUIicon/badge_1_icon.svg'}></img>
      </Grid>

      <Text width='auto' size='18px' weight='800' align='center'>
        필수지식
      </Text>

      {/* 심화지식 */}
      <Grid
        cusor='pointer'
        position='relative'
        _onClick={() => {
          history.push('/advancedknowledge1');
          window.sessionStorage.clear();
        }}
        display='flex'
        justifyContent='center'
        alignItems='center'
        width='128px'
        height='128px'
        margin='24px auto 0'
        borderRadius='64px'
        bg='#FFFFFF'
        boxShadow='4px 4px 20px rgba(0, 0, 0, 0.1)'>
        {userInfo.eduList && userInfo.eduList[0].심화지식 === true ? (
          <Grid
            top='-8px'
            left='-7px'
            width='37px'
            height='37px'
            bg='#FFBE5B'
            position='absolute'
            borderRadius='18px'
            display='flex'
            justifyContent='center'
            alignItems='center'>
            <Text color='white' margin='0' size='12px'>
              완료
            </Text>
          </Grid>
        ) : (
          ''
        )}
        <img
          width='101px'
          height='89px'
          src={process.env.PUBLIC_URL + '/img/GUIicon/badge_2_icon.svg'}></img>
      </Grid>

      <Text width='auto' size='18px' weight='800' align='center'>
        심화지식1
      </Text>

      {/* 심화지식2 */}
      <Grid
        cusor='pointer'
        position='relative'
        _onClick={() => {
          history.push('/advancedknowledge2');
          window.sessionStorage.clear();
        }}
        display='flex'
        justifyContent='center'
        alignItems='center'
        width='128px'
        height='128px'
        margin='24px auto 0'
        borderRadius='64px'
        bg='#FFFFFF'
        boxShadow='4px 4px 20px rgba(0, 0, 0, 0.1)'>
        {userInfo.eduList && userInfo.eduList[0].심화지식2 === true ? (
          <Grid
            top='-8px'
            left='-7px'
            width='37px'
            height='37px'
            bg='#FFBE5B'
            position='absolute'
            borderRadius='18px'
            display='flex'
            justifyContent='center'
            alignItems='center'>
            <Text color='white' margin='0' size='12px'>
              완료
            </Text>
          </Grid>
        ) : (
          ''
        )}
        <img
          width='101px'
          height='89px'
          src={process.env.PUBLIC_URL + '/img/GUIicon/badge_3_icon.svg'}></img>
      </Grid>

      <Text width='auto' size='18px' weight='800' align='center'>
        심화지식2
      </Text>
    </Grid>
  );
};

export default FosterKnowledge;
