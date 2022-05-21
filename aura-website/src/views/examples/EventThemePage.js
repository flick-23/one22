import React from "react";
import { Link } from "react-router-dom";

// reactstrap components
import {
  Button,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import DarkFooter from "../../components/Footers/DarkFooter";
import { useLocation } from "react-router-dom";

const EventThemePage = () => {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  const location = useLocation();
  const events = location.state?.events;
  const bgImg = location.state?.bgImg;
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper" style={{ backgroundColor: "white" }}>
        {/* SOME HEADER IF NEEDED */}
        <div
          style={{
            backgroundImage: `linear-gradient(65deg, black, transparent), url(${bgImg})`,
            backgroundAttachment: "fixed",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="section section-about-us"
        >
          <Container>
            <Row>
              {events.map((event) => {
                return (
                  <Col className="ml-auto mr-auto" md="6">
                    <Card
                      className="mb-3"
                      key={event.id}
                      // style={{ margin: "0 20px" }}
                    >
                      <CardImg
                        alt="..."
                        src={event.img}
                        top
                        style={{ height: "180px" }}
                      ></CardImg>
                      <CardBody>
                        <CardTitle tag="h4">{event.name}</CardTitle>
                        <CardText>
                          <b>
                            Here I need a good 725 x 180 fashion image. Also
                            some short and cool description here!
                          </b>
                        </CardText>
                        <Button
                          color="info"
                          onClick={(e) => {
                            console.log("clicked");
                          }}
                        >
                          <Link
                            style={{ color: "#fff", textDecoration: "none" }}
                            className="link"
                            to={{
                              pathname: "/event-detail-page",
                              state: {
                                eventId: `${event.id}`,
                                eventName: `${event.name}`,
                                eventCategory: `${event.category}`,
                                eventDesc: `${event.desc}`,
                                coordNames: `${event.coordNames}`,
                                coordNumbers: `${event.coordNumbers}`,
                                coordImgs: `${event.coordImgs}`,
                                minTeamSize: `${event.minTeamSize}`,
                                maxTeamSize: `${event.maxTeamSize}`,
                                eventDate: `${event.eventDate}`,
                                maxVolunterLimit: `${event.maxVolunterLimit}`,
                                img: `${event.img}`,
                              },
                            }}
                          >
                            Read details
                          </Link>
                        </Button>
                      </CardBody>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </div>
        <DarkFooter />
      </div>
    </>
  );
};

export default EventThemePage;
