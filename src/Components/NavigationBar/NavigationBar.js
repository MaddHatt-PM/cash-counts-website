import React from "react";
import { Container, Group } from "./NavigationBar.styles";

function NavigationBar() {

  return (
    <>
      <Container>
        <Group>
          Left Group
        </Group>

        <Group>
          {/* Middle Group */}
        </Group>

        <Group>
          Right Group
        </Group>
      </Container>
    </>
  );
};

export default NavigationBar;