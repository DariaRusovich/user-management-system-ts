import React, { FC, useState } from 'react';
import { ILoginData } from '../types/types';

interface ILoginFormProps{
    signin: (loginData: ILoginData) => Promise<void>
}

const LoginForm: FC<ILoginFormProps> = ({signin}) => {
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  function handleSubmit(event: React.MouseEvent<HTMLFormElement>) {
    event.preventDefault();
    const loginData: ILoginData = {};
    loginData.username = name;
    loginData.password = password;
    signin(loginData)
  }
  return (
    <section className="section">
      <div className="container form-wrap">
        <form className="login-form form" onSubmit={handleSubmit}>
          <fieldset className="title">
            <legend>Login form</legend>
            <div className="input-wrapper">
              <input
                type="text"
                name="username"
                onChange={(e) => setName(e.target.value)}
                placeholder="Username"
                required
              />
              <div className="validation">*Required</div>
            </div>
            <div className="input-wrapper">
              <input
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
              <div className="validation">*Required</div>
            </div>
            <button type="submit" className="btn btn-success">
              Login
            </button>
          </fieldset>
        </form>
      </div>
    </section>
  );
};

export default LoginForm;
