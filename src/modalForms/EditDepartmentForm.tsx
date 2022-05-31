import { Formik } from 'formik';
import { FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUpdatedDepartment } from '../redux/departments/actions';
import { IDepartment } from '../types/departments';
import { departmentsValidationSchema } from '../utils/validation/departmentsValidation';

interface EditDepartmentFormProps {
  department: IDepartment;
}

const EditDepartmentForm: FC<EditDepartmentFormProps> = ({ department }) => {
  const dispatch = useDispatch();
  const departmentId = department._id;

  const updateDepartment = useCallback(
    (values: IDepartment) => {
      const updatedDepartment: IDepartment = {
        ...values,
      };
      dispatch(fetchUpdatedDepartment(departmentId!, updatedDepartment));
    },
    [dispatch, departmentId]
  );

  return (
    <Formik
      initialValues={{
        name: department.name,
        description: department.description,
      }}
      validateOnBlur
      onSubmit={updateDepartment}
      validationSchema={departmentsValidationSchema}
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
