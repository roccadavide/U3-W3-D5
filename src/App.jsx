import { Container, Row } from "react-bootstrap";
import "./App.css";
import SideBar from "./components/SideBar";
import MainSection from "./components/MainSection";
import Player from "./components/Player";

function App() {
  return (
    <>
      <Container fluid>
        <Row>
          <SideBar />
          <MainSection />
        </Row>
      </Container>
      <Player />
    </>
  );
}

export default App;
