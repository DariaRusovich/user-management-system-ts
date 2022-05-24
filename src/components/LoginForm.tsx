import { Formik } from 'formik';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchTokens } from '../redux/auth/actions';
import { authSelector } from '../redux/auth/selectors';
import { LoginData } from '../types/auth';
import * as yup from 'yup';
import Error from './Error';
import Loader from './Loader';

const LoginForm: FC = () => {
  const { tokens, error, loading } = useSelector(authSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const validationsSchema = yup.object().shape({
    username: yup.string().required(),
    password: yup
      .string()
      .required('Password is required')
      .min(4, 'Password is too short - should be 4 chars minimum.')
      .matches(/[a-zA-Z]/, 'Password must contain Latin letters.'),
  });

  function handleSubmit(values) {
    const loginData: LoginData = {
      username: values.username,
      password: values.password,
    };
    dispatch(fetchTokens(loginData));
    navigate('/');
  }

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <section className="section">
      <div className="container form-wrap">
        <Formik
          initialValues={{ username: '', password: '' }}
          validateOnBlur
          onSubmit={(values) => handleSubmit(values)}
          validationSchema={validationsSchema}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            isValid,
            handleSubmit,
            dirty,
          }) => (
            <form className="login-form form" onSubmit={handleSubmit}>
              <fieldset className="title">
                <legend>Login form</legend>
                <input
                  type="text"
                  name="username"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                  placeholder="Username"
                  required
                />
                {touched.username && errors.username && (
                  <div className="">*{errors.username}</div>
                )}
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Password"
                  required
                />
                {touched.password && errors.password && (
                  <div className="validation">*{errors.password}</div>
                )}
                <button
                  type="submit"
                  className="btn btn-success"
                  disabled={!isValid && !dirty}
                >
                  Login
                </button>
              </fieldset>
            </form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default LoginForm;
