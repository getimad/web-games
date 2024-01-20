import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import GameBar from './components/GameBar';
import GameHeading from './components/GameHeading';
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
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
            <GenreList />
          </GridItem>
        </Show>
        <GridItem area='main' margin={['50px 20px 0 20px', null, null, '50px 20px 0 0']}>
          <GameHeading />
          <GameBar />
          <GameGrid />
        </GridItem>
      </Grid>
      <ScrollToTopButton />
    </>
  );
}

export default App;
