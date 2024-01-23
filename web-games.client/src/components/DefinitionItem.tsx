import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  term: string;
  children: ReactNode;
  style?: object;
}

function DefinitionItemItem({ term, children, style }: Props) {
  return (
    <Box marginY={5} style={style}>
      <Heading as='dt' size='sm' color='gray.600' marginBottom='0.3rem'>
        {term}
      </Heading>
      <dd style={{ fontSize: 'small' }}>
        {children}
      </dd>
    </Box>
  );
}

export default DefinitionItemItem;
