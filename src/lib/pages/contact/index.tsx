import { Center, Flex, Grid, GridItem, HStack, Stack } from "@chakra-ui/react";

import Contact from "./components/Contact";
import Walker from "./components/Walker"
import Dylan from "./components/Dylan";
import Sam from "./components/Sam";
import Andre from "./components/Andre";
import Kelvin from "./components/Kelvin";
import Natasha from "./components/Natasha";

const ContactPage = () => {
  return (
    <Flex justifyContent={'center'} alignItems='center' gap='2'>
      <Stack>
        <Dylan />
        <Natasha />
        <Walker />
      </Stack>
      <Stack>
        <Sam />
        <Andre />
        <Kelvin />
      </Stack>
    </Flex>
  );
};

export default ContactPage;
