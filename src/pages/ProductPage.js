import React, { useEffect, useContext } from 'react'
import { useParams, Link } from "react-router-dom";
import {Box, Grid, Image, Text, Button, Heading, Flex, Center} from "@chakra-ui/react";
import { ShopContext } from '../context/shopContext';

const ProductPage = () => {
  const { handle } = useParams();
  const {
    fetchProductWithHandle,
    addItemToCheckout,
    product
  } = useContext(ShopContext);

  useEffect(()=>{
    fetchProductWithHandle(handle)
  }, [fetchProductWithHandle, handle])

  if (!product.title) {
    console.log('no product', handle);
    return <div>Loading...</div>
  }
  console.log('product', product);
  return (
    <Box>
      <Grid templateColumns="repeat(2, 1fr)">
        <Image src={product.images[0].src} />
        <Box>
          <Heading>{product.title}</Heading>
          <Text>{product.variants[0].price}</Text>
          <Text>{product.description}</Text>

          <Button
            onClick={()=>addItemToCheckout(product.variants[0].id, 1)}
          >
            Add to Cart
          </Button>
        </Box>
      </Grid>
    </Box>
  );
}

export default ProductPage;

// <Image src={product.images[0].src} />
// <Box>
//   <Heading>{product.title}</Heading>
//   <Text>{product.variants[0].price}</Text>
//   <Text>{product.description}</Text>
//   <Button onClick={()=>addItemToCheckout(product.variants[0].id, 1)}>
//     Add to Cart
//   </Button>
// </Box>