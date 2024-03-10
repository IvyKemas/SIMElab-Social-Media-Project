import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/images/carousel-1.jpg";
import meter2 from "../assets/images/carousel-2.png";
import meter3 from "../assets/images/carousel-3.png";

function Trending() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <section className="trending" id="trending">
        <Container>
          <Row>
            <Col>
              <div className="trending-bx">
                <h2>Trending News</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim
                  iste voluptates possimus autem tempora sapiente voluptatum
                  adipisci, nostrum voluptas, tenetur ullam quidem
                  exercitationem praesentium officia, cumque reiciendis error
                  quibusdam laborum.
                </p>
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  className="trending-slider"
                >
                  {/* the items of the carousel */}
                  <div className="item">
                    <img src={meter1} alt="image" />
                    <h5>News Title</h5>
                    <p>News Description</p>
                  </div>
                  {/* the second item */}
                  <div className="item">
                    <img src={meter2} alt="image" />
                    <h5>Next News Title</h5>
                    <p>News 2 Description</p>
                  </div>
                  {/* the third item */}
                  <div className="item">
                    <img src={meter3} alt="image" />
                    <h5>Last Title</h5>
                    <p>News 3 Description</p>
                  </div>
                </Carousel>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Trending;
