import * as Yup from 'yup';

const newUserSchema = Yup.object().shape({
  name: Yup.string().required('Zorunlu Alan'),
  surname: Yup.string().required('Zorunlu Alan'),
  phoneNumber: Yup.string()
    .max(16, 'Max 16')
    .min(11, 'Min 11')
    .required('Zorunlu Alan'),
  email: Yup.string().email('Invalid email adress').required('Zorunlu Alan'),
  gender: Yup.string().required('Zorunlu Alan'),
  age: Yup.number()
    .min(18, 'Min 18')
    .max(80, 'max 80')
    .required('Zorunlu Alan'),
});

export {newUserSchema};
