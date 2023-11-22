import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import {
  Box,
  Heading,
  Input,
  Button,
  VStack,
  Text,
  Center,
} from '@chakra-ui/react';

const Profile: React.FC = () => {
  const { data: session, status } = useSession();
  const [username, setUsername] = useState('');

  useEffect(() => {
    if (session?.user?.name) {
      setUsername(session.user.name);
    }
  }, [session]);

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleSaveUsername = () => {
    console.log('Username saved:', username);
    // Aquí podrías enviar la información del nuevo username al backend o hacer la actualización correspondiente.
  };

  return (
    <Center h="100%" mt={"100px"}>
      <Box p={6} borderWidth={1} borderRadius={8} boxShadow="lg">
        <Heading mb={4}>Profile Page</Heading>
        {status === 'authenticated' && (
          <VStack align="center" spacing={4}>
            <Text fontSize="xl">Welcome, {session?.user?.name}!</Text>
            <Box>
              <label htmlFor="username">Username:</label>
              <Input
                type="text"
                id="username"
                value={username}
                onChange={handleUsernameChange}
              />
            </Box>
            <Button colorScheme="blue" onClick={handleSaveUsername}>
              Save Username
            </Button>
          </VStack>
        )}
      </Box>
    </Center>
  );
};

export default Profile;
