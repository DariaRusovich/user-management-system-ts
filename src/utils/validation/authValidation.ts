import * as yup from 'yup';
export const authValidationsSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup
    .string()
    .required('Password is required')
    .min(4, 'Password is too short - should be 4 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password must contain Latin letters.'),
});
