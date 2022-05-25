import { Formik } from 'formik';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { fetchNewEmployee } from '../redux/employees/actions';
import { EmployeeData } from '../types/employee';

interface AddEmployeeFormProps {
  id: string;
}

const AddEmployeeForm: FC<AddEmployeeFormProps> = ({ id }) => {
  const dispatch = useDispatch();
  const validationsSchema = yup.object().shape({
    firstName: yup
      .string()
      .required()
      .min(1, 'First Name is too short - should be 1 chars minimum.')
      .max(20, 'First Name is too long - should be 20 chars maximum.'),
    lastName: yup
      .string()
      .required()
      .min(1, 'Name is too short - should be 1 chars minimum.')
      .max(20, 'Name is too long - should be 20 chars maximum.'),
    username: yup
      .string()
      .required()
      .min(3, 'Name is too short - should be 3 chars minimum.')
      .max(15, 'Name is too long - should be 15 chars maximum.'),
    email: yup.string().email().required(),
  });
  function createNewEmployee(values: EmployeeData) {
    const newEmployee: EmployeeData = {
      firstName: values.firstName,
      username: values.username,
      lastName: values.lastName,
      email: values.email,
      department: id,
    };
    dispatch(fetchNewEmployee(newEmployee));
  }
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
      onSubmit={(values) => createNewEmployee(values)}
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
