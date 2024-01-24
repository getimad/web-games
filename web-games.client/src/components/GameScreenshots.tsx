import useScreeshots from "../hooks/useScreenshots";
import { Box, Image, List, Text } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/get-cropped-image-url";

interface Props {
  gameId: number;
}

function GameScreeshots({ gameId }: Props) {
  const { data, error, isLoading } = useScreeshots(gameId);
  return (
    <Box position='fixed'>
      <Box position='absolute' w='100%' h='1rem' zIndex='1' backdropFilter='saturate(180%) blur(5px)' bottom='-1px' />
      <List
        overflowY='scroll'
        h='calc(102vh)'
        css={{
          '&::-webkit-scrollbar': {
            display: 'none',
          }
        }}
        marginRight='3rem'
        marginTop='-5rem'
        paddingTop='6rem'
        paddingBottom='1rem'
      >
        {data?.results.map(i =>
          <Image key={i.id} src={getCroppedImageUrl(i.image)} borderRadius='1rem' marginBottom='1rem' />
        )}
      </List>
    </Box>
  );
}

export default GameScreeshots;
