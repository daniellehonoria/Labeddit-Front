import React, { useContext, useState } from 'react'
import { Flex, Box, FormControl, Input, Stack, Button, Heading, Text, useColorModeValue, Spinner } from '@chakra-ui/react';
import logo from "../../assets/labeddit-logo.png"
import { BASE_URL } from '../../constants/url'
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { goToPostsPage, goToSignupPage } from '../../routes/coordinator';
import { GlobalContext } from '../../contexts/GlobalContext';
const LoginPage = () => {
  const context = useContext(GlobalContext)
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [criateAccount, setCriateAccount] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onChangeEmail = (event) => {
    setEmail(event.target.value)
  }
  const onChangePassword = (event) => {
    setPassword(event.target.value)
  }
  const signup = async() =>{
    try {
      setCriateAccount(true)
       await axios.post(`${BASE_URL}/users/login`)
        setCriateAccount(false)
        goToSignupPage(navigate)
    } catch (error) {
      setIsLoading(false)
      console.log(error);

    }
  }
  const login = async () => {
    try {
      setIsLoading(true)
      const body = {
        email: email,
        password: password
      }
      const response = await axios.post(
        `${BASE_URL}/users/login`, body
      )
      window.localStorage.setItem("labeddit-token", response.data.token)
      console.log(response.data)
      setIsLoading(false)
      goToPostsPage(navigate)

    } catch (error) {
      console.log(error);
      setIsLoading(false)
    }
  }
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={28} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <img src={logo}></img>
          <Heading fontSize={'5xl'}>LabEddit</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            O projeto de rede social da Labenu
          </Text>
        </Stack>
        <Box
        >
          <Stack spacing={3}>
            <FormControl id="email">
              <Input type="email" placeholder='E-mail' value={email} onChange={onChangeEmail} />
            </FormControl>
            <FormControl id="password">
              <Input type="password" placeholder='Senha' value={password} onChange={onChangePassword} />
            </FormControl>
            <Stack spacing={9}>

              <Button
                borderRadius="20"
                bgGradient={'linear(to-r, #FF6489, #F9B24E)'}
                color={'white'}
                _hover={{
                  bg: '#FFF',
                  color: '#FE7E02',
                  border: '1px'
                }}
                onClick={login}>
                {/* se sLoading for false(ñ logou ainda) senão, spinner até ser falso de novo */}
                {!isLoading ? 'Continuar' : <Spinner />}
              </Button>
              </Stack>

              <hr background-color={'red'}></hr>
              <Stack spacing={4}>
              <Button
                borderRadius="20"
                bg={'#FFFFFF'}
                border={'1px'}
                color={'#FE7E02'}
                _hover={{
                  bg: '#FE7E02',
                  color: '#FFFF'
                }} onClick={signup}>
                {!criateAccount ? 'Crie uma conta' : <Spinner />}
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

export default LoginPage