import '../styles/globals.css';
import { AppProps } from 'next/app';
import { useState } from 'react';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    ApolloLink,
} from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';
import { AccountModalContext } from '../common/contexts';
import { AuthenticationModal } from '../common/components';

const terminatingLink = createUploadLink({
    uri: 'http://localhost:4332/graphql',
    credentials: 'include',
});
const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: (terminatingLink as unknown) as ApolloLink,
});

function MyApp({ Component, pageProps }: AppProps) {
    const [accountModalVisible, setAccountModalVisible] = useState<boolean>(
        false
    );

    return (
        <ApolloProvider client={client}>
            <AccountModalContext.Provider
                value={{ accountModalVisible, setAccountModalVisible }}>
                {accountModalVisible && <AuthenticationModal />}
                <p className='fixed inline-block right-10 bottom-5 text-blue-500'>Alpha Build</p>
                <title>FPL Watch</title>
                <Component {...pageProps} />
            </AccountModalContext.Provider>
        </ApolloProvider>
    );
}

export default MyApp;
