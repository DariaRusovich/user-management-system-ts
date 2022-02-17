import { FC, useEffect, useState } from 'react';
import { getDepartments } from '../api/apiServise';
import { IDepartment } from '../types/types';
import Department from './Department';

const DepartmentsList: FC = () => {
  const [departmentsData, setDepartmentsData] = useState<IDepartment[]>([]);

  useEffect(() => {
    getDepartmentItems();
  }, []);

  async function getDepartmentItems() {
    const [departmentsDataError, departmentsData] = await getDepartments();
    console.log(departmentsData);

    if (departmentsData) {
      const departments = departmentsData.departments.departments;
      console.log(departments);
      setDepartmentsData(departments);
    } else {
    }
  }

  return (
    <section className="section">
      <div className="container section-wrap">
        <div className="wrapper">
          <button className="btn btn-success">+ Add department</button>
          <div className="form-wrap"></div>
        </div>
        <div className="item-list">
          {departmentsData.map((department) => (
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
