import * as yup from 'yup';

export const validationSchema = () => {
    return yup.object({
        email: yup
            .string()
            .email('invalid email address')
            .matches(
                /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
            )
            .required(),
        password: yup.string().min(8).required(),
        username: yup.string().max(25).min(3).required(),
    });
};
