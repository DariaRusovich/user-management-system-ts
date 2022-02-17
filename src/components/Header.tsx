import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container header-wrap">
        <h1 className="header-title title">
          <Link to="/">User management system</Link>
        </h1>
      </div>
    </header>
  );
};

export default Header;
