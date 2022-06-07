import { FC, useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDepartments } from '../redux/departments/actions';
import { departmentsSelector } from '../redux/departments/selectors';
import AddDepartmentForm from '../modalForms/AddDepartmentForm';
import Department from './Department';
import Error from './Error';
import Loader from './Loader';
import { ModalContext } from '../context/ModalContext';


const DepartmentsList: FC = () => {
  const { departments, error, loading } = useSelector(departmentsSelector);
  const dispatch = useDispatch();
  const { state, toggleModalOpen } = useContext(ModalContext);
  const { open } = state;

  useEffect(() => {
    dispatch(fetchDepartments());
  }, [dispatch]);

 const openModal = () => {
   toggleModalOpen(<AddDepartmentForm></AddDepartmentForm>)
 }

  // if (error) {
  //   return <Error />;
  // }

  if (loading) {
    return <Loader />;
  }

  return (
    <section className="section">
      <div className="container section-wrap">
        <div className="wrapper">
          <button className="btn btn-success" onClick={openModal}>
            + Add department
          </button>
          <div className="form-wrap"></div>
        </div>
        <div className="item-list">
          {departments.map((department) => (
            <Department key={department._id} department={department} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DepartmentsList;
