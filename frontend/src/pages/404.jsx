import React from 'react'
import Helmet from 'react-helmet'
import {HStack, Image, Text} from '@chakra-ui/react'
const Error404 = () => {
  return (
    <>
      <Helmet>
        <title>Error 404</title>
      </Helmet>
      <HStack spacing={1} pr={3}>
                <Image src="/images/logo_sin_texto.png" boxSize="250px" />
                <Text fontSize="7xl">Error 404</Text>
      </HStack>
      <Text fontSize="3xl">Lo sentimos, pero esta página no está disponible</Text>
    </>
  )
}

export default Error404