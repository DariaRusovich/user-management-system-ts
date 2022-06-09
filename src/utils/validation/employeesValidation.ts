import * as yup from 'yup';
export const employeesValidationsSchema = yup.object().shape({
  firstName: yup
    .string()
    .required()
    .min(1, 'First Name is too short - should be 1 chars minimum.')
    .max(20, 'First Name is too long - should be 20 chars maximum.'),
  lastName: yup
    .string()
    .required()
    .min(1, 'Last Name is too short - should be 1 chars minimum.')
    .max(20, 'Last Name is too long - should be 20 chars maximum.'),
  username: yup
    .string()
    .required()
    .min(3, 'User Name is too short - should be 3 chars minimum.')
    .max(15, 'User Name is too long - should be 15 chars maximum.'),
  email: yup.string().email()
  .required(),
});
