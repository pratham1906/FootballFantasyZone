import {
    useGetClubsQuery,
    useMeProfileQuery,
    useUpdateAvatarMutation,
    useUpdateProfileMutation,
} from '../../../common/generated/graphql';
import { SettingsLayout, MainLayout } from '../../../common/layouts';
import { AVATAR_DEFAULT } from '../../../constants';
import { NetworkStatus } from '@apollo/client';
import { useFormik } from 'formik';
import {
    FormField,
    FormDropdown,
    FormTextArea,
} from '../../../common/components';
import { toErrorMap, getChangedValues, noCache } from '../../../common/utils';
import { validationSchema } from '../../../modules/settings/profile-information';
import { FormStatus } from '../../../types';

interface ProfileInformationFormValues {
    name: string;
    bio: string;
    favouriteTeam: string;
    avatarLocation: string;
}

interface TempFormValues {
    avatar?: File;
}

const defaultValues: ProfileInformationFormValues = {
    name: '',
    bio: '',
    favouriteTeam: 'None',
    avatarLocation: AVATAR_DEFAULT,
};

function ProfileInformation() {
    const {loading: loadingProfile, data: profileData, networkStatus, refetch: refetchProfile } = useMeProfileQuery();

    const [updateProfile] = useUpdateProfileMutation();
    const [updateAvatar] = useUpdateAvatarMutation();

    const { data: clubsData } = useGetClubsQuery();
    const clubs = clubsData?.clubs.map((club) => club.shortName) || [];

    let initialValues: ProfileInformationFormValues & TempFormValues = {
        name: profileData?.me?.name || defaultValues.name,
        bio: profileData?.me?.bio || defaultValues.bio,
        favouriteTeam:
            profileData?.me?.favouriteTeam || defaultValues.favouriteTeam,
        avatarLocation:
            profileData?.me?.avatarLocation || defaultValues.avatarLocation,
    };

    const initialStatus: FormStatus = { type: 'normal' };

    const formik = useFormik({
        initialValues: { ...initialValues },
        enableReinitialize: true,
        initialStatus,
        validationSchema,
        onSubmit: async (
            values: ProfileInformationFormValues & TempFormValues,
            { setSubmitting, setErrors, setStatus }
        ) => {
            setSubmitting(true);

            let status: FormStatus;

            const profileResponse = await updateProfile({
                variables: getChangedValues(values, initialValues),
            });

            const profileError = profileResponse.data?.updateAccount.error;

            if (profileError?.fieldError) {
                setErrors(toErrorMap([profileError.fieldError]));
                status = { 
                    type: 'fieldError' 
                };
            } else if (profileError?.formError) {
                status = { 
                    type: 'formError', 
                    message: profileError.formError.message 
                };
            } else {
                status = { 
                    type: 'success' 
                };
            }

            // Update Avatar
            if (values.avatar) {
                await updateAvatar({ variables: { avatar: values.avatar } });
            }

            setStatus(status);
            await refetchProfile();

            setSubmitting(false);
        },
    });
    
    if (
        loadingProfile ||
        networkStatus == NetworkStatus.refetch ||
        profileData?.me === null ||
        profileData?.me === undefined
    ) {
        return <p>Refetching...</p>;
    }

    const disabled =
        formik.isSubmitting ||
        !formik.isValid ||
        (formik.status.type !== 'normal') && (formik.status.type !== 'success');

    return (
        <MainLayout>
            <SettingsLayout>
                <form>
                    <div className='px-4 py-2'>
                        <h1 className='font-bold py-2 text-2xl'>
                            Profile Information
                        </h1>
                        <div className='flex mt-6'>
                            <div>
                                <p className='label mb-2'>Avatar</p>
                                <div>
                                    <img
                                        src={ noCache(
                                            profileData.me?.avatarLocation ||
                                                defaultValues.avatarLocation
                                        ) }
                                        alt='avatar-preview'
                                        className='rounded-full h-24'
                                    />
                                    <p>Change picture</p>
                                    <input
                                        type='file'
                                        name='avatar'
                                        onChange={(
                                            event: React.ChangeEvent<HTMLInputElement>
                                        ) => {
                                            if (!event.target.files) return;
                                            formik.setFieldValue(
                                                'avatar',
                                                event.target.files[0]
                                            );
                                        }}
                                    />
                                </div>
                            </div>
                            <div className='flex flex-col space-y-4 ml-24 w-1/3'>
                                <FormField
                                    name='name'
                                    type='text'
                                    errorMessage={formik.errors.name}
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                />

                                <FormTextArea
                                    name='bio'
                                    placeholder='Maximum of 500 words'
                                    errorMessage={formik.errors.bio}
                                    setFieldValue={formik.setFieldValue}
                                    value={formik.values.bio}
                                    onChange={formik.handleChange}
                                />

                                <FormDropdown
                                    name='favouriteTeam'
                                    options={['None', ...clubs]}
                                    errorMessage={formik.errors.favouriteTeam}
                                    setFieldValue={formik.setFieldValue}
                                    value={formik.values.favouriteTeam}
                                    onChange={formik.handleChange}
                                />

                                <button
                                    type='submit'
                                    disabled={disabled}
                                    onClick={formik.submitForm}
                                    className={`button w-24 text-center ${
                                        disabled
                                            ? 'primary-disabled'
                                            : 'primary'
                                    }`}>
                                    Save
                                </button>

                                { formik.status?.type === 'success' && (
                                    <p>Saved changes</p>
                                )}
                            </div>
                        </div>
                    </div>
                </form>
            </SettingsLayout>
        </MainLayout>
    );
}

export default ProfileInformation;