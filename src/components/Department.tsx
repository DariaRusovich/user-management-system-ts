import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { DEPARTMENTS, EMPLOYEES_URL } from '../constants/urls';
import EditDepartmentForm from '../modalForms/EditDepartmentForm';
import { fetchDeletedDepartment } from '../redux/departments/actions';
import { IDepartment } from '../types/departments';

interface DepartmentProps {
  department: IDepartment;
}

const Department: FC<DepartmentProps> = ({ department }) => {
  const { picture, name, description, _id } = department;
  const dispatch = useDispatch();

  const handleDeleteDepartment = () => {
    dispatch(fetchDeletedDepartment(_id!))
  }

  return (
    <div className="department-item item-block">
      <EditDepartmentForm department={department} />
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
        <button onClick={handleDeleteDepartment} className="btn btn-danger">Delete</button>
        <Link to={`${DEPARTMENTS}/${department._id}${EMPLOYEES_URL}`}>
          <button className="btn btn-success">Employees</button>
        </Link>
      </div>
    </div>
  );
};

export default Department;
