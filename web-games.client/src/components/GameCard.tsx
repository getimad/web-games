import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardBody, Image, Heading, HStack } from '@chakra-ui/react';
import Game from '../interfaces/Game';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '../services/get-cropped-image-url';
import nullBackgroundImage from '../assets/null-image-white.svg';

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();

  const onHandleClick = () => {
    navigate(`/games/${game.slug}`, { state: { imageUri: game.background_image } });
  };

  return (
    <Card
      variant='filled'
      borderRadius={10}
      overflow='hidden'
      boxShadow='lg'
      onClick={onHandleClick}
      style={{
        transition: 'transform 0.2s ease-in-out',
        transform: hover ? 'scale(1.03)' : 'scale(1)'
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
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
