import * as yup from 'yup';

export default yup.object().shape({
    username: yup
        .string()
        .required('username is required')
        .min(3, 'username must be longer than 3 characters'),
    password: yup
        .string()
        .required('password is required')
        .min(5, 'password must be longer than 5 characters'),
    // phoneNumber: yup
    //     .string()
});