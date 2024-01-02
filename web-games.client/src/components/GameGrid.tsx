import { SimpleGrid, Text, Box, HStack } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import { Genre } from '../hooks/useGenres';
import PlatformSelector from './PlatformSelector';

interface Props {
  selectedGenre: Genre | null;
}

function GameGrid({ selectedGenre }: Props) {
  const { data, error, isLoading } = useGames(selectedGenre);

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
