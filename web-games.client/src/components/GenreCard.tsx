import { HStack, ListItem, Image, Text, Button } from '@chakra-ui/react';
import Genre from '../interfaces/Genre';
import getCroppedImageUrl from '../services/get-cropped-image-url';

interface Props {
  genre: Genre;
  selected?: number;
  onSelect: (genre: Genre) => void;
}

function GenreCard({ genre, selected, onSelect }: Props) {
  const onGenreClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    onSelect(genre);
  };

  return (
    <ListItem>
      <Button variant={selected === genre.id ? 'solid' : 'ghost'} w='100%' justifyContent='left' paddingY={7} onClick={onGenreClick}>
        <HStack>
          <Image src={getCroppedImageUrl(genre.image_background)} boxSize={10} borderRadius={7} objectFit='cover' />
          <Text fontSize='sm' fontWeight='700'>{genre.name}</Text>
        </HStack>
      </Button>
    </ListItem>
  );
}

export default GenreCard;
