import React from 'react';
import {
  Heading,
  Image,
  Text,
  HStack,
  Container,
  VStack,
} from '@chakra-ui/react';

interface BlogAuthorProps {
  date: Date;
  name: string;
}

export const BlogAuthor: React.FC<BlogAuthorProps> = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://100k-faces.glitch.me/random-image"
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};

const PrivacyPage = () => {
  return (
    <Container maxW={'7xl'} p="12">
      <Heading as="h1">Terms of Service</Heading>
      
      <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
        <Heading as="h2">Terms and Conditions of Use</Heading>
        <Text as="p" fontSize="lg">
        These Terms and Conditions ("Terms") govern your use of the stock information software ("Software") provided by [Company Name] ("Company," "we," or "us"). By accessing or using the Software, you agree to be bound by these Terms. If you do not agree to these Terms, please refrain from using the Software.

Use of the Software
1.1 License: Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, and revocable license to use the Software solely for your personal or internal business purposes.
1.2 Restrictions: You shall not:
(a) Copy, modify, distribute, sell, lease, sublicense, or otherwise exploit the Software or any portion thereof without our prior written consent;
(b) Use the Software in any manner that violates any applicable laws, regulations, or third-party rights;
(c) Attempt to gain unauthorized access to the Software or its related systems or networks;
(d) Reverse engineer, decompile, or disassemble the Software, except to the extent permitted by applicable law;
(e) Remove, alter, or obscure any proprietary notices or labels on the Software; or
(f) Use the Software to develop a competing product or service.

Content
2.1 Stock Information: The Software provides access to stock-related information, including but not limited to stock quotes, financial data, news articles, and analysis. While we strive to provide accurate and timely information, we do not guarantee the completeness, accuracy, or reliability of any stock information displayed or provided by the Software. You understand and acknowledge that stock market data is subject to constant fluctuations and may not always reflect real-time prices.
2.2 Third-Party Content: The Software may include links, references, or information from third-party websites, applications, or services. We do not endorse or control such third-party content and shall not be responsible for its accuracy, availability, or legality. Your use of third-party content is at your own risk, and you should review the terms and privacy policies of those third parties.

Privacy
3.1 Data Collection: We may collect and process certain personal information as described in our Privacy Policy. By using the Software, you consent to our collection, use, and processing of your personal information as set forth therein.
3.2 Data Accuracy: You are responsible for ensuring the accuracy of any data or information you provide to us. We shall not be liable for any inaccuracies or errors resulting from your provision of incorrect or incomplete data.

Intellectual Property
4.1 Ownership: The Software, including all its content, features, and functionality, is owned by the Company and protected by intellectual property laws. You acknowledge that the Software is licensed, not sold, to you, and you have no ownership rights or claims to the Software or its components.
4.2 Feedback: If you provide us with any suggestions, ideas, or feedback regarding the Software ("Feedback"), you grant us a non-exclusive, worldwide, royalty-free, perpetual, and irrevocable right to use, modify, reproduce, distribute, sublicense, and otherwise exploit the Feedback without any obligation or compensation to you.

Disclaimer of Warranties
THE SOFTWARE IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE. WE DISCLAIM ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. YOU ACKNOWLEDGE AND AGREE THAT YOUR USE OF THE SOFTWARE IS AT YOUR OWN RISK.

Limitation of Liability
IN NO EVENT SHALL THE COMPANY, ITS AFFILIATES, DIRECTORS, OFFICERS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL
        </Text>
      </VStack>
    </Container>
  );
};

export default PrivacyPage;
