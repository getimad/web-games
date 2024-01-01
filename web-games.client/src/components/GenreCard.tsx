import { HStack, ListItem, Image, Text } from '@chakra-ui/react';
import { Genre } from '../hooks/useGenres';
import getCroppedImageUrl from '../services/get-cropped-image-url';

interface Props {
  genre: Genre;
}

function GenreCard({ genre } : Props) {
  return (
    <ListItem paddingY={1}>
      <HStack spacing={3}>
        <Image src={getCroppedImageUrl(genre.image_background)} boxSize={10} borderRadius={7} />
        <Text fontSize='sm' fontWeight='700'>{genre.name}</Text>
      </HStack>
    </ListItem>
  );
}

export default GenreCard;
