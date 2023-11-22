import { Button, Center, Flex, Heading, IconButton, Link } from '@chakra-ui/react';
import { signIn, useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { GiTennisRacket } from 'react-icons/gi';
import { FcGoogle } from "react-icons/fc";
import ReactLoading from 'react-loading';

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
        <Flex h="100vh" flexDir="column" justifyContent="center" alignItems="center">
            <ReactLoading type={"spokes"} color={"blue"} height={100} width={100} />
        </Flex>
      ) : (
        <Flex
          h="100vh"
          flexDir="column"
          justifyContent="flex-start"
          alignItems="center"
          pt={"30vh"}
          px={4}
        >
          <Flex
            p={8}
            borderWidth={1}
            borderRadius={8}
            borderColor="blue.500"
            flexDir="column"
            alignItems="center"
            gap={5}
            mb={8}
          >
            <Flex alignItems="center" mb={4}>
              <GiTennisRacket size={24} color="blue.500" />
              <Heading ml={2} fontSize="xl" color="blue.500">
                Tenis App
              </Heading>
            </Flex>
            <Heading mb={4}>Iniciar Sesión</Heading>
            <Button
            leftIcon={<FcGoogle />}
            bgColor="blue.500"
            color="white"
            _hover={{ bgColor: 'blue.600' }}
            onClick={handleSignIn}
          >
            Iniciar con Google
          </Button>
          </Flex>
        </Flex>
      )}
    </Center>
  );
};

export default LoginPage;
