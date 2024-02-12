import { Grid } from "@chakra-ui/react";

import Features from "./components/Features";
import Features2 from "./components/Features2";

const FeaturePage = () => {
  return (
    <Grid gap={4}>
        <Grid gap={4}>
      <Features />
    </Grid>
      <Grid gap={4}>
      <Features2 />
    </Grid>
    </Grid>
  );
};

export default FeaturePage;
