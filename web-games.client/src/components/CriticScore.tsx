import { Badge } from '@chakra-ui/react';

interface Props {
  score: number;
}

function CriticScore({ score }: Props) {
  return (
    <Badge variant='solid' textAlign='center' width={10} borderRadius={5}>
      {score}
    </Badge>
  );
}

export default CriticScore;
