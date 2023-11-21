'use client';
import { useEffect } from 'react';
import { Flex, Heading, Text } from '@chakra-ui/react';
import { NextPage } from 'next';
import { useSession } from 'next-auth/react';

const HomePage: NextPage = () => {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === 'loading') return;

    if (!session && status === 'unauthenticated') {
       window.location.href = '/login';
    }
  }, [session, status]);

  if (status === 'loading') {
    return (
      <Flex
        minH="100vh"
        align="center"
        justify="center"
        direction="column"
        bgGradient="linear(to-r, purple.400, pink.400)"
        color="white"
        px={8}
      >
        <Text fontSize="xl" textAlign="center" mb={8}>
          Verificando sesión...
        </Text>
      </Flex>
    );
  }

  return (
    <Flex
      minH="100vh"
      align="center"
      justify="center"
      direction="column"
      bgGradient="linear(to-r, purple.400, pink.400)"
      color="white"
      px={8}
    >
      <Heading as="h1" size="2xl" mb={6} textAlign="center">
        ¡Bienvenido a mi aplicación!
      </Heading>

      <Text fontSize="xl" textAlign="center" mb={8}>
        Esta es una página de inicio básica creada con Next.js y Chakra UI.
      </Text>
    </Flex>
  );
};

export default HomePage;
