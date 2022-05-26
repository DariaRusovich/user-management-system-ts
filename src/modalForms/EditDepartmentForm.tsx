import { Formik } from 'formik';
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import { fetchDepartment } from '../redux/departments/actions';
import { departmentsSelector } from '../redux/departments/selectors';
import { IDepartment } from '../types/departments';

interface EditDepartmentFormProps {
  department: IDepartment;
}

const EditDepartmentForm: FC<EditDepartmentFormProps> = ({ department }) => {
  const dispatch = useDispatch();
  const { departmentData } = useSelector(departmentsSelector);
  const { name, description } = departmentData;
  const departmentId = department._id;
  console.log(departmentData);

  useEffect(() => {
    dispatch(fetchDepartment(departmentId!));
  }, []);

  const validationsSchema = yup.object().shape({
    name: yup
      .string()
      .required()
      .min(2, 'Name is too short - should be 2 chars minimum.')
      .max(10, 'Name is too long - should be 10 chars maximum.'),
    description: yup
      .string()
      .required()
      .min(5, 'Description is too short - should be 5 chars minimum.')
      .max(50, 'Description is too long - should be 50 chars maximum.'),
  });
  return (
    <Formik
      initialValues={{ name: name, description: description }}
      validateOnBlur
      onSubmit={(values) => console.log(values)}
      validationSchema={validationsSchema}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        isValid,
        handleSubmit,
        dirty,
      }) => (
        <form className="add-form form" onSubmit={handleSubmit}>
          <fieldset>
            <legend>Edit department</legend>
            <div className="input-wrapper">
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                name="name"
                placeholder="Department name"
                value={values.name}
                disabled
                required
              />
            </div>
            <textarea
              onChange={handleChange}
              onBlur={handleBlur}
              name="description"
              placeholder="Department description"
              value={values.description}
              required
            ></textarea>
            <div className="validation">*Required</div>
            <div className="btns-wrap">
              <button type="submit" className="btn btn-success">
                Edit
              </button>
              <button type="reset" className="btn btn-danger">
                Cancel
              </button>
            </div>
          </fieldset>
        </form>
      )}
    </Formik>
  );
};

export default EditDepartmentForm;
