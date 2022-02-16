import { FC, useEffect, useState } from 'react';
import { getDepartments } from '../api/apiServise';
import { IDepartment } from '../types/types';
import Department from './Department';

const DepartmentsList: FC = () => {
  const [departments, setDepartments] = useState<IDepartment[]>([]);
  useEffect(() => {
    getDepartmentItems();
  }, []);
  async function getDepartmentItems() {
    const departments = await getDepartments();
    console.log(departments);

    if (departments) {
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
