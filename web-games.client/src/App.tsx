import { useState } from 'react';
import { Grid, GridItem, Show, Text } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import GameBar from './components/GameBar';
import GameQuery from './interfaces/GameQuery';
import SearchContainer from './components/SearchContainer';

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
      marginX={5}
      gap={5}
    >
      <GridItem area='nav'>
        <NavBar />
      </GridItem>
      <Show above='lg'>
        <GridItem area='aside'>
          <GenreList selectedGenre={gameQuery.genre} onSelectGenre={genre => setGameQuery({ ...gameQuery, genre })} />
        </GridItem>
      </Show>
      <GridItem area='main'>
        <Text fontSize='6xl' fontWeight={700}>Games</Text>
        <GameBar selectedPlatform={gameQuery.platform} onSelectPlatform={platform => setGameQuery({ ...gameQuery, platform })} selectedOrder={gameQuery.order} onSelectOrder={order => setGameQuery({ ...gameQuery, order })} />
        <GameGrid gameQuery={gameQuery} />
        <SearchContainer />
      </GridItem>
    </Grid>
  );
}

export default App;
