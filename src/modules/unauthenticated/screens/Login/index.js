import { Flex, Image, useToast } from '@chakra-ui/react'
import { Text, Input, Link, Button } from 'components'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useMutation } from 'react-query'
import { loginCall } from 'services/api/requests'
import { saveItem } from 'services/storage'
import { SAVE_USERNAME_TOKEN } from 'services/constants'

export const LoginScreen = () => {
  const navigate = useNavigate()
  const toast = useToast()

  const mutation = useMutation((data) => loginCall(data), {
    onError: (error) => {
      toast({
        title: 'Falha ao realizar login..',
        description:
          error?.response?.data?.error ||
          'Falha ao relizar login! tente novamente mais tarde.',
        status: 'error',
        duration: 2000,
        isClosable: true
      })
    },
    onSuccess: (data) => {
      toast({
        title: 'Login realizado com sucesso!.',
        status: 'success',
        duration: 5000,
        isClosable: true
      })
      saveItem(SAVE_USERNAME_TOKEN, data?.data?.token)
      navigate('/home')
    }
  })

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('E-mail Inválido.')
        .required('E-mail é obrigatório.'),
      password: Yup.string()
        .min(6, 'A senha deve conter mais que 6 caracteres.')
        .required('Senha é obrigatório.')
    }),
    onSubmit: (data) => {
      mutation.mutate(data)
    }
  })

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
          <Text.ScreenTitle mt="48px">Login</Text.ScreenTitle>
          <Input
            id="email"
            name="email"
            value={values.email}
            type="email"
            mt="24px"
            placeholder="Email@exemplo.com"
            onChange={handleChange}
            error={errors.email}
          />
          <Input.Password
            id="password"
            name="password"
            value={values.password}
            mt="16px"
            placeholder="*************"
            onChange={handleChange}
            error={errors.password}
          />
          <Flex
            w="100%"
            alignItems="flex-end"
            justifyContent="flex-end"
            mt="8px"
          >
            <Link onClick={() => navigate('/forgot-password')}>
              Esqueceu a senha ?
            </Link>
          </Flex>
          <Button
            isLoading={mutation.isLoading}
            onClick={handleSubmit}
            mt="24px"
          >
            Entrar
          </Button>
          <Flex wd="100%" alignItems="center" justifyContent="center" mt="52px">
            <Text fontSize="16px" color="brand.greyDark">
              Não possui conta ?
              <Link.Action
                onClick={() => navigate('/signup')}
                ml="5px"
                mt="24px"
                cursor="pointer"
              >
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
