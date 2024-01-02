import { useState } from 'react';
import { Grid, GridItem, Show, Text } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import GameBar from './components/GameBar';
import { Genre } from './hooks/useGenres';
import { Platform } from './hooks/usePlatforms';
import Order from './interfaces/Order';

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

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
          <GenreList selectedGenre={selectedGenre} onSelectGenre={(genre) => setSelectedGenre(genre)} />
        </GridItem>
      </Show>
      <GridItem area='main'>
        <Text fontSize='6xl' fontWeight={700}>Games</Text>
        <GameBar selectedPlatform={selectedPlatform} onSelectPlatform={(platform) => setSelectedPlatform(platform)} selectedOrder={selectedOrder} onSelectOrder={order => setSelectedOrder(order)} />
        <GameGrid selectedGenre={selectedGenre} selectedPlatform={selectedPlatform} selectedOrder={selectedOrder} />
      </GridItem>
    </Grid>
  );
}

export default App;
