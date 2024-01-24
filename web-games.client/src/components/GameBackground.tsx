import { Image } from '@chakra-ui/react';
import getCroppedImageUrl from '../services/get-cropped-image-url';

interface Props {
  uri: string;
}

function GameBackground({ uri }: Props) {
  return (
    <Image
      src={getCroppedImageUrl(uri)}
      w='100vw'
      top='0'
      zIndex='-1'
      position='fixed'
      opacity='0.2'
      style={{ filter: 'blur(10px)' }}
    />
  );
}

export default GameBackground;
