import * as React from "react";
import { AppText, Container } from "../components/ui";

interface NewProps {}

const New: React.FunctionComponent<NewProps> = props => {
  return (
    <Container>
      <AppText>New Screen</AppText>
    </Container>
  );
};

export { New };
