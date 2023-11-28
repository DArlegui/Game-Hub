import { Box, Flex, Grid, GridItem, Show } from '@chakra-ui/react';
import GameGrid from './components/GameGrid';
import GameHeading from './components/GameHeading';
import GenreList from './components/GenreList';
import NavBar from './components/NavBar';
import PlatFormSelector from './components/PlatFormSelector';
import SortSelector from './components/SortSelector';

// undefined: the absence of a value
// null: the intentional absence of a value

export default function App() {
  return (
    <Grid
      templateAreas={{
        //https://chakra-ui.com/docs/styled-system/responsive-styles
        base: `"nav" "main"`,
        // justifyingItems: 'center', // 0px
        lg: `"nav nav" "aside main"`, // 1024px
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr',
      }}>
      <GridItem area="nav">
        <NavBar />
      </GridItem>
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
}
