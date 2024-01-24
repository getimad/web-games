import useScreeshots from '../hooks/useScreenshots';
import { Box, Center, Image, List, Spinner } from '@chakra-ui/react';
import getCroppedImageUrl from '../services/get-cropped-image-url';

interface Props {
  gameSlug: string | undefined;
}

function GameScreeshots({ gameSlug }: Props) {
  const { data, error, isLoading } = useScreeshots(gameSlug!);  // Fetch screeshots by slug

  if (error) {
    throw new Error(error.message);
  }

  const renderScreenshots = () => {
    if (isLoading) {
      return (
        <Center w='100%' h='100%' >
          <Spinner
            thickness='4px'
            speed='0.65s'
            size='lg'
          />
        </Center>
      );  // Render Spinner when is Loading
    }

    return data?.results.map(i =>
      <Image
        key={i.id}
        src={getCroppedImageUrl(i.image)}
        draggable='false'
        borderRadius='1rem'
        marginBottom='1rem'
      />
    );  // Render screenshots when they are available
  };

  return (
    <Box position='fixed'>
      <List
        overflowY='scroll'
        h='calc(102vh)'
        w='calc(500px - 6rem)'
        css={{
          '&::-webkit-scrollbar': {
            display: 'none',
          }
        }}
        marginRight='3rem'
        marginTop='-5rem'
        paddingTop='6rem'
      >
        {renderScreenshots()}
      </List>
    </Box>
  );
}

export default GameScreeshots;
