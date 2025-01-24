import { StyleHeader,Nav, Logo } from "./styles/Header.Styled";
import { Container } from "./styles/Container.styled";
import { Button } from "./styles/Button.styled";

const Header = () => {
  return (
    <StyleHeader bg="red">
      <Container>
       
        <Nav>

          <Logo src='./images/logo.svg' />
          <Button>Try it for free</Button>
        </Nav>
      </Container>
    </StyleHeader>
  );
};

export default Header;
