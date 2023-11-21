'use client';
import { Box, Button, Center, Heading } from '@chakra-ui/react';
import { signIn, useSession } from 'next-auth/react';
import { useEffect } from 'react';

const LoginPage = () => {
  const { data: session, status } = useSession();
  
  const handleSignIn = () => {
    signIn('google');
  };

  useEffect(() => {
    if (status === 'loading') return;

    if (session && status === 'authenticated') {
       window.location.href = '/';
    }
  }, [session, status]);


  return (
    <Center h="100vh">
      <Box p={8} borderWidth={1} borderRadius={8} boxShadow="lg">
        <Heading mb={4}>Iniciar Sesión</Heading>
        <Button onClick={handleSignIn}>Iniciar sesión con Google</Button>
      </Box>
    </Center>
  );
};

export default LoginPage;
