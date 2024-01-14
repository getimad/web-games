import { Badge } from '@chakra-ui/react';

interface Props {
  score: number;
}

function CriticScore({ score }: Props) {
  const scoreData = {
    data: score === null ? 'N/A' : score,
    color: score < 50 ? 'red' : score < 75 ? 'yellow' : 'green'
  };

  return (
    <Badge variant='solid' textAlign='center' width={10} borderRadius={5} colorScheme={scoreData.color}>
      {scoreData.data}
    </Badge>
  );
}

export default CriticScore;
