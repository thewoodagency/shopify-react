import React, { useContext } from 'react'
import { ShopContext } from "../context/shopContext";

import {
  Button,
  Grid,Flex,Image,Text,Link,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import {CloseIcon} from "@chakra-ui/icons";

const Cart = () => {
  const { isCartOpen, closeCart, checkout, removeLineItem  } = useContext(ShopContext);

  console.log('checkout from cart', checkout.lineItems?.length);
  // if (!checkout.lineItems) {
  //   console.log('cart is empty');
  //   return  <div>Cart is empty</div>
  // }
  return (
    <>
      <Drawer
        isOpen={isCartOpen}
        placement='right'
        onClose={closeCart}
        size="sm"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Your Cart</DrawerHeader>

          <DrawerBody>
            {
              !checkout.lineItems?.length ? <Text>Cart is empty</Text> :
              checkout.lineItems.map(item => (
                  <Grid templateColumns="repeat(4, 1fr)" gap={1} key={item.id}>
                    <Flex alignItems="center" justifyContent="center">
                      <CloseIcon onClick={()=>removeLineItem(item.id)} />
                    </Flex>
                    <Flex alignItems="center" justifyContent="center">
                      <Image src={item.variant.image.src} />
                    </Flex>
                    <Flex alignItems="center" justifyContent="center">
                      <Text>{item.title}</Text>
                    </Flex>
                    <Flex alignItems="center" justifyContent="center">
                      <Text>{item.variant.price} - {item.quantity}</Text>
                    </Flex>
                  </Grid>
                ))
            }
          </DrawerBody>

          { checkout.lineItems?.length ?
            <DrawerFooter>
              <Button w="100%" colorScheme='blue'><Link href={checkout.webUrl}>Checkout</Link></Button>
            </DrawerFooter>

            : null
          }
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Cart