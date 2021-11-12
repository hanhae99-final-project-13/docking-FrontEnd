import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Grid } from '../elements';
import {
  MypageUserInfo,
  MypageWishedList,
  MypageAdoptionCheck,
  MypageCategory,
  MypageDockingCheck,
} from '../components/mypage';
import { BackButton, Logo } from '../components';
import { history } from '../redux/configureStore';
import { postActions } from '../redux/modules/post';
import { applyActions } from '../redux/modules/apply';

const Mypage = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user.user.userInfo);
  const [wishedListDisplay, setWishedListDisplay] = React.useState();
  const [adoptionCheckDisplay, setAdoptionCheckDisplay] =
    React.useState('none');
  const [dockingCheck, setDockingCheck] = React.useState('none');
  const isToken = localStorage.getItem('USER_TOKEN');
  const showWishedList = (a) => {
    setAdoptionCheckDisplay('none');
    setDockingCheck('none');
    setWishedListDisplay('block');
    a();
    dispatch(postActions.changeCardCover(false));
    dispatch(postActions.changeDockingDeleteMode(false));
    dispatch(postActions.changeAdoptionDeleteMode(false));
  };
  const showaDockingCheck = (a) => {
    if (dockingCheck === 'block') {
      return;
    }
    setWishedListDisplay('none');
    setAdoptionCheckDisplay('none');
    setDockingCheck('block');
    a();
    dispatch(postActions.changeAdoptionDeleteMode(false));
    dispatch(postActions.changeCardCover(true));
  };
  const showadoptionCheck = (a) => {
    setWishedListDisplay('none');
    setDockingCheck('none');
    setAdoptionCheckDisplay('black');
    a();
    dispatch(postActions.changeCardCover(false));
    dispatch(postActions.changeDockingDeleteMode(false));
  };

  React.useEffect(() => {
    dispatch(postActions.getWishPostMW());
    dispatch(applyActions.getMyApplyMW());
    dispatch(postActions.getMyPostsMW());

    return () => dispatch(postActions.changeCardCover(false));
  }, []);

  if (!isToken) {
    window.alert('로그인이 필요한 페이지입니다!');
    history.goBack();
  }

  return (
    <Grid width='375px' margin='0 auto'>
      <Grid position='relative' height='100px' margin='0 0 16px 0'>
        <BackButton position='absolute' top='65px' left='36px' />
      </Grid>
      <Grid margin='107px 0 0 0' width='auto'>
        <MypageUserInfo />
      </Grid>
      <Grid height='9px' bg='#F6F6F6' />
      <Grid
        padding='30px 36px'
        width='auto'
        boxShadow='4px 4px 20px rgba(0, 0, 0, 0.1)'
      >
        <MypageCategory
          showWishedList={showWishedList}
          showaDockingCheck={showaDockingCheck}
          showadoptionCheck={showadoptionCheck}
        />
        <MypageWishedList display={wishedListDisplay} />
        <MypageDockingCheck display={dockingCheck} />
        <MypageAdoptionCheck display={adoptionCheckDisplay} />
      </Grid>
    </Grid>
  );
};

export default Mypage;
