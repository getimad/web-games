import { Grid, Show, GridItem } from "@chakra-ui/react";
import GameBar from "../components/GameBar";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenreList from "../components/GenreList";

function HomePage() {
  return (
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
        <GridItem area='aside' marginX='3rem'>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area='main' marginX='3rem'>
        <GameHeading />
        <GameBar />
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default HomePage;
