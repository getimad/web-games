import { Box, List, Text } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import GenreCard from './GenreCard';
import GenreCardSkeleton from './GenreCardSkeleton';

function GenreList() {
  const { data, error, isLoading } = useGenres();

  if (error) {
    return <Text>{error.message}</Text>;
  }

  const renderGenreCards = () => {
    if (isLoading) {
      return Array.from({ length: 15 }).map((_, index) => <GenreCardSkeleton key={index} />);
    }

    return data?.results.map(genre => <GenreCard genre={genre} key={genre.id} />);
  }

  return (
    <Box position='fixed' h='90vh'>
      <Box backgroundColor='Gray.50' w='100%' h='60px' zIndex='300'>
        <Text fontSize='3xl' fontWeight={700}>Genres</Text>
      </Box>
      <Box position='absolute' w='100%' h='1rem' zIndex='300' backdropFilter='saturate(180%) blur(5px)' bottom='0' />
      <List overflowY='scroll' h='calc(100vh - 8rem)' paddingBottom='1rem' css={{
        '&::-webkit-scrollbar': {
          display: 'none',
        }
      }}>
        {renderGenreCards()}
      </List>
    </Box >
  );
}

export default GenreList;
