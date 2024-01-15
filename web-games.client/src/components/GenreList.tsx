import { Box, List, Text } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import GenreCard from './GenreCard';
import GenreCardSkeleton from './GenreCardSkeleton';
import Genre from '../interfaces/Genre';

interface Props {
  selectedGenre: Genre | null;
  onSelectGenre: (genre: Genre) => void;
}

function GenreList({ selectedGenre, onSelectGenre }: Props) {
  const { data, error, isLoading } = useGenres();

  return (
    <>
      {error && <Text>{error.message}</Text>}

      <Box position='fixed' h='90vh'>
        <Box backgroundColor='Gray.50' w='100%' h='60px' zIndex='300'>
          <Text fontSize='3xl' fontWeight={700}>Genres</Text>
        </Box>
        <Box position='absolute' w='100%' h='0.5rem' zIndex='300' backdropFilter='saturate(180%) blur(5px)'></Box>
        <Box position='absolute' w='100%' h='0.5rem' zIndex='300' backdropFilter='saturate(180%) blur(5px)' bottom='1'></Box>
        <List overflowY='scroll' h='calc(100vh - 8rem)' paddingBottom='1rem' paddingTop='0.5rem' css={{
          '&::-webkit-scrollbar': {
            display: 'none',
          }
        }}>
          {isLoading
            ? Array.from({ length: 15 }).map((_, index) => <GenreCardSkeleton key={index} />)
            : data?.results.map(genre => <GenreCard genre={genre} key={genre.id} selected={selectedGenre} onSelect={(genre) => onSelectGenre(genre)} />)}
        </List>
      </Box >

    </>
  );
}

export default GenreList;
