import { useState } from 'react';
import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import GameBar from './components/GameBar';
import GameQuery from './interfaces/GameQuery';
import GameHeading from './components/GameHeading';
import ScrollToTopButton from './components/ScrollToTopButton';

const NUMBER_OF_GAMES_PER_PAGE = 12;

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <>
      <Grid
        templateAreas={{
          base: `'nav' 'main'`,
          lg: `'nav nav' 'aside main'`
        }}
        gridTemplateColumns={{
          base: '1fr',
          lg: '250px 1fr'
        }}
        gap={5}
      >
        <GridItem area='nav' position='fixed' w='100%' zIndex='200'>
          <NavBar />
        </GridItem>
        <Show above='lg'>
          <GridItem area='aside' margin={[null, null, null, '50px 0 0 20px']}>
            <GenreList selectedGenreId={gameQuery.genreId} onSelectGenre={genreId => setGameQuery({ ...gameQuery, genreId: genreId })} />
          </GridItem>
        </Show>
        <GridItem area='main' margin={['50px 20px 0 20px', null, null, '50px 20px 0 0']}>
          <GameHeading gameQuery={gameQuery} />
          <GameBar selectedPlatform={gameQuery.platform} onSelectPlatform={platform => setGameQuery({ ...gameQuery, platform })} selectedOrder={gameQuery.order} onSelectOrder={order => setGameQuery({ ...gameQuery, order })} />
          <GameGrid gameQuery={gameQuery} pageSize={NUMBER_OF_GAMES_PER_PAGE} />
        </GridItem>
      </Grid>
      <ScrollToTopButton />
    </>
  );
}

export default App;
