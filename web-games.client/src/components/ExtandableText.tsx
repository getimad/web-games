import { useState } from 'react';
import { Box, Button, Heading, Text } from '@chakra-ui/react';

const limit = 350;  // LENGTH OF THE TEXT

interface Props {
  title?: string;
  children: string;
}

function ExtandableText({ title, children }: Props) {
  const [isExtandable, setIsExtandable] = useState(false);

  const content = isExtandable ? children : (children.substring(0, limit) + '...');

  return (
    <Box>
      <Heading as='h6' size='md' marginBottom='1rem'>{title}</Heading>
      <Text>
        {content}
      </Text>
      {
        children.length > limit &&
        <Button
          variant='link'
          size='sm'
          onClick={() => setIsExtandable(!isExtandable)}
        >
          {!isExtandable ? 'Read more' : 'Show less'}
        </Button>
      }
    </Box>
  );
}

export default ExtandableText;
