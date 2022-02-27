import React, {useContext} from 'react'
import {ShopContext} from "../context/shopContext";

import {
  Button,
  Grid, Flex, Image, Text, Link,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton, VStack,
} from '@chakra-ui/react'
import {CloseIcon} from "@chakra-ui/icons";

const NavMenu = () => {
  const {isMenuOpen, closeMenu} = useContext(ShopContext);
  console.log('menu', isMenuOpen)
  return (
    <Drawer isOpen={isMenuOpen} onClose={closeMenu} placement='left' size='sm'>
      <DrawerOverlay/>
      <DrawerContent>
        <DrawerCloseButton/>
        <DrawerHeader>Navi</DrawerHeader>

        <DrawerBody>
          <VStack p="2rem">
            <Link to="/">Home</Link>
            <Link to="/">Learn More</Link>
            <Link to="/">Sub</Link>
          </VStack>
        </DrawerBody>

      </DrawerContent>
    </Drawer>
  )
}

export default NavMenu;