import { Box, Button, Text } from '@chakra-ui/react';
import { useState } from 'react';

const limit = 350;  // LENGTH OF THE TEXT

interface Props {
  children: string;
}

function ExtandableText({ children }: Props) {
  const [isExtandable, setIsExtandable] = useState(false);

  const content = isExtandable ? children : (children.substring(0, limit) + '...');

  return (
    <Box>
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
