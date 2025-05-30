import { useEffect } from "react";
import { Spinner, Alert, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToFavoritesAction, fillMusicSection, removeFromFavoritesAction, selectSongAction } from "../redux/action";
import { BsHeart, BsHeartFill } from "react-icons/bs";

const MainSection = () => {
  const dispatch = useDispatch();
  const rock = useSelector(state => state.songs?.content?.rock || []);
  const pop = useSelector(state => state.songs?.content?.pop || []);
  const hiphop = useSelector(state => state.songs?.content?.hiphop || []);
  const isLoading = useSelector(state => state.songs?.isLoading);
  const hasError = useSelector(state => state.songs?.hasError);
  const errorMessage = useSelector(state => state.songs?.errorMessage);
  const favorites = useSelector(state => state.favorites?.content);

  useEffect(() => {
    dispatch(fillMusicSection("https://striveschool-api.herokuapp.com/api/deezer/search?q=", "queen", "rock"));
    dispatch(fillMusicSection("https://striveschool-api.herokuapp.com/api/deezer/search?q=", "katyperry", "pop"));
    dispatch(fillMusicSection("https://striveschool-api.herokuapp.com/api/deezer/search?q=", "eminem", "hiphop"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Col xs={12} md={9} className="offset-md-3 mainPage">
      <Container fluid>
        <Row>
          <Col xs={9} lg={11} className="mainLinks d-none d-md-flex">
            <a href="#">TRENDING</a>
            <a href="#">PODCAST</a>
            <a href="#">MOODS AND GENRES</a>
            <a href="#">NEW RELEASES</a>
            <a href="#">DISCOVER</a>
          </Col>
        </Row>
        <Row>
          <Col xs={10}>
            <div id="rock">
              <h2>Rock</h2>
              <Row xs={1} sm={2} lg={3} xl={4} className="imgLinks py-3" id={"rockSection"}>
                {hasError ? (
                  <Alert variant="danger">{errorMessage || "Errore nel caricamento dei brani"}</Alert>
                ) : isLoading ? (
                  <div className="d-flex justify-content-center w-100 py-5">
                    <Spinner animation="border" variant="primary" />
                  </div>
                ) : rock && rock.length > 0 ? (
                  rock.slice(0, 4).map(track => {
                    const isFavorite = favorites?.length && favorites.find(fav => fav.id === track.id);
                    return (
                      <Col key={track.id} className="text-center mb-4" style={{ cursor: "pointer" }} onClick={() => dispatch(selectSongAction(track))}>
                        <div className="imageWrapper position-relative d-inline-block">
                          <img src={track.album.cover_medium} alt={track.title} className="img-fluid rounded" />
                          <div className="heartContainer d-flex align-items-center justify-content-center">
                            <BsHeart
                              size={16}
                              style={{ color: isFavorite ? "red" : "white", cursor: "pointer" }}
                              onClick={e => {
                                e.preventDefault();
                                if (isFavorite) {
                                  dispatch(removeFromFavoritesAction(track));
                                } else {
                                  dispatch(addToFavoritesAction(track));
                                }
                              }}
                            />
                          </div>
                        </div>
                        <p className="mt-2">
                          <strong>Track:</strong> {track.title} <br />
                          <strong>Artist:</strong> {track.artist.name}
                        </p>
                      </Col>
                    );
                  })
                ) : (
                  <Alert variant="warning">Nessun brano trovato.</Alert>
                )}
              </Row>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={10}>
            <div id="pop">
              <h2>Pop</h2>
              <Row xs={1} sm={2} lg={3} xl={4} className="imgLinks py-3" id={"popSection"}>
                {hasError ? (
                  <Alert variant="danger">{errorMessage || "Errore nel caricamento dei brani"}</Alert>
                ) : isLoading ? (
                  <div className="d-flex justify-content-center w-100 py-5">
                    <Spinner animation="border" variant="primary" />
                  </div>
                ) : pop && pop.length > 0 ? (
                  pop.slice(0, 4).map(track => {
                    const isFavorite = favorites?.length && favorites.find(fav => fav.id === track.id);
                    return (
                      <Col key={track.id} className="text-center mb-4" style={{ cursor: "pointer" }} onClick={() => dispatch(selectSongAction(track))}>
                        <div className="imageWrapper position-relative d-inline-block">
                          <img src={track.album.cover_medium} alt={track.title} className="img-fluid rounded" />
                          <div className="heartContainer d-flex align-items-center justify-content-center">
                            <BsHeart
                              size={16}
                              style={{ color: isFavorite ? "red" : "white", cursor: "pointer" }}
                              onClick={e => {
                                e.preventDefault();
                                if (isFavorite) {
                                  dispatch(removeFromFavoritesAction(track));
                                } else {
                                  dispatch(addToFavoritesAction(track));
                                }
                              }}
                            />
                          </div>
                        </div>
                        <p className="mt-2">
                          <strong>Track:</strong> {track.title} <br />
                          <strong>Artist:</strong> {track.artist.name}
                        </p>
                      </Col>
                    );
                  })
                ) : (
                  <Alert variant="warning">Nessun brano trovato.</Alert>
                )}
              </Row>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={10}>
            <div id="hiphop">
              <h2>#HipHop</h2>
              <Row xs={1} sm={2} lg={3} xl={4} className="imgLinks py-3" id={"hipHopSection"}>
                {hasError ? (
                  <Alert variant="danger">{errorMessage || "Errore nel caricamento dei brani"}</Alert>
                ) : isLoading ? (
                  <div className="d-flex justify-content-center w-100 py-5">
                    <Spinner animation="border" variant="primary" />
                  </div>
                ) : hiphop && hiphop.length > 0 ? (
                  hiphop.slice(0, 4).map(track => {
                    const isFavorite = favorites?.length && favorites.find(fav => fav.id === track.id);
                    return (
                      <Col key={track.id} className="text-center mb-4" style={{ cursor: "pointer" }} onClick={() => dispatch(selectSongAction(track))}>
                        <div className="imageWrapper position-relative d-inline-block">
                          <img src={track.album.cover_medium} alt={track.title} className="img-fluid rounded" />
                          <div className="heartContainer d-flex align-items-center justify-content-center">
                            <BsHeart
                              size={16}
                              style={{ color: isFavorite ? "red" : "white", cursor: "pointer" }}
                              onClick={e => {
                                e.preventDefault();
                                if (isFavorite) {
                                  dispatch(removeFromFavoritesAction(track));
                                } else {
                                  dispatch(addToFavoritesAction(track));
                                }
                              }}
                            />
                          </div>
                        </div>
                        <p className="mt-2">
                          <strong>Track:</strong> {track.title} <br />
                          <strong>Artist:</strong> {track.artist.name}
                        </p>
                      </Col>
                    );
                  })
                ) : (
                  <Alert variant="warning">Nessun brano trovato.</Alert>
                )}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </Col>
  );
};

export default MainSection;
