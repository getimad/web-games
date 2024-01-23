import useScreeshots from "../hooks/useScreenshots";
import { Image } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/get-cropped-image-url";

interface Props {
  gameId: number;
}

function GameScreeshots({ gameId }: Props) {
  const { data, error, isLoading } = useScreeshots(gameId);
  return (
    <>
      {data?.results.map(i => <Image key={i.id} src={getCroppedImageUrl(i.image)} />)}
    </>
  );
}

export default GameScreeshots;
