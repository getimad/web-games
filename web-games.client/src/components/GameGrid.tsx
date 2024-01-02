import { SimpleGrid, Text, Box } from '@chakra-ui/react';
import useGames, { Platform } from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import { Genre } from '../hooks/useGenres';

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}

function GameGrid({ selectedGenre, selectedPlatform }: Props) {
  const { data, error, isLoading } = useGames(selectedGenre, selectedPlatform);

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
