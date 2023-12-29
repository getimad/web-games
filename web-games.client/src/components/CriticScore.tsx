import { Badge } from '@chakra-ui/react';

interface Props {
  score: number;
}

function CriticScore({ score }: Props) {
  return (
    <Badge variant='solid' paddingX={2} borderRadius={5}>
      {score}
    </Badge>
  );
}

export default CriticScore;
