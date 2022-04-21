import { FC } from 'react';
import { Link } from 'react-router-dom';
import { DEPARTMENTS, EMPLOYEES_URL } from '../constants/urls';
import { IDepartment } from '../types/departments';

interface DepartmentProps {
  department: IDepartment;
}

const Department: FC<DepartmentProps> = ({ department }) => {
  const { picture, name, description } = department;

  return (
    <div className="department-item item-block">
      <img
        className="item__img"
        src={picture}
        width="1"
        height="1"
        loading="lazy"
        alt="Avatar"
      />
      <h2 className="department-item__title item__title title">{name}</h2>
      <p className="department-item__description">{description}</p>
      <div className="btns-group">
        <button className="btn btn-primary">Edit</button>
        <button className="btn btn-danger">Delete</button>
        <Link to={`${DEPARTMENTS}/${department._id}${EMPLOYEES_URL}`}>
          <button className="btn btn-success">Employees</button>
        </Link>
      </div>
    </div>
  );
};

export default Department;
