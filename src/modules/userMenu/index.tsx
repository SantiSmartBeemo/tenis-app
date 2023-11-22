'use client';
import { useState } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { Box, VStack, Slide, IconButton, Link, Flex, Text } from '@chakra-ui/react';
import { RiLogoutBoxLine, RiUserLine, RiUserSettingsLine } from 'react-icons/ri';

interface UserMenuProps {
    light: boolean;
    clickProfile: () => void;
}

const UserMenu = ({light, clickProfile}:UserMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickProfile = () => {
    setIsOpen(false);
    clickProfile();
  }

  const handleSignOut = async () => {
    setIsOpen(false);
    await signOut();
  };

  return (
    <Box position="relative">
        <IconButton
          aria-label="Usuario"
          _hover={{ bg: 'blue.600' }}
          onClick={toggleMenu}
          icon={<RiUserLine size={20} color={light ? "blue" : "white"} />}
          variant="ghost"
          mr={4}
        />
      {isOpen && (
        <Slide direction="top" in={isOpen}>
          <Box
            position="absolute"
            top="8vh"
            right="10px"
            bg={light ? 'white' : 'gray.700'}
            boxShadow="0px 4px 6px rgba(0, 0, 0, 0.5)"
            p={2}
            borderRadius="md"
          >
            <VStack alignItems="flex-start" spacing={2}>
                <Link onClick={handleClickProfile}>
                    <Flex alignItems={"center"}>
                        <RiUserLine size={20} color={light ? "blue" : "white"} />
                        <Text ml={2}>{session?.user?.name}</Text>
                    </Flex>
                </Link>
                <Link onClick={handleSignOut}>
                    <Flex alignItems={"center"}>
                        <RiLogoutBoxLine size={20} color={light ? "blue" : "white"} />
                        <Text ml={2}>Desconectarse</Text>
                    </Flex>
                </Link>
            </VStack>
          </Box>
        </Slide>
      )}
    </Box>
  );
};

export default UserMenu;
