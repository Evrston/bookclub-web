import { Input as ChakraInput } from '@chakra-ui/react'
import { Alert } from 'components/atoms'

export const Input = (props) => (
  <>
    <ChakraInput
      h="56px"
      fontSize="16px"
      fontWeight="medium"
      focusBorderColor="brand.primary"
      {...props}
    />
    {props.error && <Alert status="error" error={props.error} />}
  </>
)
