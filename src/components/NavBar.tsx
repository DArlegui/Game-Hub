import { HStack, Image } from '@chakra-ui/react';
import icon from '../assets/icon2.png';
import ColorModeSwitch from './ColorModeSwitch';

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" paddingY="10px" paddingRight={4}>
      <Image
        src={icon}
        background="white"
        boxShadow="xl"
        rounded="2xl"
        boxSize="40px"></Image>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
