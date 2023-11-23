import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  //Uncomment if we change our mind capturing data from server
  // if (error) return <Text>Something went wrong</Text>;
  // if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={1.5}>
        Genres
      </Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                whiteSpace="normal"
                fontWeight={selectedGenre?.id === genre.id ? 'bold' : 'normal'}
                onClick={() => onSelectGenre(genre)}
                fontSize="lg"
                variant="link">
                {genre.name === 'Massively Multiplayer' ? 'MMO' : genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
