import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button";
import { Container, VCentered, Group, StickyFooter, Screenshot, HCentered, P, A } from "./HomePage.styles";
import InfoBox from "../../Components/InfoBox/InfoBox"

import ParallaxBackground from "../ParallaxBackground/ParallaxBackground";
import ScreenshotImage from "../../Assets/Screenshot01_Dark_iPhone13ProMax.png"

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
            <Screenshot src={ScreenshotImage} />
          </Group>
          <div />
        </HCentered>
      </VCentered>

      <StickyFooter style={{ zIndex: 10 }}>
        <Group>
          <Button text={"Privacy Policy"} callback={toPrivacyPolicy} />
          <Button text={"Terms of Service"} callback={toTermsOfService} />
        </Group>

        <Group>
        </Group>

        <Group>
          <P>Photo by <A href="https://unsplash.com/@pawel_czerwinski?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Pawel Czerwinski</A> on <A href="https://unsplash.com/backgrounds/art/abstract?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</A>
          </P>
        </Group>
      </StickyFooter>
    </Container>
  );
}

export default HomePage;
