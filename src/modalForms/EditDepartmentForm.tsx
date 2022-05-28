import { Formik } from 'formik';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { fetchUpdatedDepartment } from '../redux/departments/actions';
import { IDepartment } from '../types/departments';

interface EditDepartmentFormProps {
  department: IDepartment;
}

const EditDepartmentForm: FC<EditDepartmentFormProps> = ({ department }) => {
  const dispatch = useDispatch()
  const departmentId = department._id
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

  function updateDepartment(values: IDepartment) {
    const updatedDepartment: IDepartment = {
      name: values.name,
      description: values.description,
    };
    dispatch(fetchUpdatedDepartment(departmentId!, updatedDepartment));
  }

  return (
    <Formik
      initialValues={{
        name: department.name,
        description: department.description,
        
      }}
      validateOnBlur
      onSubmit={(values) => updateDepartment(values)}
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
            {touched.name && errors.name && (
              <div className="validation">{errors.name}</div>
            )}
            <textarea
              onChange={handleChange}
              onBlur={handleBlur}
              name="description"
              placeholder="Department description"
              value={values.description}
              required
            ></textarea>
            {touched.description && errors.description && (
              <div className="validation">{errors.description}</div>
            )}
            <div className="btns-wrap">
              <button
                type="submit"
                className="btn btn-success"
                disabled={!isValid && !dirty}
              >
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
