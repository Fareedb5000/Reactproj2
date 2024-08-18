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
