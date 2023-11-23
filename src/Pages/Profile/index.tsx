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
import UserOperations from '@/app/graphql/operations/users';
import { useMutation } from '@apollo/client';
import { createUsernameInput, createUsernameOutput } from '@/app/utils/types';

const Profile: React.FC = () => {
  const { data: session, status } = useSession();
  const [createUsername,{ data, loading, error }] = useMutation<
  createUsernameOutput, createUsernameInput>(
    UserOperations.Mutations.createUsername
  );
  const [username, setUsername] = useState('');

  useEffect(() => {
    if (session?.user?.name) {
      setUsername(session.user.name);
    }
  }, [session]);

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleSaveUsername = async () => {
    if (!username) return;
    try {
      await createUsername({
        variables: {
          username,
        },
      });
      console.log(data, loading, error);
    }
    catch (error) {
      console.log(error)
    }
  };

  return (
    <Center h="100%" mt={"100px"}>
      <Box p={6} borderWidth={1} borderRadius={8} boxShadow="lg">
        <Heading mb={4}>Profile Page</Heading>
        {status === 'authenticated' && (
          <VStack align="center" spacing={4}>
            {session.user.username ? (
              <Text fontSize="xl">Welcome, {session.user.username}</Text>
            ) : (
              <Text fontSize="xl">Welcome, {session?.user?.name}!</Text>
            )
            }
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
