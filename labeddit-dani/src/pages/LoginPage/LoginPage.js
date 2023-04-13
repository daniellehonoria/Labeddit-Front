import React, { useState } from 'react'
import {Flex, Box, FormControl, Input, Stack, Button, Heading, Text, useColorModeValue} from '@chakra-ui/react';
import logo from "../../assets/labeddit-logo.png"

const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onChangeEmail = (event)=>{
    setEmail(event.target.value)
  }
  const onChangePassword = (event)=>{
    setPassword(event.target.value)
  }
  const login =()=>{
    console.log(email)
    console.log(password);
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
              <Input type="email" placeholder='E-mail' value={email} onChange={onChangeEmail}/>
            </FormControl>
            <FormControl id="password">
              <Input type="password" placeholder='Senha' value={password} onChange={onChangePassword} />
            </FormControl>
            <Stack spacing={4}>
              
              <Button 
                borderRadius="20"
                bgGradient={'linear(to-r, #FF6489, #F9B24E)'}
                color={'white'}
                _hover={{
                  bg:'#FFF' ,
                  color: '#FE7E02',
                  border: '1px'
                }}
                onClick={login}>
                Continuar
              </Button>
              <hr background-color={'red'}></hr>
              <Button
              borderRadius="20"
                bg={'#FFFFFF'}
                border={'1px'}
                color={'#FE7E02'}
                _hover={{
                  bg:'#FE7E02' ,
                  color: '#FFFF'
                }}>
                Crie uma conta!
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

export default LoginPage