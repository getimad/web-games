import { HStack, ListItem, Image, Skeleton } from '@chakra-ui/react';

function GenreCardSkeleton() {
  return (
    <ListItem paddingY={1}>
      <HStack spacing={3}>
        <Skeleton borderRadius={7}>
          <Image boxSize={10} />
        </Skeleton>
        <Skeleton height={5} width={100}  />
      </HStack>
    </ListItem>
  );
}

export default GenreCardSkeleton;
