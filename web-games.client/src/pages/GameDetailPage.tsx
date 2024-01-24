import { useLocation, useParams } from 'react-router-dom';
import { Grid, GridItem } from '@chakra-ui/react';
import GameScreeshots from '../components/GameScreenshots';
import GenreList from '../components/GenreList';
import GameBackground from '../components/GameBackground';
import GameDetail from '../components/GameDetail';

function GameDetailPage() {
  const { slug } = useParams();
  const location = useLocation();

  return (
    <>
      <GameBackground uri={location.state.imageUri} />  {/* Get background image from HomePage */}
      <Grid
        templateAreas={{
          base: `'main'`,
          lg: `'left main right'`
        }}
        gridTemplateColumns={{
          base: '1fr',
          lg: '250px 1fr 500px'
        }}
      >
        <GridItem area='left' marginX='3rem'>
          <GenreList />
        </GridItem>
        <GridItem area='main' marginX='3rem'>
          <GameDetail gameSlug={slug} />
        </GridItem>
        <GridItem area='right' marginX='3rem'>
          <GameScreeshots gameSlug={slug} />
        </GridItem>
      </Grid>
    </>

  );
}

export default GameDetailPage;
