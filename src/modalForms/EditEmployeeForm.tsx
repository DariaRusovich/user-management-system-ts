import { Formik } from 'formik';
import { FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchUpdatedEmployee } from '../redux/employees/actions';
import { EmployeeData } from '../types/employee';
import { employeesValidationsSchema } from '../utils/validation/employeesValidation';

interface EditEmployeeFormProps {
  employee: EmployeeData;
}
const EditEmployeeForm: FC<EditEmployeeFormProps> = ({ employee }) => {
  const dispatch = useDispatch();
  const employeeId = employee._id;
  const { id } = useParams() as { id: string };

  const updateEmployee = useCallback((values: EmployeeData) => {
    const updatedEmployee = { ...values, department: id };
    dispatch(fetchUpdatedEmployee(employeeId!, updatedEmployee));
  }, [dispatch, employeeId, id]);

  return (
    <Formik
      initialValues={{
        firstName: employee.firstName,
        lastName: employee.lastName,
        username: employee.username,
        email: employee.email,
        department: id,
      }}
      validateOnBlur
      onSubmit={updateEmployee}
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
            <legend>Edit employee</legend>
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
              disabled
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
                Edit employee
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

export default EditEmployeeForm;
