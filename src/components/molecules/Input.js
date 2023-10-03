import { Input as ChakraInput } from '@chakra-ui/react'

export const Input = ({ ...props }) => (
  <ChakraInput
    h="56px"
    fontSize="16px"
    fontWeight="medium"
    focusBorderColor="brand.primary"
    {...props}
  />
)
