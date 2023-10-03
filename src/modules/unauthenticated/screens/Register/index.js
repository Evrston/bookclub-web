import { Flex, Image } from '@chakra-ui/react'
import { Text, Input, Link, Button } from 'components'
import { useNavigate } from 'react-router-dom'

export const RegisterScreen = () => {
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
          <Text.ScreenTitle mt="48px">Cadastro</Text.ScreenTitle>
          <Input mt="24px" placeholder="Nome" />
          <Input mt="24px" placeholder="E-mail" />
          <Input type="password" mt="16px" placeholder="Senha" />
          <Input type="password" mt="16px" placeholder="Confirmar senha" />
          <Button mt="24px">Cadastrar</Button>
          <Flex wd="100%" alignItems="center" justifyContent="center" mt="52px">
            <Text fontSize="16px" color="brand.greyDark">
              Já possui conta ?
              <Link.Action
                onClick={() => navigate('/')}
                ml="5px"
                mt="24px"
                cursor="pointer"
              >
                Faça o login aqui.
              </Link.Action>
            </Text>
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
