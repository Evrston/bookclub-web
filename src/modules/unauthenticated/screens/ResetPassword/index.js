import { Flex, Image, useToast } from '@chakra-ui/react'
import { Text, Input, Link, Button } from 'components'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useMutation } from 'react-query'
import { resetPassword } from 'services/api/requests'

export const ResetPasswordScreen = () => {
  const navigate = useNavigate()
  const toast = useToast()
  const [SearchParams] = useSearchParams()

  const mutation = useMutation((data) => resetPassword(data), {
    onError: (error) => {
      toast({
        title: 'Falha na requisição.',
        description:
          error?.response?.data?.error ||
          'Falha na requisição! tente novamente mais tarde.',
        status: 'error',
        duration: 2000,
        isClosable: true
      })
    },
    onSuccess: () => {
      toast({
        title: 'Senha redefinida com sucesso!',
        status: 'success',
        duration: 5000,
        isClosable: true
      })
      navigate('/login')
    }
  })

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      token: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: Yup.object({
      token: Yup.string()
        .required('')
        .length(6, 'Token deve conter 6 caracteres')
        .required('Token é obrigatório'),
      password: Yup.string()
        .min(6, 'A senha deve conter mais que 6 caracteres.')
        .required('Senha é obrigatório.'),
      confirmPassword: Yup.string()
        .required('')
        .oneOf([Yup.ref('password'), null], 'Senhas não coincidem.')
    }),
    onSubmit: (data) => {
      mutation.mutate({
        email: SearchParams.get('email'),
        token: data.token,
        password: data.password
      })
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
          <Text.ScreenTitle mt="48px">Nova Senha</Text.ScreenTitle>
          <Text mt="12px">
            Digite o código enviado para o seu E-mail e escolha uma nova senha
            nos campos abaixo:
          </Text>
          <Input
            id="token"
            name="token"
            type="text"
            value={values.token}
            onChange={handleChange}
            error={errors.token}
            mt="24px"
            placeholder="Ex:000000"
            maxLength={6}
          />
          <Input.Password
            id="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            error={errors.password}
            mt="16px"
            placeholder="Nova senha"
          />
          <Input.Password
            id="confirmPassword"
            name="confirmPassword"
            value={values.confirmPassword}
            onChange={handleChange}
            error={errors.confirmPassword}
            mt="16px"
            placeholder="Confirmar nova senha"
          />
          <Button
            isLoading={mutation.isLoading}
            onClick={handleSubmit}
            mt="24px"
          >
            Salvar
          </Button>
          <Flex wd="100%" alignItems="center" justifyContent="center" mt="52px">
            <Text fontSize="16px" color="brand.greyDark">
              Não recebeu o código ?
              <Link.Action ml="5px" mt="24px" cursor="pointer">
                Clique aqui para reenviar.
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
