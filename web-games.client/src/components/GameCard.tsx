import { Card, CardBody, Image, Heading, HStack } from '@chakra-ui/react';
import { Game } from '../hooks/useGames';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '../services/get-cropped-image-url';
import nullBackgroundImage from '../assets/null-image-white.svg';

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <Card variant='filled' borderRadius={10} overflow='hidden'>
      <Image minHeight={200} src={game.background_image === null ? nullBackgroundImage : getCroppedImageUrl(game.background_image)} />
      <CardBody paddingY={2}>
        <HStack alignItems='center' justifyContent='space-between'>
          <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize='lg' paddingTop={1}>{game.name}</Heading>
      </CardBody>
    </Card>
  );
}

export default GameCard;
