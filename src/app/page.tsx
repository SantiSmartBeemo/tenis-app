import { Flex, Heading, Text, Link as ChakraLink } from '@chakra-ui/react';
import Link from 'next/link';
import { NextPage } from 'next/types';

const HomePage: NextPage = () => {
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

            <Link href="/login" passHref>
                <ChakraLink color="teal.200" fontSize="xl">
                    Ir a la página de inicio de sesión
                </ChakraLink>
            </Link>
        </Flex>
    );
};

export default HomePage;
