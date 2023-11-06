import { HStack, Image } from '@chakra-ui/react';
import icon from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={icon} boxSize="60px"></Image>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;