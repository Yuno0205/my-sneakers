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
    password: yup.string().min(6).required('Password is required !'),
    address: yup.string().required('Address is required !'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Passwords must match !')
        .required('Required'),
});

// export const advancedSchema = yup.object().shape({
//   username: yup
//     .string()
//     .min(3, "Username must be at least 3 characters long")
//     .required("Required"),
//   jobType: yup
//     .string()
//     .oneOf(["designer", "developer", "manager", "other"], "Invalid Job Type")
//     .required("Required"),
//   acceptedTos: yup
//     .boolean()
//     .oneOf([true], "Please accept the terms of service"),
// });
