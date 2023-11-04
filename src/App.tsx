import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';

export default function App() {
  return (
    <Grid
      templateAreas={{
        //https://chakra-ui.com/docs/styled-system/responsive-styles
        base: `"nav" "main"`,
        lg: `"nav nav" "main aside"`, // 1024px
      }}>
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="gold">
          aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="dodgerblue">
        main
      </GridItem>
    </Grid>
  );
}
