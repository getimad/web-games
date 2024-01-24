import { useLocation, useParams } from 'react-router-dom';
import { Grid, GridItem, Show } from '@chakra-ui/react';
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
          md: `'main right'`,
          lg: `'left main right'`,
        }}
        gridTemplateColumns={{
          base: '1fr',
          md: '1fr 300px',
          lg: '250px 1fr 300px'
        }}
        marginX='3rem'
      >
        <Show above='lg'>
          <GridItem area='left'>
            <GenreList />
          </GridItem>
        </Show>

        <GridItem area='main' marginRight={{ md: '3rem' }}>
          <GameDetail gameSlug={slug} />
        </GridItem>

        <Show above='md'>
          <GridItem area='right'>
            <GameScreeshots gameSlug={slug} />
          </GridItem>
        </Show>

        <Show below='md'>
          <GridItem >
            <GameScreeshots gameSlug={slug} mobile={true} />
          </GridItem>
        </Show>
      </Grid>
    </>
  );
}

export default GameDetailPage;
