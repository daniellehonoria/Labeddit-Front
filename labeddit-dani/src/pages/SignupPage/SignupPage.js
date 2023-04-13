import React from 'react'

import {
  Flex,
  Box,
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

const SignupPage = ()=> {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Flex
      minH={'80vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'30px'}  textAlign={'normal'}>
            Olá, boas vindas ao LabEddit ;)
          </Heading>

        </Stack>
        <Box
             p={'revert'}>
          <Stack spacing={2}
          pt={20}  >
          <FormControl id="apelido" isRequired>
              <Input type="text" placeholder='Apelido'/>
            </FormControl>
            <FormControl id="email" isRequired>
              <Input type="email" placeholder='E-mail'/>
            </FormControl>
            <FormControl id="password" isRequired>
              <InputGroup>
                <Input placeholder='Senha' type={showPassword ? 'text' : 'password'} />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack pt={6}>
              <Text align={'normal'} fontSize={'15px'}>
              Ao continuar, você concorda com o nosso <Link color={'blue.400'}>Contrato de usuário</Link> e nossa <Link color={'blue.400'}>Política de Privacidade</Link>
              </Text>
            </Stack>
            <Stack pt={6}>
              <Text align={'normal'} fontSize={'15px'}>
              <input type="checkbox" /> {"   "}
               Eu concordo em receber emails sobre coisas legais no Labeddit
              </Text>
            </Stack>
            <Stack spacing={10} pt={2}>
              <Button
              height="51px"
                loadingText="Submitting"
                borderRadius="20"
                bgGradient={'linear(to-r, #FF6489, #F9B24E)'}
                color={'white'}
                fontSize='20px'
                _hover={{
                  bg:'#FFF' ,
                  color: '#FE7E02',
                  border: '1px'
                }}>
                Cadastrar
              </Button>
            </Stack>

          </Stack>
        </Box>
      </Stack>
    </Flex>

  );
}

export default SignupPage