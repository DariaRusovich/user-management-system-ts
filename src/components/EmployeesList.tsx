import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { fetchEmployees } from '../redux/employees/actions';
import { employeesSelector } from '../redux/employees/selectors';
import Employee from './Employee';


const EmployeesList = () => {
  const {employees, error, loading} = useSelector(employeesSelector)
  console.log(useParams());
  
  const dispatch = useDispatch()
  //   useEffect(() => {
  //     dispatch(fetchEmployees())
  // }, [])
    return (
        <section className="section">
          <div className="container section-wrap">
            <h1 className="title-secondary">
              {employees.length} employees.{' '}
              <Link to="/" className="title">
                Go back
              </Link>
            </h1>
            <div className="wrapper">
              <button
              >
                + Add employee
              </button>
            </div>
            <div className="item-list">
              {employees.map((employee) => (
                <Employee
                  key={employee._id}
                  employee={employee}
                />
              ))}
            </div>
          </div>
        </section>
    );
};

export default EmployeesList;