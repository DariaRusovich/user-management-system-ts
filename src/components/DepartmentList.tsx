import { FC } from 'react';

const DepartmentList:FC = () => {
  return (
    <section className="section">
      <div className="container section-wrap">
        <div className="wrapper">
          <button className="btn btn-success">+ Add department</button>
          <div className="form-wrap"></div>
        </div>
        <div className="item-list"></div>
      </div>
    </section>
  );
};

export default DepartmentList;
