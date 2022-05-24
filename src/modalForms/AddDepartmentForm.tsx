import { Formik } from 'formik';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { fetchNewDepartment } from '../redux/departments/actions';
import { IDepartment } from '../types/departments';
import * as yup from 'yup';

const AddDepartmentForm: FC = () => {
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
  const dispatch = useDispatch();

  function createNewDepartment(values) {
    const newDepartment: IDepartment = {
      name: values.name,
      description: values.description,
    };
    dispatch(fetchNewDepartment(newDepartment));
  }

  return (
      <Formik
        initialValues={{ name: '', description: '' }}
        validateOnBlur
        onSubmit={(values) => createNewDepartment(values)}
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
              <legend>Add department</legend>
              <input
                type="text"
                name="name"
                placeholder="Department name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                required
              />
              {touched.name && errors.name && (
                <div className="validation">{errors.name}</div>
              )}
              <textarea
                name="description"
                placeholder="Department description"
                onChange={handleChange}
                onBlur={handleBlur}
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
                  Add department
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

export default AddDepartmentForm;
