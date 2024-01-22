import { Grid, Show, GridItem } from "@chakra-ui/react";
import GameBar from "../components/GameBar";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenreList from "../components/GenreList";
import ScrollToTopButton from "../components/ScrollToTopButton";

function HomePage() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `'main'`,
          lg: `'aside main'`
        }}
        gridTemplateColumns={{
          base: '1fr',
          lg: '250px 1fr'
        }}
      >
        <Show above='lg'>
          <GridItem area='aside' margin={[null, null, null, '0 0 0 20px']}>
            <GenreList />
          </GridItem>
        </Show>
        <GridItem area='main' margin={['0 20px 0 20px', null, null, '0 20px 0 20px']}>
          <GameHeading />
          <GameBar />
          <GameGrid />
        </GridItem>
      </Grid>
      <ScrollToTopButton />
    </>
  );
}

export default HomePage;