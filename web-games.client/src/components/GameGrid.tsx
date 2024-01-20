import { useEffect, useRef } from 'react';
import { SimpleGrid, Text, Box, Spinner, HStack } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import useGameQueryStore from '../store';

interface Props {
  pageSize: number;
}

function GameGrid({ pageSize }: Props) {
  const { gameQuery } = useGameQueryStore();

  const loadMoreRef = useRef(null);
  const { data, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage, error } = useGames(gameQuery, pageSize);

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
