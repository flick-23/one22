import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import IndexHeader from "./../../components/Headers/IndexHeader";

function LandingPage() {
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
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <IndexHeader />
        <div
          style={{
            backgroundColor: "#FFFFFF",
            // backgroundImage: "linear-gradient(45deg,  #b4b5c2 50%, #fff 100%)",
            backgroundImage:
              "linear-gradient(385deg, black, transparent), url('https://images.unsplash.com/photo-1613376023733-0a73315d9b06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "100%",
          }}
          className="section section-about-us"
        >
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h5 className="description">
                  <b
                    style={{
                      fontFamily: "Comic Sans MS",
                      color: "white",
                      // background: "-webkit-linear-gradient(#ffecd2, #fcb69f)",
                      // webkitBackgroundClip: "text",
                      // webkitTextFillColor: "transparent",
                      lineSpacing: "10px",
                      letterSpacing: "5px",
                      fontSize: "1.6em",
                    }}
                  >
                    KLS Gogte Institute of Technology brings to town ONE 2022, a
                    flamboyant cultural fest, featuring a colossal number of
                    events showcasing flair, exuberance and extravaganza,
                    spanning over the duration of 2 spectacular, fun-filled
                    days. AURA 2022 brings a hot platform to all the talented
                    and brilliant people from all cultural backgrounds
                    converging into one big fantasy realm! So come be a part of
                    AURA 2022, Into the fantasy realm!
                  </b>
                </h5>
              </Col>
            </Row>
            <div className="separator separator-primary"></div>
            <div className="section-story-overview"></div>
          </Container>
        </div>
        <div className="section section-team text-center">
          <Container>
            <h2 className="title">Meet our General Secretaries</h2>
            <div className="team">
              <Row>
                {/* Vijaykumar */}
                <Col md="3">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/avatar.jpg").default}
                    ></img>
                    <h4 className="title"> Vinaykumar Chittor</h4>
                    <p className="category text-info">ECE Department</p>
                    <p className="description">
                      A rare and dynamic personality! Carrying out
                      responsibilities in the dark without losing a hint of his
                      spark.
                    </p>
                  </div>
                </Col>
                {/* Meghan  */}
                <Col md="3">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/ryan.jpg").default}
                    ></img>
                    <h4 className="title">Meghan Ghivari</h4>
                    <p className="category text-info">CSE Department</p>
                    <p className="description">
                      Exuding a vibe that attracts the tribe and with a strong
                      leadership as her’s, she’s all set to lead the college and
                      challenge the status quo.
                    </p>
                  </div>
                </Col>
                {/* Harshit */}
                <Col md="3">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/eva.jpg").default}
                    ></img>
                    <h4 className="title">Harvey Specter</h4>
                    <p className="category text-info">ME Department</p>
                    <p className="description">
                      A dynamite and passionate individual. Master of words,
                      smooth as wine, has an approach bet you can’t decline.
                    </p>
                  </div>
                </Col>
                {/* Rubeena */}
                <Col md="3">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/eva.jpg").default}
                    ></img>
                    <h4 className="title"> Rubeena Godad</h4>
                    <p className="category text-info">Arch Department</p>
                    <p className="description">
                      A combination of both beast energy and an architect mind,
                      a responsible ranger very rare to find.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>

        <DefaultFooter />
      </div>
    </>
  );
}

export default LandingPage;
