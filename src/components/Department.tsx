import { FC } from 'react';
import { Link } from 'react-router-dom';



const Department: FC = () => {
  return (
    <div className="department-item item-block">
      <img
        className="item__img"
        src=""
        width="1"
        height="1"
        loading="lazy"
        alt="Avatar"
      />
      <h2 className="department-item__title item__title title">{}</h2>
      <p className="department-item__description">{}</p>
      <div className="btns-group">
        <button className="btn btn-primary">Edit</button>
        <button className="btn btn-danger">Delete</button>

        <Link
          to={'/'}
          // to={`${DEPARTMENT_BY_ID_URL}${department._id}${EMPLOYEES_URL}`}
        >
          <button className="btn btn-success">Employees</button>
        </Link>
      </div>
    </div>
  );
};

export default Department;
