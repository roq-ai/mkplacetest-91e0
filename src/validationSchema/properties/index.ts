import * as yup from 'yup';

export const propertyValidationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string(),
  price: yup.number().integer().required(),
  location: yup.string().required(),
  image: yup.string(),
  user_id: yup.string().nullable(),
  organization_id: yup.string().nullable(),
});
