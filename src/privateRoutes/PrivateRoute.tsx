import { FC } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute: FC = ({ children }) => {
  const location = useLocation();
  return (
    <>
      {localStorage.getItem('token') ? (children) : (<Navigate to="/login" state={{ from: location }} />)}
    </>
  );
};

export default PrivateRoute;
