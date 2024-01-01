import { Box, List, Text } from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import GenreCard from './GenreCard';
import GenreCardSkeleton from './GenreCardSkeleton';

interface Props {
  selectedGenre: Genre | null;
  onSelectGenre: (genre: Genre) => void;
}

function GenreList({ selectedGenre, onSelectGenre }: Props) {
  const { data, error, isLoading } = useGenres();

  return (
    <Box>
      {error && <Text>{error}</Text>}
      <Text fontSize='3xl' fontWeight={700} paddingBottom={3}>Genres</Text>
      <List>
        {isLoading && Array.from({ length: 15 }).map((_, index) => <GenreCardSkeleton key={index} />)}
        {data.map(genre => <GenreCard genre={genre} key={genre.id} selected={selectedGenre} onSelect={(genre) => onSelectGenre(genre)} />)}
      </List>
    </Box>
  );
}

export default GenreList;
