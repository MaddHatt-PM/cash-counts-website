import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button";
import { Container, SafeArea } from "./HomePage.styles";

function HomePage() {
  const navigate = useNavigate();
  const toPrivacyPolicy = useCallback(() => navigate('/privacy-policy', { replace: true }), [navigate])

  return (
    <Container>
      <SafeArea>
        <p>This is a test</p>
        <Button text={"Privacy Policy"} callback={toPrivacyPolicy} />
      </SafeArea>
    </Container>
  );
}

export default HomePage;
