import {
  Input as ChakraInput,
  InputGroup,
  InputRightElement,
  Button
} from '@chakra-ui/react'
import { Alert } from 'components/atoms'
import { useState } from 'react'

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

Input.Password = (props) => {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  return (
    <>
      <InputGroup>
        <ChakraInput
          pr="4.5rem"
          h="56px"
          fontSize="16px"
          fontWeight="medium"
          focusBorderColor="brand.primary"
          type={show ? 'text' : 'password'}
          {...props}
        />
        <InputRightElement marginTop="26px" width="42px">
          <Button
            background={{}}
            _hover={{}}
            _active={{}}
            h="12px"
            size="sm"
            onClick={handleClick}
          >
            {show ? (
              <img src="/img/hide-icon.svg" />
            ) : (
              <img src="/img/show-icon.svg" />
            )}
          </Button>
        </InputRightElement>
      </InputGroup>
      {props.error && <Alert status="error" error={props.error} />}
    </>
  )
}

Input.Password.displayName = 'Password'
