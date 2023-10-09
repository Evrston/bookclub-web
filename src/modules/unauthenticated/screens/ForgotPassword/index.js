import { Flex, Image } from '@chakra-ui/react'
import { Text, Input, Link, Button } from 'components'
import { useNavigate } from 'react-router-dom'

export const ForgotPasswordScreen = () => {
  const navigate = useNavigate()

  return (
    <Flex flexDir="row" w="100vw" h="100vh">
      <Flex
        alignItems="flex-start"
        justifyContent="center"
        flexDir="column"
        w={['100%', '100%', '100%', '40%']}
        h="100%"
        padding={['24px', '48px', '80px', '112px']}
      >
        <Flex flexDir="column" w={['100%', '100%', '100%', '416px']}>
          <Image src="/img/logo.svg" alt="BoockClub Logo" w="160px" h="48px" />
          <Text.ScreenTitle mt="48px">Esqueceu Senha</Text.ScreenTitle>
          <Text mt="12px">
            Digite abaixo seu e-mail que enviaremos um código de recuperação de
            senha:
          </Text>
          <Input mt="24px" placeholder="Email@exemplo.com" />
          <Button onClick={() => navigate('/reset-password')} mt="24px">
            Avançar
          </Button>
          <Flex w="100%" alignItems="center" justifyContent="center" mt="32px">
            <Link onClick={() => navigate('/')}>Voltar</Link>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        w={['0%', '0%', '0%', '60%']}
        h="100vh"
        objectFit="inherit"
        backgroundImage="url('/img/auth_background.svg')"
        backgroundPosition="right"
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        borderTopLeftRadius="32px"
        borderBottomLeftRadius="32"
      />
    </Flex>
  )
}
