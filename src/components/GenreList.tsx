import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  textDecoration,
} from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';
import useGameQueryStore from '../store';

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);

  // // Uncomment if we change our mind capturing data from server
  // if (error) return <Text>Something went wrong</Text>;
  // if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={1.5}>
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                style={{ textDecoration: 'none' }}
                whiteSpace="normal"
                fontWeight={selectedGenreId === genre.id ? 'bold' : 'normal'}
                onClick={() => setSelectedGenreId(genre.id)}
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
