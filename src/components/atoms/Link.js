import { Link as ChakraLink } from '@chakra-ui/react'

export const Link = ({ children, ...props }) => (
  <ChakraLink {...props} fontSize="14px" color="brand.greyDark">
    {children}
  </ChakraLink>
)

Link.Action = ({ children, ...props }) => (
  <ChakraLink fontSize="16px" fontWeight="bold" color="brand.black" {...props}>
    {children}
  </ChakraLink>
)

Link.Action.displayName = 'Action'
