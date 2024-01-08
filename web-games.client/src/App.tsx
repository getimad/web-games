import { useState } from 'react';
import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import GameBar from './components/GameBar';
import GameQuery from './interfaces/GameQuery';
import GameHeading from './components/GameHeading';

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
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
        <GridItem area='aside' margin={[null, null, null, '80px 0 0 20px']}>
          <GenreList selectedGenre={gameQuery.genre} onSelectGenre={genre => setGameQuery({ ...gameQuery, genre })} />
        </GridItem>
      </Show>
      <GridItem area='main' margin={['80px 20px 0 20px', null, null, '80px 20px 0 0']}>
        <GameHeading gameQuery={gameQuery} />
        <GameBar selectedPlatform={gameQuery.platform} onSelectPlatform={platform => setGameQuery({ ...gameQuery, platform })} selectedOrder={gameQuery.order} onSelectOrder={order => setGameQuery({ ...gameQuery, order })} />
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
