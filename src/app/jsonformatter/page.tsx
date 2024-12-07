"use client"

import { useState } from 'react';
import {
  Box,
  Textarea,
  Button,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Toaster, toaster } from "@/components/ui/toaster"

const JsonFormatter: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [output, setOutput] = useState<string>('');

  const handleFormat = () => {
    try {
      const formattedJson = JSON.stringify(JSON.parse(input), null, 2);
      setOutput(formattedJson);

      toaster.create({
        title: 'JSON formatted successfully!',
        type: 'success',
        duration: 2000
      });
    } catch (error) {
      setOutput('');
      toaster.create({
        title: 'Invalid JSON',
        description: 'Please check your input and try again.',
        type: 'error',
        duration: 2500
      });
    }
  };

  return (
    <Box maxWidth="800px" mx="auto" p={6}>
      <Heading as="h1" size="2xl" mb={4} textAlign="center">
        JSON Formatter
      </Heading>
      <Text mb={4} textAlign="center">
        Paste your JSON below and click "Format JSON" to see the formatted output.
      </Text>

      <VStack spacing={4}>
        <Textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter JSON here"
          size="sm"
          height="200px"
        />
        <Button colorScheme="teal" size="md" onClick={handleFormat} mt="2">
          Format JSON
        </Button>
        {output && (
          <Textarea
            mt="5"
            value={output}
            readOnly
            placeholder="Formatted JSON will appear here"
            size="sm"
            height="200px"
          />
        )}
      </VStack>
      <Toaster/>
    </Box>
  );
};

export default JsonFormatter;
