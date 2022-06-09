import { FC } from 'react';
import { useDispatch } from 'react-redux';
import EditEmployeeForm from '../modalForms/EditEmployeeForm';
import { fetchDeletedEmployee } from '../redux/employees/actions';
import { EmployeeData } from '../types/employee';

interface EmployeeProps {
  employee: EmployeeData;
}

const Employee: FC<EmployeeProps> = ({ employee }) => {
  const dispatch = useDispatch()
  const { username, email, firstName, lastName, _id } = employee

  const handleDeleteEmployee = () => {
    dispatch(fetchDeletedEmployee(_id!))
  }

  return (
    <div className="employee-item item-block">
      <EditEmployeeForm employee={employee}/>
      <img
        className="item__img"
        src="#"
        width="1"
        height="1"
        loading="lazy"
        alt="Avatar"
      />
      <div className="item-wrapper">
        <div className="item-title__wrapper">
          <h2 className="item__title">{firstName}</h2>
          <h2 className="item__title">{lastName}</h2>
        </div>
        <h3 className="item__title__secondary">{username}</h3>
      </div>
      <a href={`mailto:${email}`} className="item__email">
        {email}
      </a>
      <div className="btns-group">
        <button className="btn btn-primary">Edit</button>
        <button onClick={handleDeleteEmployee} className="btn btn-danger">Delete</button>
      </div>
    </div>
  );
};

export default Employee;
