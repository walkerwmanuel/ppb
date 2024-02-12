import { Grid } from "@chakra-ui/react";

import Hero from "./components/Hero";
import OurGoal from "../../layout/OurGoal"
import Testimonal from "./components/testimonal"

const Home = () => {
  return (
    <Grid gap={4}>
      <Hero />
      <OurGoal />
      <Testimonal />
    </Grid>
  );
};

export default Home;
