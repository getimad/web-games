import { Heading } from '@chakra-ui/react';
import GameQuery from '../interfaces/GameQuery';
import useGenres from '../hooks/useGenres';
import usePlatforms from '../hooks/usePlatforms';

interface Props {
  gameQuery: GameQuery;
}

function GameHeading({ gameQuery }: Props) {
  const { data: genreData } = useGenres();
  const genre = genreData?.results.find(genre => genre.id === gameQuery.genreId);

  const { data: platformData } = usePlatforms();
  const platform = platformData?.results.find(platform => platform.id === gameQuery.platformId);

  const content = `${platform?.name || ''} ${genre?.name || ''} Games`;

  return (
    <Heading fontSize={['5xl', '6xl']}>
      {content}
    </Heading>
  );
}

export default GameHeading;
