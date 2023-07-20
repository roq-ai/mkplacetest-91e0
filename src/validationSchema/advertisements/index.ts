import * as yup from 'yup';

export const advertisementValidationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string(),
  image: yup.string(),
  user_id: yup.string().nullable(),
  property_id: yup.string().nullable(),
});
