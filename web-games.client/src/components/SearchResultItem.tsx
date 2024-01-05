import { Card, CardBody, CardHeader, Heading, Icon, Text } from '@chakra-ui/react';
import { RiGamepadLine } from 'react-icons/ri';

// This component need data comes from its parent

//interface Props {
//  Data of the card
//}

function SearchResultItem() {
  return (
    <Card
      borderRadius='15px'
      minH='120px'
      size='sm'
      cursor='pointer'
      _hover={{ bg: 'gray.300' }}
    >
      <CardHeader paddingBottom={0} paddingX={3}>
        <Heading display='flex' justifyContent='space-between' size='md'>
          Title Test
          <Icon as={RiGamepadLine} boxSize={6} />
        </Heading>
      </CardHeader>
      <CardBody paddingX={3} paddingTop={2}>
        <Text fontSize={13} fontWeight='600' paddingBottom={2}>
          Bla Bla Bla kljdlqjdlsjldqj ldjlkqj lkqj qsdsq ldj lkjq  lkjq ljdql jl I don' know jldqj l jl I don'  yes...
        </Text>
        <Text as='u' fontSize={11} fontWeight='700'>Read more</Text>
      </CardBody>
    </Card>
  );
}

export default SearchResultItem;
