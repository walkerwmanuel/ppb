import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  VStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  MdOutlineEmail,
} from 'react-icons/md';
import { useState } from 'react';
import { UserService } from '../../../../store/User';
import { notify } from 'lib/components/notifications/notify';
import { ToastContainer } from 'react-toastify';

const userAPI = new UserService()

export default function contact() {

  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  return (
    <Container maxW="full" mt={0} centerContent overflow="hidden">
      <Flex>
        <Box
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}>
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
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 6, md: 10, lg: 22 }}>
              <WrapItem>
                <Box>
                  <Heading>Contact</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                    Fill up the form below to contact
                  </Text>
                  <Box bg={useColorModeValue('white', 'grey.800')} borderRadius="lg">
                  <Box m={8} color={useColorModeValue('black', 'grey.200')}>
                    <VStack spacing={5}>
                      <FormControl id="name">
                        <FormLabel>Your Email</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<MdOutlineEmail color="gray.800" />}
                          />
                          <Input type="text" value={email} size="md" onChange={(e) => setEmail(e.currentTarget.value)}/>
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Message</FormLabel>
                        <Textarea
                          onChange={(e) => setMessage(e.currentTarget.value)}
                          borderColor="gray.300"
                          _hover={{
                            borderRadius: 'gray.300',
                          }}
                          placeholder="message"
                          value={message}
                        />
                      </FormControl>
                      <FormControl id="name" float="right">
                        <Button
                          variant="solid"
                          bg="#0D74FF"
                          color="white"
                          _hover={{}}
                          onClick={async () => {
                            const sent = await userAPI.contactUs(email, message)
                            console.log(sent, email, message)
                            if (sent) {
                              notify(true, "Sent Message Successfully!")
                            } else {
                              notify(false, "Failed to send.")
                            }
                            setEmail('')
                            setMessage('')
                          }}
                          >
                          Send Message
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}

