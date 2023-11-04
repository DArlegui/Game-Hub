import { HStack, Image, Text } from '@chakra-ui/react';
import icon from '../assets/icon1.png';

const NavBar = () => {
  return (
    <HStack>
      <Image src={icon} boxSize="60px" p="10px"></Image>
      <Text>Navbar</Text>
    </HStack>
  );
};

export default NavBar;
