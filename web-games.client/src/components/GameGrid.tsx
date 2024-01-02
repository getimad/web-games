import { SimpleGrid, Text, Box } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import { Genre } from '../hooks/useGenres';
import Order from '../interfaces/Order';
import { Platform } from '../hooks/usePlatforms';

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
  selectedOrder: Order | null;
}

function GameGrid({ selectedGenre, selectedPlatform, selectedOrder }: Props) {
  const { data, error, isLoading } = useGames(selectedGenre, selectedPlatform, selectedOrder);

  return (
    <Box>
      {error && <Text>{error}</Text>}
      <SimpleGrid templateColumns='repeat(auto-fill, minmax(300px, 1fr))' spacing={3}>
        {isLoading
          ? Array.from({ length: 15 }).map((_, index) => <GameCardSkeleton key={index} />)
          : data.map(game => <GameCard key={game.id} game={game} />)}
      </SimpleGrid>
    </Box>
  );
}

export default GameGrid;
