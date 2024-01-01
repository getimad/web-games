import { HStack, ListItem, Image, Text, Button } from '@chakra-ui/react';
import { Genre } from '../hooks/useGenres';
import getCroppedImageUrl from '../services/get-cropped-image-url';

interface Props {
  genre: Genre;
}

function GenreCard({ genre } : Props) {
  return (
    <ListItem>
      <Button variant='ghost' w='100%' justifyContent='left' paddingY={7} onClick={() => console.log(genre)}>
        <HStack>
          <Image src={getCroppedImageUrl(genre.image_background)} boxSize={10} borderRadius={7} />
          <Text fontSize='sm' fontWeight='700'>{genre.name}</Text>
        </HStack>
      </Button>
    </ListItem>
  );
}

export default GenreCard;
