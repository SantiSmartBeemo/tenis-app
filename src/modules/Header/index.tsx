'use client';
import { Flex, Text, IconButton, Switch, useBreakpointValue, Box } from '@chakra-ui/react';
import { RiUserLine } from 'react-icons/ri';
import { GiTennisRacket } from 'react-icons/gi';
import { FaSun, FaMoon, FaBars } from "react-icons/fa";

interface HeaderProps {
  changeLight: () => void;
  clickMenu?: () => void;
  clickHome?: (path: string) => void
  light: boolean;
}

const Header = ({ changeLight, clickMenu, clickHome, light }: HeaderProps) => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const handleHome = () => {
    if (clickHome) clickHome("/");
  }

  return (
    <Flex
      color={light ? 'blue' : 'white'}
      p={4}
      alignItems="center"
      justifyContent="space-between"
      boxShadow="0px 4px 6px rgba(0, 0, 0, 0.5)"
    >
      {isMobile && (
        <Box
          as={IconButton}
          mr={"-50px"}
          aria-label="Menu"
          icon={<FaBars size={20} color={light ? 'blue' : 'white'} />}
          variant="ghost"
          onClick={() => {
            if (clickMenu) clickMenu();
          }}
        />
      )}
      <Flex alignItems="center" gap={2} onClick={handleHome}>
        <GiTennisRacket size={30} color={light ? "blue" : "white"} />
        <Text fontSize="md">Tenis App</Text>
      </Flex>
      <Flex alignItems="center">
        <Flex gap={3} alignItems="center">
          {light ? <FaSun size={25} color="yellow" /> : <FaMoon size={25} color="white" />}
          <Switch
            colorScheme="blue"
            isChecked={light}
            onChange={changeLight}
            size="md"
          />
        </Flex>
        <IconButton
          aria-label="Usuario"
          _hover={{ bg: 'blue.600' }}
          icon={<RiUserLine size={20} color={light ? "blue" : "white"} />}
          variant="ghost"
          mr={4}
        />
      </Flex>
    </Flex>
  );
};

export default Header;
