import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';

function GameGrid() {
  const { games, error, isLoading } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 2, lg: 3 }} spacing={3} padding={3}>
        {!isLoading || Array.from({length: 6 }).map((_, index) => <GameCardSkeleton key={index} />)}
        {games.map(game => <GameCard key={game.id} game={game} />)}*
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
