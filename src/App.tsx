import { Grid, GridItem, Show } from "@chakra-ui/react";
import Nav from "./components/navbar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav"" main"`,
        lg: `"nav nav""aside main"`,
      }}
    >
      <GridItem area="nav" >
        <Nav></Nav>
        
      </GridItem>
      <Show above ="lg">
        <GridItem area="aside" >
          Aside
        </GridItem>
      </Show>
      <GridItem area="main">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
