import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeToken } from '../redux/auth/actions';
import { authSelector } from '../redux/auth/selectors';

const LogoutBtn = () => {
  const dispatch = useDispatch();
  const {} = useSelector(authSelector);
  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(removeToken());
  };
  return (
    <>
      {localStorage.getItem('token') && (
        <Link to="/login">
          <button className="btn btn-primary" onClick={handleLogout}>
            Logout
          </button>
        </Link>
      )}
    </>
  );
};

export default LogoutBtn;
