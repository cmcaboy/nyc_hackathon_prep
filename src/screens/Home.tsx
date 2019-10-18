import * as React from "react";
import { AppText, Container } from "../components/ui";

interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = props => {
  return (
    <Container>
      <AppText>Home Screen</AppText>
    </Container>
  );
};

export { Home };
