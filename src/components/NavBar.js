import React, { useContext } from 'react'
import { Box, Icon, Image, Text, Flex } from '@chakra-ui/react'
import { ShopContext } from "../context/shopContext";
import { MdMenu, MdShoppingBasket } from "react-icons/all";

const NavBar = () => {
  const { openCart, openMenu, checkout } = useContext(ShopContext);

  return (
    <Flex backgroundColor="#FFA8E2" flexDir="row" justifyContent="space-between" p="2rem">
      <Icon fill="white" as={MdMenu} w={30} h={30} cursor="pointer"/>
      <Text>Logo</Text>
      <Icon
        fill="white"
        as={MdShoppingBasket}
        w={30} h={30}
        cursor="pointer"
        onClick={openCart}
      />
    </Flex>
  )
}

export default NavBar