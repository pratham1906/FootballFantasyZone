import { ErrorMessage, useFormik } from 'formik';
import { useLoginMutation } from '../../common/generated/graphql';
import { LoginFormValues } from '../../types';
import { FormField } from '../../common/components/FormField';
import { validationSchema } from './loginForm/validationSchema';
import { toErrorMap } from '../../common/utils';

type Props = {
    switchToRegister: (valuesToSave: LoginFormValues) => void;
    savedValues?: LoginFormValues;
    setModalVisible?: (value: boolean) => void;
    onSuccess: () => void;
};

const NORMAL_STATUS = undefined;

const defaultValues = {
    email: '',
    password: '',
};

export function LoginForm({
    switchToRegister,
    savedValues = defaultValues,
    onSuccess: success,
}: Props) {
    const [login] = useLoginMutation();

    const formik = useFormik({
        initialValues: {
            email: savedValues.email,
            password: savedValues.password,
        },
        validationSchema,
        onSubmit: async (values, { setErrors, setStatus, setSubmitting }) => {
            setSubmitting(true);

            const response = await login({
                variables: { options: values },
            });

            const error = response?.data?.login?.error;
            const account = response?.data?.login?.account;

            if (error?.fieldError) {
                setStatus(NORMAL_STATUS);
                setErrors(toErrorMap([error.fieldError]));
            } else if (error?.formError) {
                setStatus(error.formError.message);
            } else if (account) {
                setStatus(NORMAL_STATUS);
                success();
            } else {
                setStatus(NORMAL_STATUS);
            }

            setSubmitting(false);
        },
    });

    const disabled =
        formik.isSubmitting ||
        !formik.isValid ||
        formik.status !== NORMAL_STATUS;

    return (
        <form className='text-left' onSubmit={formik.handleSubmit}>
            {formik.status !== NORMAL_STATUS && (
                <div className='error-alert'>
                    <p>{formik.status}</p>
                </div>
            )}
            
            <FormField
                name='email'
                type='text'
                errorMessage={formik.errors.email}
                onChange={formik.handleChange}
                value={formik.values.email}
            />

            <FormField
                name='password'
                type='password'
                errorMessage={formik.errors.password}
                onChange={formik.handleChange}
                value={formik.values.password}
            />

            <div className='flex justify-between mt-10'>
                <button
                    type='submit'
                    disabled={disabled}
                    className={`button ${
                        disabled
                            ? 'primary-disabled pointer-events-none'
                            : 'primary hover:bg-blue-800'
                    }`}>
                    Login
                </button>

                <p className='self-center w-full text-sm font-semibold ml-4'>
                    No account?
                    <span
                        onClick={() => switchToRegister(formik.values)}
                        className='inline-block ml-2 text-sm text-right text-blue-700 underline cursor-pointer'>
                        Sign up
                    </span>
                </p>
            </div>
        </form>
    );
}
