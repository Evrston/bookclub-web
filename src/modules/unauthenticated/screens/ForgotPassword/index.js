import { Flex, Image, useToast } from '@chakra-ui/react'
import { Text, Input, Link, Button } from 'components'
import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useMutation } from 'react-query'
import { forgotPasswordCall } from 'services/api/requests'

export const ForgotPasswordScreen = () => {
  const navigate = useNavigate()
  const toast = useToast()

  const mutation = useMutation((data) => forgotPasswordCall(data), {
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
    onSuccess: (data) => {
      toast({
        title: 'Email enviado com sucesso!',
        status: 'success',
        duration: 5000,
        isClosable: true
      })
      navigate(`/reset-password?email=${values.email}`)
    }
  })

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      email: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email('E-mail Inválido.').required('')
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
          <Text.ScreenTitle mt="48px">Esqueceu Senha</Text.ScreenTitle>
          <Text mt="12px">
            Digite abaixo seu e-mail que enviaremos um código de recuperação de
            senha:
          </Text>
          <Input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            mt="24px"
            placeholder="Email@exemplo.com"
            error={errors.email}
          />
          <Button
            isLoading={mutation.isLoading}
            onClick={handleSubmit}
            mt="24px"
          >
            Avançar
          </Button>
          <Flex w="100%" alignItems="center" justifyContent="center" mt="32px">
            <Link onClick={() => navigate('/login')}>Voltar</Link>
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
