import LoginPage from './pages/LoginPage';
import { Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import PrivateRoute from './privateRoutes/PrivateRoute';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import EmployeesPage from './pages/EmployeesPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Link to="/login">login</Link>
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route
          path="/departments/:id/employees"
          element={<EmployeesPage />}
        ></Route>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        ></Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
