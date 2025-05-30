import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const Player = () => {
  const selectedSong = useSelector(state => state.songSelected.content);

  return (
    <Container fluid className="fixed-bottom bg-container pt-1">
      <Row className="h-100">
        {selectedSong && (
          <div className="d-flex align-items-center gap-3 ps-3 selectedSong">
            <img src={selectedSong.album.cover_small} alt={selectedSong.album.title} style={{ width: "50px", height: "50px", objectFit: "cover" }} />
            <div className="text-white small">
              <strong>{selectedSong.title}</strong> <br />
              {selectedSong.artist.name}
            </div>
          </div>
        )}
        <Col lg={10} className="offset-lg-2">
          <Row className="h-100 flex-column justify-content-center align-items-center">
            <Col xs={6} md={4} className="playerControls">
              <div className="d-flex">
                <a href="#">
                  <img src="./src/assets/shuffle.png" alt="shuffle" />
                </a>
                <a href="#">
                  <img src="./src/assets/prev.png" alt="prev" />
                </a>
                <a href="#">
                  <img src="./src/assets/play.png" alt="play" />
                </a>
                <a href="#">
                  <img src="./src/assets/next.png" alt="next" />
                </a>
                <a href="#">
                  <img src="./src/assets/repeat.png" alt="repeat" />
                </a>
              </div>
              <div className="progress mt-3">
                <div role="progressbar"></div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Player;
