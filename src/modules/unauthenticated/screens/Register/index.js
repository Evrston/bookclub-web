import { Flex, Image } from '@chakra-ui/react'
import { Text, Input, Link, Button } from 'components'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'

export const RegisterScreen = () => {
  const navigate = useNavigate()

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: Yup.object({
      name: Yup.string(3, 'Nome deve ter mais que 3 caracteres').required(),
      email: Yup.string()
        .email('E-mail Inválido.')
        .required('E-mail é obrigatório.'),
      password: Yup.string()
        .min(6, 'A senha deve conter mais que 6 caracteres.')
        .required('Senha é obrigatório.'),
      confirmPassword: Yup.string()
        .required('')
        .oneOf([Yup.ref('password'), null], 'Senhas não coincidem.')
    }),
    onSubmit: (data) => {
      console.log({ data })
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
          <Text.ScreenTitle mt="48px">Cadastro</Text.ScreenTitle>
          <Input
            type="text"
            id="name"
            name="name"
            value={values.name}
            onChange={handleChange}
            mt="24px"
            placeholder="Nome"
            error={errors.name}
          />
          <Input
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            mt="24px"
            placeholder="E-mail"
            error={errors.email}
          />
          <Input
            type="password"
            id="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            mt="16px"
            placeholder="Senha"
            error={errors.password}
          />
          <Input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={values.confirmPassword}
            onChange={handleChange}
            mt="16px"
            placeholder="Confirmar senha"
            error={errors.confirmPassword}
          />
          <Button onClick={handleSubmit} mt="24px">
            Cadastrar
          </Button>
          <Flex wd="100%" alignItems="center" justifyContent="center" mt="52px">
            <Text fontSize="16px" color="brand.greyDark">
              Já possui conta ?
              <Link.Action
                onClick={() => navigate('/login')}
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
