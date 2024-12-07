import { Box, Heading, Center} from '@chakra-ui/react';
import { Button } from '@/components/ui/button';
import Link from 'next/link'


export default function Home() {
  return (
    <Box maxWidth="800px" mx="auto" p={6}>
      <Heading as="h1" size="2xl" mt={2} mb={4} textAlign="center">
        Utility
      </Heading>
      <Center mt="10">
        <Button as={Link} href="/jsonformatter">
          JSON Formatter
        </Button>
      </Center>
    </Box>
  );
}
