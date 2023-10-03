import { Flex, Image } from '@chakra-ui/react'
import { Text, Input, Link, Button } from 'components'

export const LoginScreen = () => {
  return (
    <Flex flexDir="row" w="100vw" h="100vh">
      <Flex
        alignItems="flex-start"
        justifyContent="center"
        flexDir="column"
        w={['100%', '100%', '100%', '40%']}
        h="100%"
        paddingLeft={['0px', '0px', '0px', '112px']}
        padding={['24px', '48px', '80px']}
      >
        <Flex flexDir="column" w={['100%', '100%', '100%', '416px']}>
          <Image src="/img/logo.svg" alt="BoockClub Logo" w="160px" h="48px" />
          <Text.ScreenTitle mt="48px">Login</Text.ScreenTitle>
          <Input mt="24px" placeholder="Email@exemplo.com" />
          <Input type="password" mt="16px" placeholder="*************" />

          <Flex
            w="100%"
            alignItems="flex-end"
            justifyContent="flex-end"
            mt="8px"
          >
            <Link>Esqueceu a senha ?</Link>
          </Flex>

          <Button mt="24px">Entrar</Button>
          <Flex wd="100%" alignItems="center" justifyContent="center" mt="52px">
            <Text fontSize="16px" color="brand.greyDark">
              Não possui conta ?
              <Link.Action ml="5px" mt="24px" cursor="pointer">
                Cadastre-se aqui
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
