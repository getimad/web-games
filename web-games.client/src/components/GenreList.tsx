import { Box, List, Text } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import GenreCard from './GenreCard';

function GenreList() {
  const { data, error, isLoading } = useGenres();

  return (
    <Box>
      {error && <Text>{error}</Text>}
      <Text fontSize='3xl' fontWeight={700} paddingBottom={3}>Genres</Text>
      <List>
        {!isLoading || <Text>Is Loaddin...</Text>}
        {data.map(genre => <GenreCard genre={genre} key={genre.id} />)}
      </List>
    </Box>
  );
}

export default GenreList;
