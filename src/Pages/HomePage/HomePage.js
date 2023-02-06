import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { Container, VCentered, Group, Footer, HCentered, P, A } from "./HomePage.styles";
import Button from "../../Components/Button/Button";
import InfoBox from "../../Components/InfoBox/InfoBox"

import ParallaxBackground from "../ParallaxBackground/ParallaxBackground";
import AppPreview from "../../Components/AppPreview/AppPreview";

function HomePage() {
  const navigate = useNavigate();
  const toPrivacyPolicy = useCallback(() => navigate('/privacy-policy', { replace: false }), [navigate])
  const toTermsOfService = useCallback(() => navigate('/terms-of-service', { replace: false }), [navigate])

  return (
    <Container>
      <VCentered style={{ zIndex: 1 }} >
        <ParallaxBackground />
      </VCentered>

      <VCentered style={{ zIndex: 2 }}>
        <HCentered>
          <div />
          <Group>
            <InfoBox />
            {/* <Screenshot src={ScreenshotImage} /> */}
            <AppPreview />
          </Group>
          <div />
        </HCentered>
      </VCentered>

      <Footer style={{ zIndex: 10 }}>
        <Group>
          <P style={{ marginRight: "2em" }}>Copyright © 2023 MaddHatt LLC</P>
          <Button text={"Privacy Policy"} callback={toPrivacyPolicy} />
          <Button text={"Terms of Service"} callback={toTermsOfService} />
        </Group>

        <Group>
        </Group>

        <Group>
          <P>Photo by <A href="https://unsplash.com/@pawel_czerwinski?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Pawel Czerwinski</A> on <A href="https://unsplash.com/backgrounds/art/abstract?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</A>
          </P>
        </Group>
      </Footer>
    </Container>
  );
}

export default HomePage;
