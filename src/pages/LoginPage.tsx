import { FC } from 'react';
import { signin } from '../api/apiServise';
import LoginForm from '../components/LoginForm';
import { ILoginData } from '../types/types';
import { Cookie } from '../utils/cookie';

const LoginPage: FC = () => {
  async function signIn(loginData: ILoginData) {
    const [userDataError, userData] = await signin(loginData);
    if (!userDataError) {
      console.log(userData);
      const accessToken = userData.user?.tokens.accessToken
      const refreshToken = userData.user?.tokens.refreshToken
      localStorage.setItem('token', accessToken!);
      Cookie.set('refreshToken', refreshToken, 30);
    }
  }
  return <LoginForm signin={signIn} />;
};

export default LoginPage;
