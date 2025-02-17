import React from 'react';
import { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { MantineProvider } from '@mantine/core';
import { Analytics } from '@vercel/analytics/react';
import Layout from 'atoms/Layout';
import { emotionCache } from 'lib/emotion';
import { NotificationsProvider } from '@mantine/notifications';

export default function MyApp(props: AppProps) {
    const { Component, pageProps } = props;

    return (
        <>
            <DefaultSeo
                title={'deadrop'}
                description={'e2e enncrypted secret sharing'}
                openGraph={{}}
            />
            <MantineProvider
                withGlobalStyles
                withNormalizeCSS
                theme={{
                    colorScheme: 'dark',
                }}
                emotionCache={emotionCache}
            >
                <NotificationsProvider>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </NotificationsProvider>
            </MantineProvider>
            <Analytics />
        </>
    );
}
