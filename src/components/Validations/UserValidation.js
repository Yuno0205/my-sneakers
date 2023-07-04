import * as yup from 'yup';

// const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

const phoneNumberRule = /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/;

export const basicSchema = yup.object().shape({
    email: yup.string().email('Please enter a valid email !').required('Email is required !'),
    phoneNumber: yup
        .string()
        .matches(phoneNumberRule, 'Phone number is not valid !')
        .required('Phone number is required !'),
    firstName: yup.string().min(2).required('Your first name is required !'),
    lastName: yup.string().min(2).required('Your last name is required !'),

    address: yup.string().required('Address is required !'),
});
