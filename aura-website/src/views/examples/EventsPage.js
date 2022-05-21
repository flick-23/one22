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
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import DarkFooter from "./../../components/Footers/DarkFooter";
import axios from "axios";
// event details
import danceEventList from "assets/data/danceEvents";
import dramaEventList from "assets/data/dramaEvents";
import executiveEventList from "assets/data/executiveEvents";
import fashionEventList from "assets/data/fashionEvents";
import fineArtsEventList from "assets/data/fineArtsEvents";
import litEventList from "assets/data/litEvents";
import musicEventList from "assets/data/musicEvents";
import photographyEventList from "assets/data/photographyEvents";
import quizEventList from "assets/data/quizEvents";
import specialEventList from "assets/data/specialEvents";

function EventsPage() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  const [user, setUser] = React.useState();

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

  //only call the function if there are important changes.
  const postDataToBackend = async () => {
    const eventsData = [
      danceEventList,
      dramaEventList,
      executiveEventList,
      fashionEventList,
      fineArtsEventList,
      litEventList,
      musicEventList,
      photographyEventList,
      quizEventList,
      specialEventList,
    ];
    console.log("Events Data [0]: ", eventsData);
    console.log("Events Data Length: ", eventsData.length);

    for (let i = 0; i < eventsData.length; i++) {
      //post each event data to backend
      for (let j = 0; j < eventsData[i].length; j++) {
        console.log(
          "Trying to post : ",
          eventsData[i][j].id,
          eventsData[i][j].name,
          eventsData[i][j].minTeamSize,
          eventsData[i][j].maxTeamSize
        );
        let res = await axios.post("http://localhost:5000/api/events", {
          eventId: eventsData[i][j].id,
          name: eventsData[i][j].name,
          minTeamSize: eventsData[i][j].minTeamSize,
          maxTeamSize: eventsData[i][j].maxTeamSize,
        });

        console.log("Posted : ", res);
      }
    }
  };
  // postDataToBackend();
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper" style={{ backgroundColor: "white" }}>
        {/* SOME HEADER IF NEEDED */}
        <div
          style={{
            backgroundImage: `linear-gradient(65deg, black, transparent), url('https://dkr0pu7ej5xex.cloudfront.net/wp-content/uploads/2017/04/24135159/Netflix-Background.jpg')`,
            backgroundAttachment: "fixed",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="section section-about-us"
        >
          <Container>
            {/* FASHION */}
            <Card className="mb-3">
              <CardImg
                alt="..."
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                top
                style={{ height: "180px" }}
              ></CardImg>
              <CardBody>
                <CardTitle tag="h4">Fashion</CardTitle>
                <CardText>
                  <b>
                    Here I need a good 725 x 180 fashion image. Also some short
                    and cool description here!
                  </b>
                </CardText>
                <Button color="info">
                  <Link
                    style={{ color: "#fff", textDecoration: "none" }}
                    className="link"
                    to={{
                      pathname: "/event-theme-page",
                      state: {
                        events: fashionEventList,
                        bgImg:
                          "https://images.unsplash.com/photo-1470309864661-68328b2cd0a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjN8fGZhc2hpb258ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                      },
                    }}
                  >
                    Checkout fashion events here!
                  </Link>
                </Button>
              </CardBody>
            </Card>

            {/* DRAMA */}
            <Card className="mb-3">
              <CardImg
                alt="..."
                src="https://images.unsplash.com/photo-1565942238081-3374f4582765?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1119&q=80"
                top
                style={{ height: "180px" }}
              ></CardImg>
              <CardBody>
                <CardTitle tag="h4">Drama</CardTitle>
                <CardText>
                  <b>
                    Here I need a good 725 x 180 fashion image. Also some short
                    and cool description here!
                  </b>
                </CardText>
                <Button
                  color="info"

                  // onClick={(e) => e.preventDefault()}
                >
                  <Link
                    style={{ color: "#fff", textDecoration: "none" }}
                    className="link"
                    to={{
                      pathname: "/event-theme-page",
                      state: {
                        events: dramaEventList,
                        bgImg:
                          "https://images.unsplash.com/photo-1565942238081-3374f4582765?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1119&q=80",
                      },
                    }}
                  >
                    Checkout drama events here!
                  </Link>
                </Button>
              </CardBody>
            </Card>
            {/* MUSIC */}
            <Card className="mb-3">
              <CardImg
                alt="..."
                src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                top
                style={{ height: "180px" }}
              ></CardImg>
              <CardBody>
                <CardTitle tag="h4">MUSIC</CardTitle>
                <CardText>
                  <b>
                    Here I need a good 725 x 180 fashion image. Also some short
                    and cool description here!
                  </b>
                </CardText>
                <Button
                  color="info"

                  // onClick={(e) => e.preventDefault()}
                >
                  <Link
                    style={{ color: "#fff", textDecoration: "none" }}
                    className="link"
                    to={{
                      pathname: "/event-theme-page",
                      state: {
                        events: musicEventList,
                        bgImg:
                          "https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                      },
                    }}
                  >
                    Checkout music events here!
                  </Link>
                </Button>
              </CardBody>
            </Card>
            {/* DANCE */}
            <Card className="mb-3">
              <CardImg
                alt="..."
                src="https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                top
                style={{ height: "180px" }}
              ></CardImg>
              <CardBody>
                <CardTitle tag="h4">DANCE</CardTitle>
                <CardText>
                  <b>
                    Here I need a good 725 x 180 fashion image. Also some short
                    and cool description here!
                  </b>
                </CardText>
                <Button
                  color="info"

                  // onClick={(e) => e.preventDefault()}
                >
                  <Link
                    style={{ color: "#fff", textDecoration: "none" }}
                    className="link"
                    to={{
                      pathname: "/event-theme-page",
                      state: {
                        events: danceEventList,
                        bgImg:
                          "https://images.unsplash.com/photo-1599739291060-4578e77dac5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG5pZ2h0JTIwY2x1YnxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60",
                      },
                    }}
                  >
                    Checkout dance events here!
                  </Link>
                </Button>
              </CardBody>
            </Card>
            {/* FINE ARTS */}
            <Card className="mb-3">
              <CardImg
                alt="..."
                src="https://images.unsplash.com/photo-1580060405691-3329f19f6979?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
                top
                style={{ height: "180px" }}
              ></CardImg>
              <CardBody>
                <CardTitle tag="h4">FINE ARTS</CardTitle>
                <CardText>
                  <b>
                    Here I need a good 725 x 180 fashion image. Also some short
                    and cool description here!
                  </b>
                </CardText>
                <Button
                  color="info"

                  // onClick={(e) => e.preventDefault()}
                >
                  <Link
                    style={{ color: "#fff", textDecoration: "none" }}
                    className="link"
                    to={{
                      pathname: "/event-theme-page",
                      state: {
                        events: fineArtsEventList,
                        bgImg:
                          "https://images.unsplash.com/photo-1581850518616-bcb8077a2336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGFydHxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60",
                      },
                    }}
                  >
                    Checkout fine arts events here!
                  </Link>
                </Button>
              </CardBody>
            </Card>
            {/* QUIZ */}
            <Card className="mb-3">
              <CardImg
                alt="..."
                src="https://images.unsplash.com/photo-1539628399213-d6aa89c93074?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                top
                style={{ height: "180px" }}
              ></CardImg>
              <CardBody>
                <CardTitle tag="h4">QUIZ</CardTitle>
                <CardText>
                  <b>
                    Here I need a good 725 x 180 fashion image. Also some short
                    and cool description here!
                  </b>
                </CardText>
                <Button
                  color="info"

                  // onClick={(e) => e.preventDefault()}
                >
                  <Link
                    style={{ color: "#fff", textDecoration: "none" }}
                    className="link"
                    to={{
                      pathname: "/event-theme-page",
                      state: {
                        events: quizEventList,
                        bgImg:
                          "https://images.unsplash.com/photo-1499377193864-82682aefed04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHF1aXp8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                      },
                    }}
                  >
                    Checkout quiz events here!
                  </Link>
                </Button>
              </CardBody>
            </Card>
            {/* LIT */}
            <Card className="mb-3">
              <CardImg
                alt="..."
                src="https://images.unsplash.com/photo-1532543307581-8b01a7ff954f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                top
                style={{ height: "180px" }}
              ></CardImg>
              <CardBody>
                <CardTitle tag="h4">LIT</CardTitle>
                <CardText>
                  <b>
                    Here I need a good 725 x 180 fashion image. Also some short
                    and cool description here!
                  </b>
                </CardText>
                <Button
                  color="info"

                  // onClick={(e) => e.preventDefault()}
                >
                  <Link
                    style={{ color: "#fff", textDecoration: "none" }}
                    className="link"
                    to={{
                      pathname: "/event-theme-page",
                      state: {
                        events: litEventList,
                        bgImg:
                          "https://images.unsplash.com/photo-1629552049362-9ce66fe7840d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8JTIzbGl0ZXJhdHVyZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60",
                      },
                    }}
                  >
                    Checkout LIT events here!
                  </Link>
                </Button>
              </CardBody>
            </Card>
            {/* EXECUTIVES */}
            <Card className="mb-3">
              <CardImg
                alt="..."
                src="https://images.unsplash.com/photo-1574800015909-3f8ae2fcf907?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                top
                style={{ height: "180px" }}
              ></CardImg>
              <CardBody>
                <CardTitle tag="h4">EXECUTIVES</CardTitle>
                <CardText>
                  <b>
                    Here I need a good 725 x 180 fashion image. Also some short
                    and cool description here!
                  </b>
                </CardText>
                <Button
                  color="info"

                  // onClick={(e) => e.preventDefault()}
                >
                  <Link
                    style={{ color: "#fff", textDecoration: "none" }}
                    className="link"
                    to={{
                      pathname: "/event-theme-page",
                      state: {
                        events: executiveEventList,
                        bgImg:
                          "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZXZlbnR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                      },
                    }}
                  >
                    Checkout executive events here!
                  </Link>
                </Button>
              </CardBody>
            </Card>
            {/* SPECIALS */}
            <Card className="mb-3">
              <CardImg
                alt="..."
                src="https://images.unsplash.com/photo-1562652604-ea331beda8b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
                top
                style={{ height: "180px" }}
              ></CardImg>
              <CardBody>
                <CardTitle tag="h4">SPECIALS</CardTitle>
                <CardText>
                  <b>
                    Here I need a good 725 x 180 fashion image. Also some short
                    and cool description here!
                  </b>
                </CardText>
                <Button
                  color="info"

                  // onClick={(e) => e.preventDefault()}
                >
                  <Link
                    style={{ color: "#fff", textDecoration: "none" }}
                    className="link"
                    to={{
                      pathname: "/event-theme-page",
                      state: {
                        events: specialEventList,
                        bgImg:
                          "https://images.unsplash.com/photo-1531148502260-2920d70c8ed4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGZ1bnxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60",
                      },
                    }}
                  >
                    Checkout special events here!
                  </Link>
                </Button>
              </CardBody>
            </Card>
          </Container>
        </div>

        <DarkFooter />
      </div>
    </>
  );
}

export default EventsPage;
