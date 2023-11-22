'use client';
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { SessionProvider } from 'next-auth/react';
import { theme } from '../theme';
import { ApolloProvider } from '@apollo/client';
import { client } from '../../graphql/apolloclient';

export const newtTeme = extendTheme({ theme });

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ApolloProvider client={client}>
      <CacheProvider>
        <ChakraProvider resetCSS theme={newtTeme}>
          <SessionProvider>{children}</SessionProvider>
        </ChakraProvider>
      </CacheProvider>
    </ApolloProvider>
  );
}
