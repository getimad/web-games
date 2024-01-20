import { useEffect, useRef } from 'react';
import { SimpleGrid, Text, Box, Spinner, HStack } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';

const pageSize = 12;  // NUMBER OF GAMES PER PAGE

function GameGrid() {
  const loadMoreRef = useRef(null);
  const { data, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage, error } = useGames(pageSize);

  useEffect(() => {
    if (isLoading || isFetchingNextPage) return;

    const observe = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 1 }
    );

    const el = loadMoreRef && loadMoreRef.current;

    if (!el) return;

    observe.observe(el);

    return () => observe.unobserve(el);
  }, [isLoading, isFetchingNextPage, hasNextPage, fetchNextPage]);

  const renderGameCards = () => {
    if (isLoading) {
      return Array.from({ length: pageSize }).map((_, index) => <GameCardSkeleton key={index} />);
    }

    return data?.pages.flatMap(
      page => page.results.map(game => <GameCard key={game.id} game={game} />)
    );
  }

  return (
    <Box>
      {error && <Text>{error.message}</Text>}
      <SimpleGrid templateColumns='repeat(auto-fill, minmax(300px, 1fr))' spacing={3}>
        {renderGameCards()}
      </SimpleGrid>
      <HStack justifyContent='center' py={10}>
        <Spinner ref={loadMoreRef} size='lg' />
      </HStack>
    </Box>
  );
}

export default GameGrid;
