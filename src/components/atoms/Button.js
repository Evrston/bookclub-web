import { Button as ChakraButton } from '@chakra-ui/react'

export const Button = ({ children, ...props }) => {
  return (
    <ChakraButton
      h="56px"
      borderRadius="16px"
      fontWeight="bold"
      fontSize="16px"
      bg="brand.secoundary"
      _hover={{ bg: 'brand.primary' }}
      {...props}
    >
      {children}
    </ChakraButton>
  )
}
