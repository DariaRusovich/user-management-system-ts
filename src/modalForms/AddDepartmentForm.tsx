import { Formik } from 'formik';
import { FC, useCallback, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { ModalContext } from '../context/ModalContext';
import { createNewDepartment } from '../redux/departments/actions';
import { IDepartment } from '../types/departments';
import { departmentsValidationSchema } from '../utils/validation/departmentsValidation';

const AddDepartmentForm: FC = () => {
  const { toggleModalClose } = useContext(ModalContext);
  const dispatch = useDispatch();
  const createDepartment = useCallback(
    (values: IDepartment) => {
      const newDepartment: IDepartment = {
        ...values,
      };
      dispatch(createNewDepartment(newDepartment));
    },
    [dispatch]
  );
  const closeModal = () => {
    toggleModalClose();
  };
  return (
    <Formik
      initialValues={{ name: '', description: '' }}
      validateOnBlur
      onSubmit={createDepartment}
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
              <button
                type="reset"
                className="btn btn-danger"
                onClick={closeModal}
              >
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
