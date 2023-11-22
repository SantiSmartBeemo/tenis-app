'use client';
import { Button, Center, Flex, Heading, Link, Image } from '@chakra-ui/react';
import { signIn, useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
  const [loading, setLoading] = useState(true);
  const { data: session, status } = useSession();
  
  const handleSignIn = () => {
    signIn('google');
    setLoading(true);
  };

  useEffect(() => {
    status !== 'loading' ? setLoading(false) : setLoading(true);
    if (session && status === 'authenticated') {
       window.location.href = '/';
    }
  }, [session, status]);

  return (
    <Center>
        {loading ? (
            <Flex h="100vh" flexDir={"column"} justifyContent={"center"} alignItems={"center"}>
                <Heading as="h1" size="xl" mb={6} textAlign="center" color="teal.500">
                    Conectando...
                </Heading>
            </Flex>
        ) : (
            <Flex h="100vh" flexDir={"column"} justifyContent={"center"} alignItems={"center"}>
            <Flex p={8} borderWidth={1} borderRadius={8} flexDir={"column"} alignItems={"center"} gap={5}>
              <Heading mb={4}>Iniciar Sesión</Heading>
              <Button leftIcon={FcGoogle} onClick={handleSignIn}>Continue with google</Button>
              <Link href='/'>
                  <Button>
                      Back
                  </Button>
              </Link>
            </Flex>
          </Flex>
        )}
    </Center>

  );
};

export default LoginPage;
