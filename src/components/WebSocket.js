import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import StompJs from 'stompjs';
import SockJS from 'sockjs-client';
import { actionCreators } from '../redux/modules/user';
// const baseURL = process.env.REACT_APP_SERVER_URI;

const WebSocket = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.user.userInfo.userId);
  console.log(userId);
  const isToken = document.cookie.includes('USER_TOKEN');
  const token = document.cookie.split(';')[0].split('=')[1];
  const client = React.useRef({});
  // const isChatNoti = useSelector((state) => state.notice.isChatNoti);

  // const sock = new SockJS(`http://52.78.159.191/ws-stomp`);
  const sock = new SockJS(`https://seonkang.shop/ws-stomp`);
  const ws = StompJs.over(sock);

  React.useEffect(() => {
    ws.connect({}, () => {
      if (!isToken) {
        // console.log('토큰없음');
        return null;
      }
      console.log('됨');
      ws.subscribe(
        `/sub/${userId}`,
        async (msg) => {
          const alarmData = JSON.parse(msg.body);
          // console.log(msg);
          // console.log(alarmData);
          await dispatch(actionCreators.readAlarm(false));
          dispatch(actionCreators.updateAlarm(alarmData));
        },
        { token },
      );
    });
  }, []);

  // const connect = () => {
  //   client.current = new StompJs.Client({
  //     brokerURL: 'ws://seonkang.shop/ws-stomp', // 웹소켓 서버로 직접 접속
  //     webSocketFactory: () => new SockJS('wss://seonkang.shop/ws-stomp'), // proxy를 통한 접속
  //     // connectHeaders: {
  //     //   'auth-token': 'spring-chat-auth-token',
  //     // },
  //     debug: function (str) {
  //       console.log(str);
  //     },
  //     reconnectDelay: 5000,
  //     heartbeatIncoming: 4000,
  //     heartbeatOutgoing: 4000,
  //     onConnect: () => {
  //       subscribe();
  //     },
  //     onStompError: (frame) => {
  //       console.error(frame);
  //     },
  //   });

  //   client.current.activate();
  // };

  // const disconnect = () => {
  //   client.current.deactivate();
  // };

  // const subscribe = () => {
  //   client.current.subscribe(
  //     `/sub/${userId}`,
  //     async (msg) => {
  //       const alarmData = JSON.parse(msg.body);
  //       // console.log(msg);
  //       // console.log(alarmData);
  //       await dispatch(actionCreators.readAlarm(false));
  //       dispatch(actionCreators.updateAlarm(alarmData));
  //     },
  //     { token },
  //   );
  // };

  // React.useEffect(() => {
  //   if (!isToken) return null;
  //   connect();
  // }, []);

  // console.log('현재 페이지 =====>', window.location.pathname);
  // const history = useHistory();

  return <></>;
  // const wsConnectSubscribe = React.useCallback(async () => {
  //   if (!isToken) {
  //     return null;
  //   }
  //   try {
  //     // const { data } = await T.GET('/auth');
  //     ws.connect({}, () => {
  //       ws.subscribe(
  //         `/sub/${userId}`,
  //         async (noti) => {
  // if (!isChatNoti) {
  //   const newNoti = JSON.parse(noti.body);
  //   // chat 보냈을 때 채팅방에 둘다 있을 때 타입 0
  //   // chat 보냈을 때 채팅방에 한명만 있고 상대방은 로그인 했을 때 타입 1
  //   // chat 보냈을 때 상대방이 로그아웃 타입 2
  //   // tap 요청 받았을 때 타입 3
  //   // tap 요청 거절한게 타입 4
  //   // tap 요청 수락한게 타입 5
  //   if (newNoti.type === 1) {
  //     if (history.location.pathname === '/grabtalk') {
  //       console.log('디패 로드 톡룸');
  //       await dispatch(loadTalkRoomListToAxios());
  //     }
  //     dispatch(setChatNoti(true));
  //   }
  //   if (newNoti.type === 3) {
  //     console.log('tap 요청 받았어!');
  //     dispatch(setTapReceiveNoti(true));
  //   }
  //   if (newNoti.type === 4) {
  //     console.log('거절 되었어!');
  //     dispatch(setTapRefuseNoti(true));
  //   }
  //   if (newNoti.type === 5) {
  //     console.log('그랩되었어!');
  //     dispatch(setTapAcceptNoti(true));
  //   }
  // }
  // },
  // {
  //   isToken,
  //   userEmail: data.email
  // },
  //       );
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   return null;
  // }, []);

  // const wsDisConnectUnsubscribe = React.useCallback(() => {
  //   try {
  //     ws.disconnect(() => {
  //       ws.unsubscribe('sub-0');
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, []);

  // return [wsConnectSubscribe, wsDisConnectUnsubscribe, token, isChatNoti];
};

export default WebSocket;