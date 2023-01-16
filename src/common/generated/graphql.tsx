import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<Account>;
  accounts?: Maybe<Array<Account>>;
  players: Array<Player>;
  fixtures: Array<Fixture>;
  clubs: Array<Club>;
  club: Club;
};


export type QueryAccountsArgs = {
  id?: Maybe<Scalars['Float']>;
};


export type QueryPlayersArgs = {
  ict_index?: Maybe<InputRangeDouble>;
  assists?: Maybe<InputRange>;
  goalsScored?: Maybe<InputRange>;
};


export type QueryClubArgs = {
  shortName: Scalars['String'];
};

export type Account = {
  __typename?: 'Account';
  id: Scalars['Int'];
  username: Scalars['String'];
  email: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  favouriteTeam?: Maybe<Scalars['String']>;
  avatarLocation?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type Player = {
  __typename?: 'Player';
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  goalsScored: Scalars['Int'];
  assists: Scalars['Int'];
  minutes: Scalars['Int'];
  yellowCards: Scalars['Int'];
  redCards: Scalars['Int'];
  ictIndex: Scalars['Float'];
};

export type InputRangeDouble = {
  min: Scalars['Float'];
  max: Scalars['Float'];
};

export type InputRange = {
  min: Scalars['Int'];
  max: Scalars['Int'];
};

export type Fixture = {
  __typename?: 'Fixture';
  gameWeek?: Maybe<Scalars['String']>;
  kickoffTime?: Maybe<Scalars['String']>;
  teamAway: Scalars['String'];
  teamHome: Scalars['String'];
};

export type Club = {
  __typename?: 'Club';
  name: Scalars['String'];
  shortName: Scalars['String'];
  points: Scalars['Int'];
  crestLocation: Scalars['String'];
  strength: Scalars['Int'];
  strengthOverallHome: Scalars['Int'];
  strengthOverallAway: Scalars['Int'];
  strengthAttackHome: Scalars['Int'];
  strengthAttackAway: Scalars['Int'];
  strengthDefenceHome: Scalars['Int'];
  strengthDefenceAway: Scalars['Int'];
  socialMedia: SocialMedia;
};

/** Collection of social media profiles for a club or player. */
export type SocialMedia = {
  __typename?: 'SocialMedia';
  facebook?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  youtube?: Maybe<Scalars['String']>;
  tiktok?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  login: AccountResponse;
  logout: Scalars['Boolean'];
  register: UnverifiedAccountResponse;
  verify: AccountResponse;
  updateAccount: AccountResponse;
  updateAvatar: Scalars['String'];
};


export type MutationLoginArgs = {
  options: LoginInput;
};


export type MutationRegisterArgs = {
  options: RegisterInput;
};


export type MutationVerifyArgs = {
  code: Scalars['String'];
  email: Scalars['String'];
};


export type MutationUpdateAccountArgs = {
  options: UpdateInput;
};


export type MutationUpdateAvatarArgs = {
  avatar: Scalars['Upload'];
};

export type AccountResponse = {
  __typename?: 'AccountResponse';
  error?: Maybe<Error>;
  account?: Maybe<Account>;
};

export type Error = {
  __typename?: 'Error';
  fieldError?: Maybe<FieldError>;
  formError?: Maybe<FormError>;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type FormError = {
  __typename?: 'FormError';
  message: Scalars['String'];
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type UnverifiedAccountResponse = {
  __typename?: 'UnverifiedAccountResponse';
  error?: Maybe<Error>;
  unverifiedAccount?: Maybe<UnverifiedAccount>;
};

export type UnverifiedAccount = {
  __typename?: 'UnverifiedAccount';
  email: Scalars['String'];
};

export type RegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UpdateInput = {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  favouriteTeam?: Maybe<Scalars['String']>;
};


export type AccountFieldsFragment = (
  { __typename?: 'Account' }
  & Pick<Account, 'id' | 'username' | 'email'>
);

export type ClubFieldsFragment = (
  { __typename?: 'Club' }
  & Pick<Club, 'name' | 'shortName' | 'points' | 'strength' | 'strengthOverallHome' | 'strengthOverallAway' | 'strengthAttackHome' | 'strengthAttackAway' | 'strengthDefenceHome' | 'strengthDefenceAway' | 'crestLocation'>
  & { socialMedia: (
    { __typename?: 'SocialMedia' }
    & Pick<SocialMedia, 'facebook' | 'instagram' | 'twitter' | 'youtube' | 'tiktok'>
  ) }
);

export type ProfileFieldsFragment = (
  { __typename?: 'Account' }
  & Pick<Account, 'name' | 'bio' | 'favouriteTeam'>
  & SimplifiedProfileFieldsFragment
);

export type SimplifiedProfileFieldsFragment = (
  { __typename?: 'Account' }
  & Pick<Account, 'id' | 'username' | 'name' | 'avatarLocation'>
);

export type LoginMutationVariables = Exact<{
  options: LoginInput;
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'AccountResponse' }
    & { error?: Maybe<(
      { __typename?: 'Error' }
      & { fieldError?: Maybe<(
        { __typename?: 'FieldError' }
        & Pick<FieldError, 'field' | 'message'>
      )>, formError?: Maybe<(
        { __typename?: 'FormError' }
        & Pick<FormError, 'message'>
      )> }
    )>, account?: Maybe<(
      { __typename?: 'Account' }
      & AccountFieldsFragment
    )> }
  ) }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type RegisterMutationVariables = Exact<{
  email: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'UnverifiedAccountResponse' }
    & { error?: Maybe<(
      { __typename?: 'Error' }
      & { fieldError?: Maybe<(
        { __typename?: 'FieldError' }
        & Pick<FieldError, 'field' | 'message'>
      )>, formError?: Maybe<(
        { __typename?: 'FormError' }
        & Pick<FormError, 'message'>
      )> }
    )>, unverifiedAccount?: Maybe<(
      { __typename?: 'UnverifiedAccount' }
      & Pick<UnverifiedAccount, 'email'>
    )> }
  ) }
);

export type UpdateAccountMutationVariables = Exact<{
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
}>;


export type UpdateAccountMutation = (
  { __typename?: 'Mutation' }
  & { updateAccount: (
    { __typename?: 'AccountResponse' }
    & { error?: Maybe<(
      { __typename?: 'Error' }
      & { fieldError?: Maybe<(
        { __typename?: 'FieldError' }
        & Pick<FieldError, 'field' | 'message'>
      )>, formError?: Maybe<(
        { __typename?: 'FormError' }
        & Pick<FormError, 'message'>
      )> }
    )>, account?: Maybe<(
      { __typename?: 'Account' }
      & AccountFieldsFragment
    )> }
  ) }
);

export type UpdateAvatarMutationVariables = Exact<{
  avatar: Scalars['Upload'];
}>;


export type UpdateAvatarMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'updateAvatar'>
);

export type UpdateProfileMutationVariables = Exact<{
  name?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  favouriteTeam?: Maybe<Scalars['String']>;
}>;


export type UpdateProfileMutation = (
  { __typename?: 'Mutation' }
  & { updateAccount: (
    { __typename?: 'AccountResponse' }
    & { error?: Maybe<(
      { __typename?: 'Error' }
      & { fieldError?: Maybe<(
        { __typename?: 'FieldError' }
        & Pick<FieldError, 'field' | 'message'>
      )>, formError?: Maybe<(
        { __typename?: 'FormError' }
        & Pick<FormError, 'message'>
      )> }
    )>, account?: Maybe<(
      { __typename?: 'Account' }
      & ProfileFieldsFragment
    )> }
  ) }
);

export type VerifyMutationVariables = Exact<{
  email: Scalars['String'];
  code: Scalars['String'];
}>;


export type VerifyMutation = (
  { __typename?: 'Mutation' }
  & { verify: (
    { __typename?: 'AccountResponse' }
    & { error?: Maybe<(
      { __typename?: 'Error' }
      & { fieldError?: Maybe<(
        { __typename?: 'FieldError' }
        & Pick<FieldError, 'field' | 'message'>
      )>, formError?: Maybe<(
        { __typename?: 'FormError' }
        & Pick<FormError, 'message'>
      )> }
    )>, account?: Maybe<(
      { __typename?: 'Account' }
      & AccountFieldsFragment
    )> }
  ) }
);

export type GetClubQueryVariables = Exact<{
  shortName: Scalars['String'];
}>;


export type GetClubQuery = (
  { __typename?: 'Query' }
  & { club: (
    { __typename?: 'Club' }
    & ClubFieldsFragment
  ) }
);

export type GetClubsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetClubsQuery = (
  { __typename?: 'Query' }
  & { clubs: Array<(
    { __typename?: 'Club' }
    & ClubFieldsFragment
  )> }
);

export type GetProfileQueryVariables = Exact<{
  id?: Maybe<Scalars['Float']>;
}>;


export type GetProfileQuery = (
  { __typename?: 'Query' }
  & { accounts?: Maybe<Array<(
    { __typename?: 'Account' }
    & ProfileFieldsFragment
  )>> }
);

export type GetProfileSnippetQueryVariables = Exact<{
  id?: Maybe<Scalars['Float']>;
}>;


export type GetProfileSnippetQuery = (
  { __typename?: 'Query' }
  & { accounts?: Maybe<Array<(
    { __typename?: 'Account' }
    & SimplifiedProfileFieldsFragment
  )>> }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'Account' }
    & AccountFieldsFragment
    & SimplifiedProfileFieldsFragment
  )> }
);

export type MeAccountQueryVariables = Exact<{ [key: string]: never; }>;


export type MeAccountQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'Account' }
    & AccountFieldsFragment
  )> }
);

export type MeProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type MeProfileQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'Account' }
    & ProfileFieldsFragment
  )> }
);

export const AccountFieldsFragmentDoc = gql`
    fragment AccountFields on Account {
  id
  username
  email
}
    `;
export const ClubFieldsFragmentDoc = gql`
    fragment ClubFields on Club {
  name
  shortName
  points
  strength
  strengthOverallHome
  strengthOverallAway
  strengthAttackHome
  strengthAttackAway
  strengthDefenceHome
  strengthDefenceAway
  crestLocation
  socialMedia {
    facebook
    instagram
    twitter
    youtube
    tiktok
  }
}
    `;
export const SimplifiedProfileFieldsFragmentDoc = gql`
    fragment SimplifiedProfileFields on Account {
  id
  username
  name
  avatarLocation
}
    `;
export const ProfileFieldsFragmentDoc = gql`
    fragment ProfileFields on Account {
  ...SimplifiedProfileFields
  name
  bio
  favouriteTeam
}
    ${SimplifiedProfileFieldsFragmentDoc}`;
export const LoginDocument = gql`
    mutation Login($options: LoginInput!) {
  login(options: $options) {
    error {
      fieldError {
        field
        message
      }
      formError {
        message
      }
    }
    account {
      ...AccountFields
    }
  }
}
    ${AccountFieldsFragmentDoc}`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($email: String!, $username: String!, $password: String!) {
  register(options: {email: $email, username: $username, password: $password}) {
    error {
      fieldError {
        field
        message
      }
      formError {
        message
      }
    }
    unverifiedAccount {
      email
    }
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      email: // value for 'email'
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const UpdateAccountDocument = gql`
    mutation UpdateAccount($username: String, $email: String, $password: String) {
  updateAccount(
    options: {username: $username, email: $email, password: $password}
  ) {
    error {
      fieldError {
        field
        message
      }
      formError {
        message
      }
    }
    account {
      ...AccountFields
    }
  }
}
    ${AccountFieldsFragmentDoc}`;
export type UpdateAccountMutationFn = Apollo.MutationFunction<UpdateAccountMutation, UpdateAccountMutationVariables>;

/**
 * __useUpdateAccountMutation__
 *
 * To run a mutation, you first call `useUpdateAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAccountMutation, { data, loading, error }] = useUpdateAccountMutation({
 *   variables: {
 *      username: // value for 'username'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useUpdateAccountMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAccountMutation, UpdateAccountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateAccountMutation, UpdateAccountMutationVariables>(UpdateAccountDocument, options);
      }
export type UpdateAccountMutationHookResult = ReturnType<typeof useUpdateAccountMutation>;
export type UpdateAccountMutationResult = Apollo.MutationResult<UpdateAccountMutation>;
export type UpdateAccountMutationOptions = Apollo.BaseMutationOptions<UpdateAccountMutation, UpdateAccountMutationVariables>;
export const UpdateAvatarDocument = gql`
    mutation UpdateAvatar($avatar: Upload!) {
  updateAvatar(avatar: $avatar)
}
    `;
export type UpdateAvatarMutationFn = Apollo.MutationFunction<UpdateAvatarMutation, UpdateAvatarMutationVariables>;

/**
 * __useUpdateAvatarMutation__
 *
 * To run a mutation, you first call `useUpdateAvatarMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAvatarMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAvatarMutation, { data, loading, error }] = useUpdateAvatarMutation({
 *   variables: {
 *      avatar: // value for 'avatar'
 *   },
 * });
 */
export function useUpdateAvatarMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAvatarMutation, UpdateAvatarMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateAvatarMutation, UpdateAvatarMutationVariables>(UpdateAvatarDocument, options);
      }
export type UpdateAvatarMutationHookResult = ReturnType<typeof useUpdateAvatarMutation>;
export type UpdateAvatarMutationResult = Apollo.MutationResult<UpdateAvatarMutation>;
export type UpdateAvatarMutationOptions = Apollo.BaseMutationOptions<UpdateAvatarMutation, UpdateAvatarMutationVariables>;
export const UpdateProfileDocument = gql`
    mutation UpdateProfile($name: String, $bio: String, $favouriteTeam: String) {
  updateAccount(options: {name: $name, bio: $bio, favouriteTeam: $favouriteTeam}) {
    error {
      fieldError {
        field
        message
      }
      formError {
        message
      }
    }
    account {
      ...ProfileFields
    }
  }
}
    ${ProfileFieldsFragmentDoc}`;
export type UpdateProfileMutationFn = Apollo.MutationFunction<UpdateProfileMutation, UpdateProfileMutationVariables>;

/**
 * __useUpdateProfileMutation__
 *
 * To run a mutation, you first call `useUpdateProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProfileMutation, { data, loading, error }] = useUpdateProfileMutation({
 *   variables: {
 *      name: // value for 'name'
 *      bio: // value for 'bio'
 *      favouriteTeam: // value for 'favouriteTeam'
 *   },
 * });
 */
export function useUpdateProfileMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProfileMutation, UpdateProfileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProfileMutation, UpdateProfileMutationVariables>(UpdateProfileDocument, options);
      }
export type UpdateProfileMutationHookResult = ReturnType<typeof useUpdateProfileMutation>;
export type UpdateProfileMutationResult = Apollo.MutationResult<UpdateProfileMutation>;
export type UpdateProfileMutationOptions = Apollo.BaseMutationOptions<UpdateProfileMutation, UpdateProfileMutationVariables>;
export const VerifyDocument = gql`
    mutation Verify($email: String!, $code: String!) {
  verify(email: $email, code: $code) {
    error {
      fieldError {
        field
        message
      }
      formError {
        message
      }
    }
    account {
      ...AccountFields
    }
  }
}
    ${AccountFieldsFragmentDoc}`;
export type VerifyMutationFn = Apollo.MutationFunction<VerifyMutation, VerifyMutationVariables>;

/**
 * __useVerifyMutation__
 *
 * To run a mutation, you first call `useVerifyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyMutation, { data, loading, error }] = useVerifyMutation({
 *   variables: {
 *      email: // value for 'email'
 *      code: // value for 'code'
 *   },
 * });
 */
export function useVerifyMutation(baseOptions?: Apollo.MutationHookOptions<VerifyMutation, VerifyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<VerifyMutation, VerifyMutationVariables>(VerifyDocument, options);
      }
export type VerifyMutationHookResult = ReturnType<typeof useVerifyMutation>;
export type VerifyMutationResult = Apollo.MutationResult<VerifyMutation>;
export type VerifyMutationOptions = Apollo.BaseMutationOptions<VerifyMutation, VerifyMutationVariables>;
export const GetClubDocument = gql`
    query GetClub($shortName: String!) {
  club(shortName: $shortName) {
    ...ClubFields
  }
}
    ${ClubFieldsFragmentDoc}`;

/**
 * __useGetClubQuery__
 *
 * To run a query within a React component, call `useGetClubQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetClubQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetClubQuery({
 *   variables: {
 *      shortName: // value for 'shortName'
 *   },
 * });
 */
export function useGetClubQuery(baseOptions: Apollo.QueryHookOptions<GetClubQuery, GetClubQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetClubQuery, GetClubQueryVariables>(GetClubDocument, options);
      }
export function useGetClubLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetClubQuery, GetClubQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetClubQuery, GetClubQueryVariables>(GetClubDocument, options);
        }
export type GetClubQueryHookResult = ReturnType<typeof useGetClubQuery>;
export type GetClubLazyQueryHookResult = ReturnType<typeof useGetClubLazyQuery>;
export type GetClubQueryResult = Apollo.QueryResult<GetClubQuery, GetClubQueryVariables>;
export const GetClubsDocument = gql`
    query GetClubs {
  clubs {
    ...ClubFields
  }
}
    ${ClubFieldsFragmentDoc}`;

/**
 * __useGetClubsQuery__
 *
 * To run a query within a React component, call `useGetClubsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetClubsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetClubsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetClubsQuery(baseOptions?: Apollo.QueryHookOptions<GetClubsQuery, GetClubsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetClubsQuery, GetClubsQueryVariables>(GetClubsDocument, options);
      }
export function useGetClubsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetClubsQuery, GetClubsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetClubsQuery, GetClubsQueryVariables>(GetClubsDocument, options);
        }
export type GetClubsQueryHookResult = ReturnType<typeof useGetClubsQuery>;
export type GetClubsLazyQueryHookResult = ReturnType<typeof useGetClubsLazyQuery>;
export type GetClubsQueryResult = Apollo.QueryResult<GetClubsQuery, GetClubsQueryVariables>;
export const GetProfileDocument = gql`
    query GetProfile($id: Float) {
  accounts(id: $id) {
    ...ProfileFields
  }
}
    ${ProfileFieldsFragmentDoc}`;

/**
 * __useGetProfileQuery__
 *
 * To run a query within a React component, call `useGetProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProfileQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetProfileQuery(baseOptions?: Apollo.QueryHookOptions<GetProfileQuery, GetProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProfileQuery, GetProfileQueryVariables>(GetProfileDocument, options);
      }
export function useGetProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProfileQuery, GetProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProfileQuery, GetProfileQueryVariables>(GetProfileDocument, options);
        }
export type GetProfileQueryHookResult = ReturnType<typeof useGetProfileQuery>;
export type GetProfileLazyQueryHookResult = ReturnType<typeof useGetProfileLazyQuery>;
export type GetProfileQueryResult = Apollo.QueryResult<GetProfileQuery, GetProfileQueryVariables>;
export const GetProfileSnippetDocument = gql`
    query GetProfileSnippet($id: Float) {
  accounts(id: $id) {
    ...SimplifiedProfileFields
  }
}
    ${SimplifiedProfileFieldsFragmentDoc}`;

/**
 * __useGetProfileSnippetQuery__
 *
 * To run a query within a React component, call `useGetProfileSnippetQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProfileSnippetQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProfileSnippetQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetProfileSnippetQuery(baseOptions?: Apollo.QueryHookOptions<GetProfileSnippetQuery, GetProfileSnippetQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProfileSnippetQuery, GetProfileSnippetQueryVariables>(GetProfileSnippetDocument, options);
      }
export function useGetProfileSnippetLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProfileSnippetQuery, GetProfileSnippetQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProfileSnippetQuery, GetProfileSnippetQueryVariables>(GetProfileSnippetDocument, options);
        }
export type GetProfileSnippetQueryHookResult = ReturnType<typeof useGetProfileSnippetQuery>;
export type GetProfileSnippetLazyQueryHookResult = ReturnType<typeof useGetProfileSnippetLazyQuery>;
export type GetProfileSnippetQueryResult = Apollo.QueryResult<GetProfileSnippetQuery, GetProfileSnippetQueryVariables>;
export const MeDocument = gql`
    query Me {
  me {
    ...AccountFields
    ...SimplifiedProfileFields
  }
}
    ${AccountFieldsFragmentDoc}
${SimplifiedProfileFieldsFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const MeAccountDocument = gql`
    query MeAccount {
  me {
    ...AccountFields
  }
}
    ${AccountFieldsFragmentDoc}`;

/**
 * __useMeAccountQuery__
 *
 * To run a query within a React component, call `useMeAccountQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeAccountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeAccountQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeAccountQuery(baseOptions?: Apollo.QueryHookOptions<MeAccountQuery, MeAccountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeAccountQuery, MeAccountQueryVariables>(MeAccountDocument, options);
      }
export function useMeAccountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeAccountQuery, MeAccountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeAccountQuery, MeAccountQueryVariables>(MeAccountDocument, options);
        }
export type MeAccountQueryHookResult = ReturnType<typeof useMeAccountQuery>;
export type MeAccountLazyQueryHookResult = ReturnType<typeof useMeAccountLazyQuery>;
export type MeAccountQueryResult = Apollo.QueryResult<MeAccountQuery, MeAccountQueryVariables>;
export const MeProfileDocument = gql`
    query MeProfile {
  me {
    ...ProfileFields
  }
}
    ${ProfileFieldsFragmentDoc}`;

/**
 * __useMeProfileQuery__
 *
 * To run a query within a React component, call `useMeProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeProfileQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeProfileQuery(baseOptions?: Apollo.QueryHookOptions<MeProfileQuery, MeProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeProfileQuery, MeProfileQueryVariables>(MeProfileDocument, options);
      }
export function useMeProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeProfileQuery, MeProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeProfileQuery, MeProfileQueryVariables>(MeProfileDocument, options);
        }
export type MeProfileQueryHookResult = ReturnType<typeof useMeProfileQuery>;
export type MeProfileLazyQueryHookResult = ReturnType<typeof useMeProfileLazyQuery>;
export type MeProfileQueryResult = Apollo.QueryResult<MeProfileQuery, MeProfileQueryVariables>;