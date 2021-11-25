import React from 'react';
import { useDispatch } from 'react-redux';
import 'react-datepicker/dist/react-datepicker.css';

import { Grid } from '../elements';
import {
  MainHello,
  MainIfYouFirstAdoption,
  MainAdoptionCardList,
} from '../components/main';
import { postActions } from '../redux/modules/post';
import WebSocket from '../components/WebSocket';
const Main = (props) => {
  const [wsConnectSubscribe] = WebSocket();
  const dispatch = useDispatch();
  const token = localStorage.getItem('USER_TOKEN');
  React.useEffect(() => {
    if (token) {
      wsConnectSubscribe();
    }
    dispatch(postActions.getMainPostMW());
  }, []);

  return (
    <Grid maxWidth='414px' margin='0 auto 50px auto'>
      <Grid width='auto' padding='0 24px' overflow='auto'>
        <Grid margin='60px 0 40px 0'>
          <MainHello />
        </Grid>
        <Grid margin='0 0 40px 0'>
          <MainIfYouFirstAdoption />
        </Grid>
        <Grid>
          <MainAdoptionCardList />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Main;
