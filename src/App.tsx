import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav"" main"`,
        lg: `"nav nav""aside main"`,
      }}
    >
      <GridItem area="nav" bg="yellow">
        Nav
      </GridItem>
      <Show above ="lg">
        <GridItem area="aside" bg="rgb(254,235,200)">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="rgb(75,200,195)">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
