import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';

export default function App() {
  return (
    <Grid
      templateAreas={{
        //https://chakra-ui.com/docs/styled-system/responsive-styles
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, // 1024px
      }}>
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">Aside</GridItem>
      </Show>
      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}
