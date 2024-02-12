import { ReactNode } from 'react';
import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Link,
  Button,
  useDisclosure,
  Modal,
  ModalContent,
  ModalFooter,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  ModalOverlay,
} from '@chakra-ui/react';
import { FaCheckCircle, FaMinusCircle } from 'react-icons/fa';
import { globalState } from '../../../../store/State';
import { useHookstate } from '@hookstate/core';
import { UserService } from '../../../../store/User';
import { notify } from 'lib/components/notifications/notify';

function PriceWrapper({ children }: { children: ReactNode }) {
  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: 'center', lg: 'flex-start' }}
      borderColor={useColorModeValue('gray.200', 'gray.500')}
      borderRadius={'xl'}>
      {children}
    </Box>
  );
}

import { SUBSCRIPTION_LINK, LIFETIME_LINK } from '../../../../configvars';
import { ToastContainer } from 'react-toastify';



export default function Pricing() {

  const currentState = useHookstate(globalState)
  const email = currentState.get().userName
  const subscriptionId = currentState.get().subscriptionId
  const subscriptionString : string = `${SUBSCRIPTION_LINK}?prefilled_email=${email}`
  const lifeTimeString : string = `${LIFETIME_LINK}?prefilled_email=${email}`
  const userService = new UserService
  let subscribed = false
  let loggedIn = false
  let nonPayingCustomer = false
  const { isOpen, onOpen, onClose } = useDisclosure()

  if (email) {
    loggedIn = true
  }
  
  if (subscriptionId) {
    subscribed = true
  }

  if (email) {
    if (!subscriptionId) {
      nonPayingCustomer = true
    }
  }


  return (
    <Box py={12}>
      <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            />
            {/* Same as */}
      <ToastContainer />
      <VStack spacing={2} textAlign="center">
        <Heading as="h1" fontSize="4xl">
          Simple Pricing to Keep Simple with our Simple Product
        </Heading>
        <Text fontSize="lg" color={'gray.500'}>
          Start today with one shake or a subscription based plan 
        </Text>
      </VStack>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}>
        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl">
              Nutritional Shake
            </Text>
            <HStack justifyContent="center">
            <Text fontSize="3xl" fontWeight="600">
                $
              </Text>
              <Text fontSize="5xl" fontWeight="900">
                2.99
              </Text>
            </HStack>
          </Box>
          <VStack
            bg={useColorModeValue('gray.50', 'gray.700')}
            py={4}
            borderBottomRadius={'xl'}>
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Replinish your bodys needs
              </ListItem>    
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Feel Great
              </ListItem>   
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Helpful nutritional facts
              </ListItem>       
            </List>
          </VStack>
        </PriceWrapper>
        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight="700" fontSize="2xl">
              Protein Shake
            </Text>
            <HStack justifyContent="center">
            <Text fontSize="3xl" fontWeight="600">
                $
              </Text>
              <Text fontSize="5xl" fontWeight="900">
                3.99
              </Text>
            </HStack>
          </Box>
          <VStack
            bg={useColorModeValue('gray.50', 'gray.700')}
            py={4}
            borderBottomRadius={'xl'}>
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Replinish your bodys needs
              </ListItem>    
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Feel Great
              </ListItem>   
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Helpful nutritional facts
              </ListItem>       
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Healthy protein
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Tasty way to build back your muscles
              </ListItem> 
            </List>
          </VStack>
        </PriceWrapper>
        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl">
              Monthly Subscription
            </Text>
            <HStack justifyContent="center">
              <Text fontSize="3xl" fontWeight="600">
                $
              </Text>
              <Text fontSize="5xl" fontWeight="900">
                124.99
              </Text>
            </HStack>
          </Box>
          <VStack
            bg={useColorModeValue('gray.50', 'gray.700')}
            py={4}
            borderBottomRadius={'xl'}>
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Up to 2 smoothies a day
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Replinish your bodys needs
              </ListItem>    
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Feel Great
              </ListItem>   
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Helpful nutritional facts
              </ListItem>       
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Healthy protein
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Tasty way to build back your muscles
              </ListItem> 
            </List>
            <Box w="80%" pt={7}>
              <Link href={lifeTimeString} isExternal={true}>
              <Button w="full" colorScheme="red" variant="outline">
                Sign up today!
              </Button>
              </Link>
            </Box>
          </VStack>
        </PriceWrapper>
      </Stack>
    </Box>
  );
}
