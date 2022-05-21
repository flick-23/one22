import React from "react";

// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  CardGroup,
  Card,
  CardText,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import { useState, useEffect } from "react";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import axios from "axios";

function ProfilePage() {
  const [pills, setPills] = React.useState("2");
  const [items, setItems] = useState([]);
  const [name, setName] = useState();
  const [usn, setUsn] = useState();
  const [eventName, seteventName] = useState();
  const [eventsParticipated, seteventsParticipated] = useState([]);
  const [eventsVolunteering, seteventsVolunteering] = useState([]);
  var array = [];

  React.useEffect(async () => {
    const items = JSON.parse(localStorage.getItem("user"));
    if (items) {
      setItems(items);
      setName(items.name);
      setUsn(items.usn);
      const eventsData = await getEventData(items.usn);
      seteventsParticipated(eventsData);
      const volunteerData = await getVolunteerData(items.usn);
      seteventsVolunteering(volunteerData);
    }
  }, []);

  React.useEffect(() => {
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("profile-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);

  const getEventData = async (usn) => {
    const res = await axios.get(
      "http://localhost:5000/api/registeredData/" + usn
    );
    console.log("RES : ", res);
    array = res.data;
    array.map((d) => {
      eventsParticipated.push(d);
    });
    return array;
  };

  const getVolunteerData = async (usn) => {
    const res = await axios.get(
      "http://localhost:5000/api/volunteer/getlist/" + usn
    );
    array = res.data;
    console.log("Array :", array);
    array.map((d) => {
      eventsParticipated.push(d);
    });
    return array;
  };

  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <ProfilePageHeader
          name={name}
          usn={usn}
          numEventsParticipated={eventsParticipated.length}
          numEventsVolunteering={eventsVolunteering.length}
        />
        <div className="section">
          <Container>
            <h3 className="title">Events Participated</h3>
            <Row>
              {eventsParticipated.map((event) => {
                return (
                  <Col md="6" lg="3" key={event.id}>
                    <Card style={{ marginRight: "15px" }}>
                      <CardImg
                        alt="Card image cap"
                        src={event.poster}
                        top
                        width="100%"
                      />
                      <CardBody>
                        <CardTitle tag="h5">{event.eventName}</CardTitle>
                      </CardBody>
                    </Card>
                  </Col>
                );
              })}
            </Row>

            <h3 className="title">Events Volunteering</h3>
            <Row>
              {eventsVolunteering.map((event) => {
                return (
                  <Col md="6" lg="3" key={event.id}>
                    <Card style={{ marginRight: "15px" }}>
                      <CardImg
                        alt="Card image cap"
                        src={event.poster}
                        top
                        width="100%"
                      />
                      <CardBody>
                        <CardTitle tag="h5">{event.eventName}</CardTitle>
                      </CardBody>
                    </Card>
                  </Col>
                );
              })}
            </Row>
            {/* <h3 className="title">About me</h3>
            <h5 className="description">
              An artist of considerable range, Ryan — the name taken by
              Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
              and records all of his own music, giving it a warm, intimate feel
              with a solid groove structure. An artist of considerable range.
            </h5>
            <Row>
              <Col className="ml-auto mr-auto" md="6">
                <h4 className="title text-center">My Portfolio</h4>
                <div className="nav-align-center">
                  <Nav
                    className="nav-pills-info nav-pills-just-icons"
                    pills
                    role="tablist"
                  >
                    <NavItem>
                      <NavLink
                        className={pills === "1" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("1");
                        }}
                      >
                        <i className="now-ui-icons design_image"></i>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "2" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("2");
                        }}
                      >
                        <i className="now-ui-icons location_world"></i>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "3" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("3");
                        }}
                      >
                        <i className="now-ui-icons sport_user-run"></i>
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>
              </Col>
              <TabContent className="gallery" activeTab={"pills" + pills}>
                <TabPane tabId="pills1">
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg1.jpg").default}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg3.jpg").default}
                        ></img>
                      </Col>
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg8.jpg").default}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg7.jpg").default}
                        ></img>
                      </Col>
                    </Row>
                  </Col>
                </TabPane>
                <TabPane tabId="pills2">
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg6.jpg").default}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg11.jpg").default}
                        ></img>
                      </Col>
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg7.jpg").default}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg8.jpg").default}
                        ></img>
                      </Col>
                    </Row>
                  </Col>
                </TabPane>
                <TabPane tabId="pills3">
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg3.jpg").default}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg8.jpg").default}
                        ></img>
                      </Col>
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg7.jpg").default}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg6.jpg").default}
                        ></img>
                      </Col>
                    </Row>
                  </Col>
                </TabPane>
              </TabContent>
            </Row> */}
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default ProfilePage;
