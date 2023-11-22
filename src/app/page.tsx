'use client';
import { Box, Center, Flex, useBreakpointValue } from '@chakra-ui/react';
import { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import Auth from '../Pages/Auth';
import Home from '../Pages/Home';
import Header from '@/modules/header';
import { useState } from 'react';
import SideMenu from '@/modules/sideMenu';
import Router from '../router'

const HomePage: NextPage = () => {
  const [NewItem, setNewItem] = useState<any>(<Home />);
  const [mode, setMode] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const { data: session } = useSession();

  const handlechangeLight = () => {
    setMode(!mode);
  };

  const handleClickMenu = () => {
    setShowMenu(!showMenu);
  }

  const handlerChangePath = (path: string) => {
    setNewItem(Router(path));
    setShowMenu(false); 
  };

  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box bg={"whiteAlpha.200"} h={"100vh"} bgColor={mode ? "#EBEDEF" :"gray.700"} color={mode ? "grey" : "white"}>
      {session?.user ?
      <Box>
         <Box position={"fixed"} w={"100vw"} zIndex={"20"}>
          <Header changeLight={handlechangeLight} clickMenu={handleClickMenu} clickRoute={handlerChangePath} light={mode}/>
        </Box>
        <Flex>
          {!isMobile && (
            <Box zIndex={"1"}>
              <SideMenu handleMenuClick={handlerChangePath} light={mode} />
            </Box>
          )}
          {isMobile && showMenu ? (
            <Box zIndex={"1"}>
              <SideMenu handleMenuClick={handlerChangePath} isMobile={true} light={mode} />
            </Box>
          ): (
            <Center mt={"15vh"} ml={isMobile ? "0" : "7vw"}>
              {NewItem}
            </Center>
          )}
        </Flex>
      </Box>
      : <Auth/>}


    </Box>
  );
};

export default HomePage;
