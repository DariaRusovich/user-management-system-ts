import { Formik } from 'formik';
import { FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { fetchNewEmployee } from '../redux/employees/actions';
import { EmployeeData } from '../types/employee';
import { employeesValidationsSchema } from '../utils/validation/employeesValidation';

interface AddEmployeeFormProps {
  id: string;
}

const AddEmployeeForm: FC<AddEmployeeFormProps> = ({ id }) => {
  const dispatch = useDispatch();

  const createNewEmployee = useCallback(
    (values: EmployeeData) => {
      const newEmployee: EmployeeData = {
        ...values,
        department: id,
      };
      dispatch(fetchNewEmployee(newEmployee));
    },
    [dispatch, id]
  );

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        department: '',
      }}
      validateOnBlur
      onSubmit={createNewEmployee}
      validationSchema={employeesValidationsSchema}
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
            <legend>Add employee</legend>
            <input
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.firstName}
              type="text"
              name="firstName"
              placeholder="Employee first name"
              required
            />
            {touched.firstName && errors.firstName && (
              <div className="validation">{errors.firstName}</div>
            )}
            <input
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lastName}
              type="text"
              name="lastName"
              placeholder="Employee last name"
              required
            />
            {touched.lastName && errors.lastName && (
              <div className="validation">{errors.lastName}</div>
            )}
            <input
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
              type="text"
              name="username"
              placeholder="Employee username"
              required
            />
            {touched.username && errors.username && (
              <div className="validation">{errors.username}</div>
            )}
            <input
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              type="email"
              name="email"
              placeholder="Employee e-mail"
              required
            />
            {touched.email && errors.email && (
              <div className="validation">{errors.email}</div>
            )}
            <div className="btns-wrap">
              <button
                type="submit"
                className="btn btn-success"
                disabled={!isValid && !dirty}
              >
                Add employee
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

export default AddEmployeeForm;
