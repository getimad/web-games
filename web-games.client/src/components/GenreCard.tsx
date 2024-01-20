import { HStack, ListItem, Image, Text, Button } from '@chakra-ui/react';
import Genre from '../interfaces/Genre';
import getCroppedImageUrl from '../services/get-cropped-image-url';
import useGameQueryStore from '../store';

interface Props {
  genre: Genre;
}

function GenreCard({ genre }: Props) {
  const { gameQuery, setGenreId } = useGameQueryStore(s => ({ gameQuery: s.gameQuery, setGenreId: s.setGenreId }));

  const onGenreClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setGenreId(genre.id);
  };

  return (
    <ListItem>
      <Button variant={gameQuery.genreId === genre.id ? 'solid' : 'ghost'} w='100%' justifyContent='left' paddingY={7} onClick={onGenreClick}>
        <HStack>
          <Image src={getCroppedImageUrl(genre.image_background)} boxSize={10} borderRadius={7} objectFit='cover' />
          <Text fontSize='sm' fontWeight='700'>{genre.name}</Text>
        </HStack>
      </Button>
    </ListItem>
  );
}

export default GenreCard;
