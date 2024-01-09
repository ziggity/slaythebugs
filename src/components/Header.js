import { Container } from "reactstrap";
import Logo from "/Users/eva/Desktop/my-game/src/assets/images/logo.jpeg";

const Header = () => {
  return (
    <Container>
      <img src={Logo} alt="logo" className="float-start" />
      <h1 className="mt-1">Slay the hacker</h1>
    </Container>
  );
};

export default Header;
