import { useFormik } from 'formik';
import { FormField } from '../../common/components/FormField';
import { validationSchema } from './registerForm/validationSchema';
import { RegisterFormValues } from '../../types';
import { toErrorMap } from '../../common/utils';
import { useRegisterMutation } from '../../common/generated/graphql';

interface Props {
    switchToLogin: (values: RegisterFormValues) => void;
    savedValues?: RegisterFormValues;
    onSuccess: (email: string) => void;
}

const NORMAL_STATUS = undefined;

const defaultSavedValues = {
    email: '',
    password: '',
    username: '',
};

export function RegisterForm({
    switchToLogin,
    savedValues = defaultSavedValues,
    onSuccess: success,
}: Props) {
    const [register] = useRegisterMutation();

    const formik = useFormik({
        initialValues: savedValues,
        validationSchema,
        onSubmit: async (values, { setErrors, setStatus, setSubmitting }) => {
            setSubmitting(true);

            const response = await register({ variables: values });
            const error = response?.data?.register?.error;
            const account = response?.data?.register?.unverifiedAccount;

            if (error?.fieldError) {
                setStatus(NORMAL_STATUS);
                setErrors(toErrorMap([error.fieldError]));
            } else if (error?.formError) {
                setStatus(error.formError.message);
            } else if (account) {
                setStatus(NORMAL_STATUS);
                success(account.email);
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
        <form onSubmit={formik.handleSubmit} className='text-left'>
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
                name='username'
                type='text'
                errorMessage={formik.errors.username}
                onChange={formik.handleChange}
                value={formik.values.username}
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
                    Register
                </button>

                <p className='self-center w-full text-sm font-semibold ml-4'>
                    Already registered?
                    <span
                        onClick={() => switchToLogin(formik.values)}
                        className='inline-block ml-2 text-sm text-right text-blue-700 underline cursor-pointer'>
                        Log in
                    </span>
                </p>
            </div>
        </form>
    );
}
