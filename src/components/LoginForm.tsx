import { Formik } from 'formik';
import { FC, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchTokens } from '../redux/auth/actions';
import { authSelector } from '../redux/auth/selectors';
import { LoginData } from '../types/auth';
import { authValidationsSchema } from '../utils/validation/authValidation';
import Error from './Error';
import Loader from './Loader';

const LoginForm: FC = () => {
  const { tokens, error, loading } = useSelector(authSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAuthSubmit = useCallback((values: LoginData) => {
    const loginData: LoginData = {
      username: values.username,
      password: values.password,
    };
    dispatch(fetchTokens(loginData));
    navigate('/');
  }, [dispatch, navigate]);

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
          onSubmit={handleAuthSubmit}
          validationSchema={authValidationsSchema}
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
                  <div className="validation">*{errors.username}</div>
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
