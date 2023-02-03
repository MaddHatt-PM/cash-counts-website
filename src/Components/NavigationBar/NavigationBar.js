import React from "react";
import { Container, Content, Group, Spacer, Title } from "./NavigationBar.styles";

function NavigationBar({ height = "4em" }) {

  return (
    <>
      <Spacer height={height} />

      <Container height={height}>
        <Content>
          <Group>
            <Title>
              Cash Counts
            </Title>
          </Group>

          <Group>
            {/* Middle Group */}
          </Group>

          <Group>
            {/* Right Group */}
          </Group>
        </Content>
      </Container>
    </>
  );
};

export default NavigationBar;