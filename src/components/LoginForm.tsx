import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchTokens } from '../redux/auth/actions';
import { authSelector } from '../redux/auth/selectors';
import { LoginData } from '../types/auth';


interface ILoginFormProps {
  signin?: (loginData: LoginData) => Promise<void>;
}

const LoginForm: FC<ILoginFormProps> = ({ signin }) => {
  const { error, loading, tokens } = useSelector(authSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  function handleSubmit(event: React.MouseEvent<HTMLFormElement>) {
    event.preventDefault();
    const loginData: LoginData = {};
    loginData.username = name;
    loginData.password = password;
    dispatch(fetchTokens(loginData));
    navigate('/');
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
