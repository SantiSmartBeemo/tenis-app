import { Flex, Button, Heading, Divider, Box } from '@chakra-ui/react';

const LoginPage = () => {
  return (
    <Flex
      minH="100vh"
      align="center"
      justify="center"
      direction="column"
      bgGradient="linear(to-b, teal.200, teal.300)"
    >
      <Box
        p={8}
        maxW="md"
        borderWidth={1}
        borderRadius={8}
        boxShadow="lg"
        bg="white"
      >
        <Heading as="h1" size="xl" mb={6} textAlign="center" color="teal.500">
          Iniciar sesión
        </Heading>

        <Button
          colorScheme="teal"
          variant="solid"
          mb={4}
          _hover={{ bg: 'teal.400' }}
          _active={{ bg: 'teal.600' }}
        >
          Iniciar sesión con cuenta
        </Button>

        <Divider my={6} />

        <Button
          colorScheme="red"
          variant="solid"
          mb={4}
          _hover={{ bg: 'red.400' }}
          _active={{ bg: 'red.600' }}
        >
          Iniciar sesión con Google
        </Button>
      </Box>
    </Flex>
  );
};

export default LoginPage;
