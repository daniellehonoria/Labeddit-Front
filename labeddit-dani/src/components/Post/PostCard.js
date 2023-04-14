import React from 'react';
import { Stack, Text, Button, Image, Box, Center } from '@chakra-ui/react';
import comments from "../../assets/comments.svg"
import up from "../../assets/upArrow.svg"
import down from "../../assets/downArrow.svg"
const PostCard = (props) => {
  const { post, like, dislike, comment } = props
  const likes = post.likes
  const dislikes = post.dislikes
  const likesDislikes = likes + dislikes

  return (
    <Stack p="10s"
    
    justifyContent={"center"}
    
      maxW={"350"}
      boxShadow="lg" m="1"
      borderRadius="lg"
      bg={'#FBFBFB'}
      ml={'auto'}
      mr={'5'}
      border={'1px'}
      borderColor={'#E0E0E0'}
    >
  
      <Stack
        direction={{ base: 'column', md: 'row' }}
        justifyContent={"center"}       m={'2'}

      >
        <Text fontSize={{ base: 'sm' }}        
         alignItems={'center'}
        textAlign={'left'} maxW={'xs'}>
          <h6>Enviado por: {post.id}</h6>

          {post.content}
        </Text>

      </Stack>
              <Stack  display={"flex"}alignItems={"flex-start"} >

          <Button bg={'#FBFBFB'}  borderRadius={'50'} h={'10'} display={'flex'} >

            <Button display={'flex'}borderRadius={'50'}
            ms={'0'} bg={'#ECECEC'}alignItems={"center"} px={'2'} 
              justifyContent={"space-around"}  h={'8'}>
              <Button justifyContent={'center'} h={'8'} bg={'#ECECEC'}>
                <Image src={up} ms={'-5'} w={'0%'} h={"60%"} bg={'transparent'}
                  onClick={() => like(post.id)}
                />
              </Button>
              <Box display={'grid'} >

                <div> {likesDislikes}</div>

              </Box>

              <Button h={'8'} bg={'#ECECEC'} >

                <Image
                  src={down}
                  w={'60%'} h={"60%"}
                  onClick={() => dislike(post.id)} />
              </Button>

            </Button>
            <Button bg={'#ECECEC'} ml={'1'} h={'8'} borderRadius={'50'}  px={8} display={'flex'}  alignItems={'center'}
               justifyContent={'space-between'} >
              {comment}
              <Image
                ml={'2'}
                w={'80%'} h={"80%"} mb={'0'}

                src={comments} />
            </Button>

          </Button>
        </Stack>
    </Stack>
  );
}

export default PostCard