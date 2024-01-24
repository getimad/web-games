import useScreeshots from '../hooks/useScreenshots';
import { Box, Center, Image, List, ListItem, Spinner } from '@chakra-ui/react';
import getCroppedImageUrl from '../services/get-cropped-image-url';

interface Props {
  gameSlug: string | undefined;
  mobile?: boolean;
}

function GameScreeshots({ gameSlug, mobile }: Props) {
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
      <ListItem
        key={i.id}
        marginBottom='1rem'
      >
        <Image
          src={getCroppedImageUrl(i.image)}
          draggable='false'
          borderRadius='1rem'
          objectFit='fill'
        />
      </ListItem>
    );  // Render screenshots when they are available
  };

  // Render for small devices
  if (mobile) {
    return (
      <List marginTop='1rem'>
        {renderScreenshots()}
      </List>
    );
  }

  // Normal render
  return (
    <Box position='fixed' h='90vh' w='300px' display='flex' justifyContent='right'>
      <List
        overflowY='scroll'
        h='calc(100vh - 4rem)'
        w='250px'
        css={{
          '&::-webkit-scrollbar': {
            display: 'none',
          }
        }}
      >
        {renderScreenshots()}
      </List>
    </Box >
  );
}

export default GameScreeshots;
