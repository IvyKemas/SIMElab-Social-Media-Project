import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/images/banner.svg";

function Banner() {
  return (
    <>
      <section className="banner" id="home">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
              <span className="tagline">Welcome to Habari Harbour</span>
              <h1>
                Plot Your Course to Popularity:{" "}
                <span className="wrap">
                  Explore Trends and Uncover New Waves
                </span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reprehenderit consequuntur adipisci mollitia odio possimus dicta
                harum, error necessitatibus deserunt ullam obcaecati nihil,
                labore facere suscipit! Quidem delectus eum aut sint?
              </p>
              <button onClick={() => console.log("Your Trends")}>
                Your Trends <i className="bi bi-arrow-right-circle"></i>
              </button>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <img src={headerImg} alt="Header Img by Brett Jordan" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Banner;
