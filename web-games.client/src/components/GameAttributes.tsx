import { SimpleGrid, Text } from "@chakra-ui/react";
import CriticScore from "./CriticScore";
import DefinitionItemItem from "./DefinitionItem";
import Game from "../interfaces/Game";

interface Props {
  game: Game;
}

function GameAttributes({ game }: Props) {
  return (
    <SimpleGrid columns={2}>
      <DefinitionItemItem term='Platforms'>
        {game.parent_platforms.map(({ platform }) => <Text key={platform.id}>{platform.name}</Text>)}
      </DefinitionItemItem>

      <DefinitionItemItem term='Metascore'>
        <CriticScore score={game.metacritic} />
      </DefinitionItemItem>

      <DefinitionItemItem term='Genre'>
        {game.genres.map(g => <Text key={g.id}>{g.name}</Text>)}
      </DefinitionItemItem>

      <DefinitionItemItem term='Release date'>
        {game.released}
      </DefinitionItemItem>

      <DefinitionItemItem term='Website' style={{ gridColumn: 'span 2' }}>
        {game.website}
      </DefinitionItemItem>
    </SimpleGrid>
  );
}

export default GameAttributes;
