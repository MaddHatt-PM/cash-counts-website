import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button";
import { Container, VCentered, Group, StickyFooter, Screenshot, HCentered } from "./HomePage.styles";

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
          <Group></Group>

          <Group>
            <Screenshot src={ScreenshotImage} />
          </Group>
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
        </Group>
      </StickyFooter>
    </Container>
  );
}

export default HomePage;
