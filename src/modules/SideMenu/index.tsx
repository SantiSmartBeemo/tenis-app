import { Flex, Box, Text, IconButton, VStack, Divider } from '@chakra-ui/react';
import { MouseEventHandler } from 'react';
import { FaTrophy, FaPlus, FaUsers, FaUnlockAlt } from 'react-icons/fa';

interface MenuProps {
  handleMenuClick: (path: string) => void;
  light: boolean;
  isMobile?: boolean;
}

const Menu = ({ handleMenuClick, light, isMobile }: MenuProps) => {
  const menuItems = [
    { label: 'Mis Torneos', icon: FaTrophy, path: '/MisTorneos' },
    { label: 'Proponer Torneo', icon: FaPlus, path: '/ProponerTorneo' },
    { label: 'Invitar a Torneo', icon: FaUsers, path: '/InvitarTorneo' },
    { label: 'Torneos abiertos', icon: FaUnlockAlt, path: '/TorneosAbiertos' },
  ];

  return (
    <Flex
      h="100vh"
      color="white"
      flexDirection="column"
      justifyContent="space-between"
      boxShadow="0px 4px 3px rgba(0, 0, 0, 0.5)"
      alignItems="center"
      py={4}
      px={2}
      w={isMobile ? "100vw" :"70px"}
      position="fixed"
      top="10vh"
      pt={10}
      left="0"
    >
      <VStack spacing={4} alignItems="center" gap={isMobile ? "20px" : "0"}>
        {menuItems.map((item, index) => (
          <Box
            key={index}
            as="button"
            onClick={() => handleMenuClick(item.path)}
            cursor="pointer"
            _hover={{ boxShadow: '0px 0px 1px rgba(0, 0, 0, 0.5)' }}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Flex flexDir={isMobile ? "row" : "column"} gap={isMobile ? "10px" : "0"} alignItems={isMobile ? "normal" : "center"}>
              <Box as={item.icon} color={light ? "blue" : "white"} fontSize="20px" mb={1} mt={isMobile ? "0" : "15px"} />
              <Text color={light ? "blue" : "white"} fontSize="sm">{item.label}</Text>
            </Flex>
            {isMobile && <Divider mt={4} border={"1px grey solid"} w={"70vw"} />}
          </Box>
        ))}
      </VStack>
    </Flex>
  );
};

export default Menu;
