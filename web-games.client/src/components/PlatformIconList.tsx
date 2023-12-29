import { HStack, Icon } from '@chakra-ui/react';
import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { IconType } from 'react-icons';
import { BsGlobe } from 'react-icons/bs';
import { Platform } from '../hooks/useGames';

interface Props {
  platforms: Platform[];
}

function PlatformIconList({ platforms }: Props) {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe
  };

  return (
    <HStack spacing={2} paddingY={2}>
      {platforms.map(platform => <Icon as={iconMap[platform.slug]} key={platform.slug} />)}
    </HStack>
  );
}

export default PlatformIconList;
