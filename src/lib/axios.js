import axios from 'axios';
import { history } from '../redux/configureStore';

const instance = axios.create({
  baseURL: 'http://52.78.159.191', // 선강님
  // baseURL: 'http://3.38.107.59', // 지은님
  headers: {
    'Content-Type': 'application/json; charset=UTF-8', // 데이터보낼때 인코딩하고 서버쪽에서 받을때 디코딩 할때 글자타입이 필요하다.
    accept: 'application/json',
  },
  withCredentials: true, // CORS를 위해 설정, 기존은 SOP
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('USER_TOKEN');
    // console.log(token);
    if (token === '') {
      return config;
    }
    config.headers = {
      'Content-Type': 'application/json; charset=UTF-8', // 데이터보낼때 인코딩하고 서버쪽에서 받을때 디코딩 할때 글자타입이 필요하다.
      accept: 'application/json',
      Authorization: `Bearer ${token}`,
    };
    return config;
  },
  (err) => {
    console.log(err);
  },
);

// instance.interceptors.response.use(
//   (success) => {
//     return success;
//   },
//   (error) => {
//     if (
//       error.response.data.statusCode === 400 &&
//       error.response.data.responseMessage === '아이디 또는 패스워가 맞지않아요!'
//     ) {
//       return window.alert('비밀번호를 입력해주세요');
//     }
//     return error;
//   },
// );

export const apis = {
  //회원가입 및 로그인 관련 api
  login: (loginInfo) => instance.post('/user/login', loginInfo),
  loginCheck: () => instance.get('/user/check'),
  kakaoLogin: (code) => instance.get(`/oauth/callback/kakao?code=${code}`),
  signup: (registerInfo) => instance.post('/signup', registerInfo),
  checkId: (username) => instance.get(`/signup/checkid?username=${username}`),
  checknickName: (nickname) =>
    instance.get(`/signup/checknickname?nickname=${nickname}`),
  sendPhoneNumber: (phoneNumber) => instance.post('/sendNumber', phoneNumber),
  sendPhoneAuthCode: (authCode) => instance.post('/phoneConfirm', authCode),

  // 유저 관련 api
  getUserInfo: () => instance.get('/userInfo'),
  updateUserInfo: (userInfo) => instance.patch('/user', userInfo),

  //포스트 관련 api
  getMainPots: () => instance.get('/posts'),
  getPots: (defaultSearch) =>
    instance.get(
      `/posts/search/${defaultSearch.page}?
      ${defaultSearch.startDt ? `&startDt=${defaultSearch.startDt}` : ``}
      ${defaultSearch.endDt ? `&endDt=${defaultSearch.endDt}` : ``}
      ${defaultSearch.ownerType ? `&ownerType=${defaultSearch.ownerType}` : ``}
      ${defaultSearch.city ? `&city=${defaultSearch.city}` : ``}
      ${defaultSearch.district ? `&district=${defaultSearch.district}` : ``}
      &sort=${defaultSearch.sort}`,
    ),
  getDetailPost: (postId) => instance.get(`/posts/${postId}`),
  getWishPost: () => instance.get(`/$user/wishes`),
  getMyPosts: () => instance.get(`/user/posts`),
  addPost: (postInfo) => instance.post(`/posts`, postInfo),
  updatePost: (postId, postInfo) =>
    instance.patch(`/posts/${postId}`, postInfo),
  deletePost: (postId) => instance.delete(`/post/${postId}`),
  clickWish: (postId) => instance.post(`/wishes/${postId}`),
  addComment: (comment) => instance.post(`/comments`, comment),
  deleteComment: (commentId) => instance.delete(`/comments/${commentId}`),
  editComment: (commentId, comment) =>
    instance.patch(`/comments/${commentId}`, comment),
  deleteDetail: (postId) => instance.delete(`/posts/${postId}`),

  //알람 api
  getAlarmList: () => instance.get('/alarms'),
  getAlarm: (alarmId) => instance.get(`/alarms/${alarmId}`),
  deleteAlarmList: () => instance.delete('/alarms'),
  //입양신청 관련api
  applyFoster: (postId, data) => instance.post(`/${postId}/adoptions`, data),
  getMyApplyList: () => instance.get(`/requests`),
  getDetailfosterForm: (fosterFormId) =>
    instance.get(`/requests/${fosterFormId}`),
  applyDecision: (fosterFormId, data) =>
    instance.patch(`/foster_forms/${fosterFormId}/acceptance`, data),
  //관심친구 등록
  addWish: (postId) => instance.post('/wishes/', postId),
  //교육자료 api
  education: (classNumber) => instance.get(`/quiz?edu=${classNumber}`),
};
