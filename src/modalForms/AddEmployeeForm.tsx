import { Formik } from 'formik';
import { FC } from 'react';
import * as yup from 'yup';

const AddEmployeeForm: FC = () => {
  const validationsSchema = yup.object().shape({
    firstname: yup
      .string()
      .required()
      .min(1, 'First Name is too short - should be 1 chars minimum.')
      .max(20, 'First Name is too long - should be 20 chars maximum.'),
    lastname: yup
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
  return (
    <Formik
      initialValues={{ firstname: '', lastname: '', username: '', email: '' }}
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
            <legend>Add employee</legend>
            <input
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.firstname}
              type="text"
              name="firstname"
              placeholder="Employee first name"
              required
            />
            {touched.firstname && errors.firstname && (
              <div className="validation">{errors.firstname}</div>
            )}
            <input
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lastname}
              type="text"
              name="lastname"
              placeholder="Employee last name"
              required
            />
            {touched.lastname && errors.lastname && (
              <div className="validation">{errors.lastname}</div>
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

export default AddEmployeeForm;
