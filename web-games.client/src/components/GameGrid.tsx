import { SimpleGrid, Text, Box } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameQuery from '../interfaces/GameQuery';

interface Props {
  gameQuery: GameQuery;
  pageSize: number;
}

function GameGrid({ gameQuery, pageSize }: Props) {
  const { data, error, isLoading } = useGames(gameQuery, pageSize);

  const renderGameCards = () => {
    if (isLoading) {
      return Array.from({ length: pageSize }).map((_, index) => <GameCardSkeleton key={index} />);
    }

    return data?.results.map(game => <GameCard key={game.id} game={game} />);
  }

  return (
    <Box>
      {error && <Text>{error.message}</Text>}
      <SimpleGrid templateColumns='repeat(auto-fill, minmax(300px, 1fr))' spacing={3}>
        {renderGameCards()}
      </SimpleGrid>
    </Box>
  );
}

export default GameGrid;
