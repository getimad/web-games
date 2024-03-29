import { Box, Center, Heading, Spinner } from '@chakra-ui/react';
import useGame from '../hooks/useGame';
import ExtandableText from '../components/ExtandableText';
import GameAttributes from '../components/GameAttributes';

interface Props {
  gameSlug: string | undefined;
}

function GameDetail({ gameSlug }: Props) {
  const { data, isLoading, error } = useGame(gameSlug!);

  if (error) return <>{error.message}</>

  if (isLoading || !data) {
    return (
      <Center w='100%' h='90vh' >
        <Spinner
          thickness='4px'
          speed='0.65s'
          size='lg'
        />
      </Center>
    );
  }

  return (
    <Box width='100%'>
      <Heading
        fontSize={{ base: '5xl', xl: '6xl' }}
        marginBottom='1.5rem'
      >
        {data.name}
      </Heading>
      <ExtandableText title='About'>
        {data.description_raw}
      </ExtandableText>
      <GameAttributes game={data} />
    </Box>
  );
}

export default GameDetail;
