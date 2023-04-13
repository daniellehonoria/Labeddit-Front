import React, { useContext, useEffect, useLayoutEffect, useState } from 'react'
import axios from 'axios';
import logo from "../../assets/labeddit-logo.png"
import { Box, Flex,HStack,Link, useColorModeValue, Spinner} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { goToLoginPage } from '../../routes/coordinator';
import { BASE_URL } from '../../constants/url';
import { GlobalContext } from '../../contexts/GlobalContext';

const PostsPage = () => {
  const context = useContext(GlobalContext)

  const navigate = useNavigate()
  const [enter, setEnter]= useState(false)
  //efeito colateral que verifica pelo login se o usuario está logado
  //redireciona para página de login caso não esteja
  useEffect(()=>{
    if(!context.isLogged){
      goToLoginPage(navigate)
    }
  }, [])
  const loginPage = async() =>{
    try {
      setEnter(true)
      window.localStorage.removeItem("labeddit-token")
      setEnter(false)
      goToLoginPage(navigate)
    } catch (error) {
      setEnter(false)

    }
  }

  return (
    <>
          <Box bg={useColorModeValue('#EDEDED')} px={4}>
        <Flex h={16} alignItems={'flex-end'} justifyContent={'center'} >

          <Flex alignItems={'flex-end'} justifyContent={'center'}  >
            <img src={logo} width={'50px'} />
          </Flex>
        </Flex>
        <HStack px={4} justifyContent={'end'} >
          <Link onClick={loginPage} 
          color={'#4088CB'} 
          font-weight={'bolder'} 
          fontSize={'20'} >
          {!enter ? 'Logout' : <Spinner />}</Link>
        </HStack>
      </Box>
    </>
  )
}

export default PostsPage