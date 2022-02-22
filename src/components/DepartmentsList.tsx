import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import { getDepartments } from '../api/apiServise';
import { fetchDepartments } from '../redux/departments/action';
import { departmentsSelector } from '../redux/departments/selectors';
//import { IDepartment } from '../types/departments';
import Department from './Department';

const DepartmentsList: FC = () => {
  const { departments, error, loading } = useSelector(departmentsSelector);
  const dispatch = useDispatch()
  //const [departmentsData, setDepartmentsData] = useState<IDepartment[]>([]);

  useEffect(() => {
    dispatch(fetchDepartments())
  }, []);

  // async function getDepartmentItems() {
  //   const [departmentsDataError, departmentsData] = await getDepartments();
  //   if (departmentsData) {
  //     const departments = departmentsData.departments.departments;
  //     setDepartmentsData(departments);
  //   } else {
  //     alert(departmentsDataError);
  //   }
  // }

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
            ></Department>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DepartmentsList;
