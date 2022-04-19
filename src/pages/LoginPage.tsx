import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signin } from '../api/apiServise';
import LoginForm from '../components/LoginForm';
import { authSelector } from '../redux/auth/selectors';
import { ILoginData } from '../types/types';
import { Cookie } from '../utils/cookie';

const LoginPage: FC = () => {
  const { loading, loginTokens, error } = useSelector(authSelector);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  async function signIn(loginData: ILoginData) {
    // const [userDataError, userData] = await signin(loginData);
    // if (!userDataError) {
    //   const accessToken = userData.user?.tokens.accessToken;
    //   const refreshToken = userData.user?.tokens.refreshToken;
    //   localStorage.setItem('token', accessToken!);
    //   Cookie.set('refreshToken', refreshToken, 30);
    //   navigate('/');
    // }
  }
  return <LoginForm signin={signIn} />;
};

export default LoginPage;
