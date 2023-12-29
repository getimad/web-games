import { Card, CardBody, Image, Heading, HStack } from '@chakra-ui/react';
import { Game } from '../hooks/useGames';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '../services/get-cropped-image-url';

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <Card borderRadius={10} overflow='hidden'>
      <Image height={200} src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize='xl'>{game.name}</Heading>
        <HStack alignItems='center' justifyContent='space-between'>
          <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
}

export default GameCard;
