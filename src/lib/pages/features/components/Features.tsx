import {
    Box,
    Container,
    Heading,
    SimpleGrid,
    Icon,
    Text,
    Stack,
    HStack,
    VStack,
  } from '@chakra-ui/react';
  import { CheckIcon } from '@chakra-ui/icons';
  
const featureData = [{
    title: 'Effortless Convenience',
    text: 'Quickly blend protein shakes for a fast and easy nutritional boost!'
},
{
    title: 'Precision Blending',
    text: 'Advanced technology ensures a smooth texture and optimal nutrient absorption!',
},
{
    title: 'Time-Saving Solution',
    text: 'Perfect for busy individuals, including students and professionals with tight schedules!'
},
{
    title: 'Versatile Performance',
    text: 'Not just for protein – ideal for blending smoothies, shakes, and more!'
},
{
    title: 'Compact and Portable',
    text: 'Easy to take on the go, whether to the gym, office, or class!'
},
{
    title: 'User-Friendly Design',
    text: 'Simple operation and easy cleaning for hassle-free use!'
},
{
    title: 'Scientifically Backed',
    text: 'Endorsed by experts for its contribution to efficient nutrient utilization!'
},
{
    title: 'Enhanced Wellness',
    text: 'Supports overall health and fitness goals by facilitating quick and effective protein replenishment!'
},
]

  // Replace test data with your own
  const features = Array.apply(null, Array(8)).map(function (x, i) {
    return {
      id: i,
      title: featureData[i].title,
      text: featureData[i].text,
    };
  });
  
  export default function Features() {
    return (
      <Box p={4}>
        <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
          <Heading fontSize={'3xl'}>How it works</Heading>
          <Text color={'gray.600'} fontSize={'xl'}>
            Simply choose the option that you want and watch as our service quickly makes you a nutritional snack!
          </Text>
        </Stack>
  
        <Container maxW={'6xl'} mt={10}>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
            {features.map((feature) => (
              <HStack key={feature.id} align={'top'}>
                <Box color={'green.400'} px={2}>
                  <Icon as={CheckIcon} />
                </Box>
                <VStack align={'start'}>
                  <Text fontWeight={600}>{feature.title}</Text>
                  <Text color={'gray.600'}>{feature.text}</Text>
                </VStack>
              </HStack>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    );
  }
