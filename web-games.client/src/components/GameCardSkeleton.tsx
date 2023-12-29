import { Image, Card, CardBody, HStack, Skeleton, SkeletonCircle } from '@chakra-ui/react';

function GameCardSkeleton() {
  return (
    <Card borderRadius={10} overflow='hidden'>
      <Skeleton>
        <Image height={200} width='600px' />
      </Skeleton>
      <CardBody>
        <Skeleton height={7} />
        <HStack alignItems='center' justifyContent='space-between'>
          <HStack spacing={2} paddingY={2}>
            {Array.from({ length: 3 }).map((_, index) => <SkeletonCircle height={5} width={5} key={index} />)}
          </HStack>
          <Skeleton height={5} width={10} borderRadius={5} />
        </HStack>
      </CardBody>
    </Card>
  );
}

export default GameCardSkeleton;
