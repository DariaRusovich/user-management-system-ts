import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import AddEmployeeForm from '../modalForms/AddEmployeeForm';
import { fetchDepartment } from '../redux/departments/actions';
import { departmentsSelector } from '../redux/departments/selectors';
import { fetchEmployees } from '../redux/employees/actions';
import { employeesSelector } from '../redux/employees/selectors';
import Employee from './Employee';
import Error from './Error';
import Loader from './Loader';

const EmployeesList = () => {
  const { employees, error, loading } = useSelector(employeesSelector);
  const { department } = useSelector(departmentsSelector);
  const { id } = useParams() as { id: string };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchEmployees(id));
    dispatch(fetchDepartment(id));
  }, [id]);

  // if (error) {
  //   return <Error />;
  // }

  if (loading) {
    return <Loader />;
  }

  return (
    <section className="section">
      <div className="container section-wrap">
        <AddEmployeeForm id={id}></AddEmployeeForm>
        <h1 className="title-secondary">
          {employees.length} employees in the <span>{department.name}</span> department <br />
          <Link to="/" className="title">
            Go back
          </Link>
        </h1>
        <div className="wrapper">
          <button className="btn btn-success">+ Add employee</button>
        </div>
        <div className="item-list">
          {employees.map((employee) => (
            <Employee key={employee._id} employee={employee} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmployeesList;
