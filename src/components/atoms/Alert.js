import {
  Alert as ChakraAlert,
  AlertIcon,
  AlertTitle,
  Flex
} from '@chakra-ui/react'

export const Alert = (props) => (
  <Flex paddingTop="5px" paddingBottom="5px" height="7%">
    <ChakraAlert borderRadius="5px" {...props}>
      <AlertIcon />
      <AlertTitle fontSize="12px">{props.error}</AlertTitle>
    </ChakraAlert>
  </Flex>
)
