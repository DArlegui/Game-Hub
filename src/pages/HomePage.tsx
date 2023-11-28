import { Box, Flex, Grid, GridItem, Show } from '@chakra-ui/react';
import GameGrid from '../components/GameGrid';
import GameHeading from '../components/GameHeading';
import GenreList from '../components/GenreList';
import PlatFormSelector from '../components/PlatFormSelector';
import SortSelector from '../components/SortSelector';

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`, // 1024px
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr',
      }}>
      <Show above="lg">
        <GridItem area="aside" paddingX="10px">
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingX="10px">
          <GameHeading />
          <Flex marginBottom={2}>
            <Box marginRight={5}>
              <PlatFormSelector />
            </Box>
            <SortSelector />
          </Flex>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
