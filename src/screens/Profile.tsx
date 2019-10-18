import * as React from "react";
import { AppText, Container } from "../components/ui";

interface ProfileProps {}

const Profile: React.FunctionComponent<ProfileProps> = props => {
  return (
    <Container>
      <AppText>Profile Screen</AppText>
    </Container>
  );
};

export { Profile };
