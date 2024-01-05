import { Heading } from '@chakra-ui/react';
import GameQuery from '../interfaces/GameQuery';

interface Props {
  gameQuery: GameQuery;
}

function GameHeading({ gameQuery }: Props) {
  const content = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`;

  return (
    <Heading fontSize='6xl'>
      {content}
    </Heading>
  );
}

export default GameHeading;
