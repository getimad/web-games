import { ArrowUpIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

function ScrollToTopButton() {
  const [isAtTop, setIsAtTop] = useState(true);

  const onHandleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Button
      position='fixed'
      bottom={5}
      right={5}
      borderRadius='100px'
      h='3rem'
      w='3rem'
      opacity='.7'
      onClick={onHandleScrollToTop}
      hidden={isAtTop}
    >
      <ArrowUpIcon boxSize={5} />
    </Button>
  );
}

export default ScrollToTopButton;
