import React, { useEffect, useState } from 'react';
import { Box, Button, Heading, Text, Container, Stack, useBreakpointValue, useDisclosure } from '@chakra-ui/react';

const FakeApiComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null); // State to manage selected item

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  const handleClick = (id) => {
    setSelectedItem(selectedItem === id ? null : id); // Toggle selection
  };

  const headingSize = useBreakpointValue({ base: 'lg', md: 'xl' });
  const containerPadding = useBreakpointValue({ base: '4', md: '8' });

  if (loading) {
    return (
      <Container maxW="container.md" p={containerPadding} centerContent>
        <Box bg="blue.50" p={6} borderRadius="md" shadow="md" textAlign="center">
          <Text fontSize="xl" color="blue.500">Loading...</Text>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxW="container.lg" p={containerPadding} centerContent>
      <Box bg="white" p={6} borderRadius="md" shadow="lg" width="100%">
        <Heading as="h1" mb={6} size={headingSize} color="gray.800">Fake API Data</Heading>
        <Stack spacing={4}>
          {data.map(item => (
            <Box
              key={item.id}
              p={4}
              bg={selectedItem === item.id ? 'teal.50' : 'gray.50'}
              borderRadius="md"
              shadow="md"
              cursor="pointer"
              _hover={{ bg: 'gray.100' }}
              onClick={() => handleClick(item.id)}
            >
              <Heading as="h2" size="md" mb={2} color="gray.700">{item.title}</Heading>
              <Text color="gray.600">{item.body}</Text>
            </Box>
          ))}
        </Stack>
        <Button colorScheme="teal" mt={6} size="lg" width="full">Click Me</Button>
      </Box>
    </Container>
  );
};

export default FakeApiComponent;
