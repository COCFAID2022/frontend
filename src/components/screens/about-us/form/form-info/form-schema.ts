import * as yup from 'yup';

export const schema = yup.object().shape({
  fullName: yup
    .string()
    .min(7, 'Дуже мало символів')
    .max(30, 'Дуже багато символів')
    .required("Ім'я і прізвище є обов'язковим полем!"),
  email: yup
    .string()
    .email('Введіть коректний емейл!')
    .min(1, 'Дуже мало символів!')
    .max(20, 'Дуже багато символів!')
    .required("Email є обов'язковим полем!"),
  nationality: yup
    .string()
    .min(4, 'Дуже мало символів!')
    .max(20, 'Дуже багато символів!')
    .required("Nationality є обов'язковим полем!"),
  description: yup
    .string()
    .min(4, 'Дуже мало символів!')
    .max(20, 'Дуже багато символів!')
    .required("Description є обов'язковим полем!"),
});

export type TypeSchema = yup.InferType<typeof schema>;
