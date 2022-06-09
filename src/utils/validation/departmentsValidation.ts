import * as yup from 'yup';
export const departmentsValidationSchema = yup.object().shape({
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
