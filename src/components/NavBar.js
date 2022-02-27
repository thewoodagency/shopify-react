import React, { useContext } from 'react'
import {Box, Icon, Image, Text, Flex, Link, Badge} from '@chakra-ui/react'
import { ShopContext } from "../context/shopContext";
import { MdMenu, MdShoppingBasket } from "react-icons/all";
import logo from '../logo.svg';

const NavBar = () => {
  const { openCart, openMenu, checkout } = useContext(ShopContext);

  return (
    <Flex alignItems="center" backgroundColor="#FFA8E2" flexDir="row" justifyContent="space-between" p="2rem">
      <Icon fill="white" as={MdMenu} w={30} h={30} cursor="pointer" onClick={openMenu} />
      <Link href={"/"}>
        <Image src={logo} w={100} h={100}/>
      </Link>
      <Box>
        <Icon
          fill="white"
          as={MdShoppingBasket}
          w={30} h={30}
          cursor="pointer"
          onClick={openCart}
        />
        <Badge backgroundColor='#FF38BD' borderRadius='50%'>{checkout.lineItems?.length}</Badge>
      </Box>

    </Flex>
  )
}

export default NavBar