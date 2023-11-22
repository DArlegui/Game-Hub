import { HStack, Image } from '@chakra-ui/react';
import icon from '../assets/icon.png';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack paddingY="10px">
      <Image
        src={icon}
        background="white"
        boxShadow="xl"
        rounded="2xl"
        boxSize="40px"></Image>
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
