import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button";
import ParallaxBackground from "../ParallaxBackground/ParallaxBackground";
import { Container, Group, StickyFooter } from "./HomePage.styles";

function HomePage() {
  const navigate = useNavigate();
  const toPrivacyPolicy = useCallback(() => navigate('/privacy-policy', { replace: false }), [navigate])
  const toTermsOfService = useCallback(() => navigate('/terms-of-service', { replace: false }), [navigate])

  return (
    <Container>

      <ParallaxBackground />

      <StickyFooter>
        <Group>
        </Group>

        <Group>
          <Button text={"Privacy Policy"} callback={toPrivacyPolicy} />
          <Button text={"Terms of Service"} callback={toTermsOfService} />
        </Group>

        <Group></Group>
      </StickyFooter>
    </Container>
  );
}

export default HomePage;
