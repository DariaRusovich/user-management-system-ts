import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDepartments } from '../redux/departments/actions';
import { departmentsSelector } from '../redux/departments/selectors';
import Department from './Department';

const DepartmentsList: FC = () => {
  const { departments, error, loading } = useSelector(departmentsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDepartments());
  }, []);

  return (
    <section className="section">
      <div className="container section-wrap">
        <div className="wrapper">
          <button className="btn btn-success">+ Add department</button>
          <div className="form-wrap"></div>
        </div>
        <div className="item-list">
          {departments.map((department) => (
            <Department
              key={department._id}
              department={department}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DepartmentsList;
