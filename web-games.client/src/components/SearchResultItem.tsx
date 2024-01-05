import { Card, CardBody, CardHeader, Heading, Icon, Text } from '@chakra-ui/react';
import { RiGamepadLine } from 'react-icons/ri';
import { Game } from '../hooks/useGames';

interface Props {
  game: Game;
}

function SearchResultItem({ game }: Props) {
  return (
    <Card
      borderRadius='15px'
      minH='120px'
      size='sm'
      cursor='pointer'
      _hover={{ bg: 'gray.300' }}
    >
      <CardHeader paddingBottom={0} paddingX={3}>
        <Heading display='flex' justifyContent='space-between' size='md' h='50px'>
          {game.name}
          <Icon as={RiGamepadLine} boxSize={6} />
        </Heading>
      </CardHeader>
      <CardBody>

        {/* API: Get game info by ID when hover */}

        <Text as='u' fontSize={11} fontWeight='700' position='absolute' bottom='12px'>Read more</Text>
      </CardBody>
    </Card>
  );
}

export default SearchResultItem;
