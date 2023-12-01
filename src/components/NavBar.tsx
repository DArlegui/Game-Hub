import { HStack, Image } from '@chakra-ui/react';
import icon from '../assets/icon.png';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image
        src={icon}
        alt="GameHub"
        background="white"
        boxShadow="xl"
        rounded="2xl"
        boxSize="40px"
        cursor="pointer"
        onClick={() => {
          window.location.href = '/';
        }}></Image>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;

// style={{
//   width: '52px',
//   cursor: 'pointer',
// }}
