import { FC } from 'react';
import { Link } from 'react-router-dom';
import wat from '../img/wat.jpg';
import '../styles/NotFound.scss'

const NotFound: FC = () => {
  return (
    <section className="section">
      <div className="container item-wrapper">
        <h1 className="item-title">
          404 Sorry, page not found:( <Link to="/">Go back</Link>
        </h1>
        <img
          className="item-img"
          width="1"
          height="1"
          loading="lazy"
          src={wat}
          alt="Not Found"
        />
      </div>
    </section>
  );
};

export default NotFound;
