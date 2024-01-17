import { Heading } from '@chakra-ui/react';
import GameQuery from '../interfaces/GameQuery';
import useGenres from '../hooks/useGenres';

interface Props {
  gameQuery: GameQuery;
}

function GameHeading({ gameQuery }: Props) {
  const { data } = useGenres();
  const genre = data?.results.find(genre => genre.id === gameQuery.genreId);

  const content = `${gameQuery.platform?.name || ''} ${genre?.name || ''} Games`;

  return (
    <Heading fontSize={['5xl', '6xl']}>
      {content}
    </Heading>
  );
}

export default GameHeading;
