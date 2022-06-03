import { FC } from 'react';
import { useLocation, Navigate } from 'react-router-dom';

const PrivateRoute: FC = ({ children }) => {
  const location = useLocation();
  return (
    <>
      {localStorage.getItem('token') ? (
        children
      ) : (
        <Navigate to="/login" state={{ from: location }} />
      )}
    </>
  );
};

export default PrivateRoute;
