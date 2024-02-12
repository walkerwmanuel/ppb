import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    Button,
    Link,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  export default function Sam() {
    return (
      <Center py={6}>
        <Box
          maxW={'270px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}>
          <Image
            h={'120px'}
            w={'full'}
            src="/samBackground.jpeg"
            objectFit={'cover'}
            alt='power pack blend'
          />
          <Flex justify={'center'} mt={-12}>
            <Avatar
              size={'xl'}
              src="/Sam.jpeg"
              css={{
                border: '2px solid white',
              }}
            />
          </Flex>
  
          <Box p={6}>
            <Stack spacing={0} align={'center'} mb={5}>
              <Heading fontSize={'3xl'} fontWeight={500} fontFamily={'body'}>
                Sam Friedel
              </Heading>
              <Text color={'gray.500'}>Developer</Text>
            </Stack>
  
            <Stack direction={'row'} justify={'center'} spacing={6}>
              <Stack spacing={0} align={'center'}>
                <Text fontWeight={600}>1k</Text>
                <Text fontSize={'sm'} color={'gray.500'}>
                  Followers
                </Text>
              </Stack>
              <Stack spacing={0} align={'center'}>
                <Text fontWeight={600}>500</Text>
                <Text fontSize={'sm'} color={'gray.500'}>
                  Connections
                </Text>
              </Stack>
            </Stack>

            <Link href="https://www.linkedin.com/in/samfriedel/" isExternal>
            <Button
              w={'full'}
              mt={8}
              bg='blue.500'
              
              color={'white'}
              rounded={'md'}
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
                bg:'blue.700'
              }}>
              Follow
            </Button>
          </Link>
          </Box>
        </Box>
      </Center>
    );
  }