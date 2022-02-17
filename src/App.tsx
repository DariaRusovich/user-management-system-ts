import DepartmentsList from './components/DepartmentsList';
import LoginForm from './components/LoginForm';
import LoginPage from './pages/LoginPage';
import { Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import PrivateRoute from './hoc/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Header />
      <Link to="/login">login</Link>
      <Link to="/">home</Link>
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <DepartmentsList />
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
