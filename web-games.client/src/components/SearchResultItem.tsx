import { Card, CardBody, CardHeader, Heading, Text, Image, HStack, Box, Center } from '@chakra-ui/react';
import Game from '../interfaces/Game';
import getCroppedImageUrl from '../services/get-cropped-image-url';
import nullBackgroundImage from '../assets/null-image-white.svg';
import PlatformIconList from './PlatformIconList';
import { useNavigate } from 'react-router-dom';
import useSearchStore from '../useSearchStore';

interface Props {
  game: Game;
}

function SearchResultItem({ game }: Props) {
  const navigate = useNavigate();
  const { setSearchQuery, setShowSearchBox } = useSearchStore(s => ({ setSearchQuery: s.setSearchQuery, setShowSearchBox: s.setShowSearchBox }));

  const onHandleClick = () => {
    setSearchQuery('');
    setShowSearchBox(false);
    navigate(`/games/${game.slug}`, { state: { imageUri: game.background_image } });
  };

  return (
    <Card
      borderRadius='15px'
      minH='120px'
      size='sm'
      cursor='pointer'
      onClick={onHandleClick}
    >
      <HStack >
        <Center margin='1rem'>
          <Image
            src={!game?.background_image ? nullBackgroundImage : getCroppedImageUrl(game.background_image)}
            w='150px'
            borderRadius='1rem'
          />
        </Center>

        <Box>
          <CardHeader paddingBottom={0} paddingX={3}>
            <Heading size='md' h='30px'>
              {game.name}
            </Heading>
            {game.parent_platforms && <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />}
          </CardHeader>
          <CardBody w='100%'>
            <Text as='u' fontSize={11} fontWeight='700' position='absolute' bottom='1rem'>Read more</Text>
          </CardBody>
        </Box>
      </HStack>
    </Card >
  );
}

export default SearchResultItem;
