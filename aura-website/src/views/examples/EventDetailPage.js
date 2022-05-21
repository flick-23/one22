import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

import {
  Button,
  Container,
  Form,
  FormGroup,
  Row,
  Input,
  Col,
} from "reactstrap";

import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

const givenData = {
  eventBanner: "Url(./assets/img/bg5.jpg)",
};

function EventDetailPage() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  let pageHeader = React.createRef();
  const [pills, setPills] = React.useState("2");
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

  let localUser;

  const location = useLocation();
  const id = location.state?.eventId;
  const name = location.state?.eventName;
  const category = location.state?.eventCategory;
  const desc = location.state?.eventDesc;
  const img = location.state?.img;

  const coordsName = location.state?.coordNames.split(",");
  const coordsNumbers = location.state?.coordNumbers.split(",");
  const coordsImgs = location.state?.coordImgs.split(",");

  const minTeamSize = location.state?.minTeamSize;
  const maxTeamSize = location.state?.maxTeamSize;
  const eventDate = location.state?.eventDate;
  const maxLimit = location.state?.maxVolunterLimit;

  const coords = [];
  for (let i = 0; i < coordsName.length; i++) {
    let coordObj = {};
    coordObj.img = coordsImgs[i];
    coordObj.name = coordsName[i];
    coordObj.number = coordsNumbers[i];
    coords.push(coordObj);
  }
  console.log(coords);

  const studentUSNFields = new Array(parseInt(maxTeamSize)).fill(null);
  console.log("Dummy array: ", studentUSNFields);

  let isRequired = true;
  let isDetailsValid = false;

  //display error message!
  const displayErrorMessage = (msg) => {
    toast.error(msg, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  //display success message!
  const displaySuccessMessage = (msg) => {
    toast.success(msg, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  //display info message!
  const displayInfoMessage = (msg) => {
    toast.info(msg, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  //check if USN is valid!
  const isUSNValid = (usn) => {
    const pattern = /2gi[0-9][0-9][a-z][a-z][0-9]/;
    return pattern.test(usn) && usn.length === 10;
  };

  //check for duplicate usns!
  const checkDuplicateUSNs = (usnArray) => {
    const uniqueUSNArray = usnArray.filter((usn) => {
      return usn !== "";
    });
    console.log("USNs only array: ", uniqueUSNArray);
    return new Set(uniqueUSNArray).size !== uniqueUSNArray.length;
  };

  //check if user trying to register is logged in
  const checkLogin = () => {
    localUser = localStorage.getItem("user");
    return localUser;
  };

  //Check if the loggedIn user is entering his/her USN in the team
  const checkLocalUserUsn = (teamMemberUSNs) => {
    localUser = JSON.parse(localStorage.getItem("user"));
    return teamMemberUSNs.includes(localUser.usn);
  };

  //check if //check if user is already registered for an event => true if already present, false if not already present
  const isAlreadyParticipant = (teamMemberUSNs, userData) => {
    let check;
    for (let i = 0; i < userData.data.length; i++) {
      if (
        teamMemberUSNs.includes(userData.data[i].userId) &&
        userData.data[i].eventId == id
      ) {
        console.log(
          "INCLUDES - BACKEND - FRONTEND: ",
          userData.data[i].userId,
          teamMemberUSNs
        );
        check = true;
        break;
      } else {
        check = false;
      }
    }
    return check;
  };

  //check if a user who is a volunteer is trying to participate in the event
  const isParticiapntVolunteer = async (teamMemberUSNs) => {
    console.log("ISPARTICIPANTVOLUNTEER : ");
    const userData = await axios.get(
      "http://localhost:5000/api/volunteer/" + id.toString()
    );
    let check;
    console.log("volunteerData : ", userData.data);
    console.log("EVENT ID : ", id);
    for (let i = 0; i < userData.data.length; i++) {
      if (
        teamMemberUSNs.includes(userData.data[i].userId) &&
        userData.data[i].eventId == id
      ) {
        console.log(
          "INCLUDES - BACKEND - FRONTEND: ",
          userData.data[i].userId,
          teamMemberUSNs
        );
        check = true;
        break;
      } else {
        check = false;
      }
    }
    console.log("CHECK : ", check);
    return check;
  };

  //validate all data being sent to backend
  const checkRegistered = async (teamName, teamMemberUSNs) => {
    const userData = await axios.get(
      "http://localhost:5000/api/registeredData"
    );
    console.log("userData : ", userData.data);
    console.log("teamMemberUsns : ", teamMemberUSNs);
    let check = true;
    check = await isAlreadyParticipant(teamMemberUSNs, userData);
    if (checkLocalUserUsn(teamMemberUSNs)) {
      if (check) {
        //if user is trying to register multiple times for the same event
        displayErrorMessage(
          "One or all of you cannot register twice for the same event!"
        );
      } else {
        //check if he/she is a participantc
        const checkVolunteer = await isParticiapntVolunteer(teamMemberUSNs);
        if (!checkVolunteer) {
          // all checks pass
          console.log("DATA POSTED TO BACKEND!");
          postDataToBackend(teamName, teamMemberUSNs);
        } else {
          displayInfoMessage(
            "One or more IMPOSTERS FOUND! Try participating in events where you are not volunteering"
          );
        }
      }
    } else {
      //checkLocalUserUsn fails
      displayErrorMessage(
        "You also need to be a part of team " + localUser.name + "😁"
      );
    }
  };

  //post data to backend
  const postDataToBackend = async (teamName, teamMemberUSNs) => {
    try {
      const res = await axios.post("http://localhost:5000/api/event/register", {
        name: teamName,
        eventId: id,
        usn: teamMemberUSNs,
        eventName: name,
        poster: img,
      });
      console.log("RESULT OBJECT POSTED! : ", res);
      displaySuccessMessage("Registration DONE ✅ Datte Bayo!");
    } catch (err) {
      if (err.response.status == 404) {
        displayErrorMessage(
          "Please make sure all your team members have registered and created an account for ONE'22"
        );
      }
    }
  };

  //check if participant is trying to be a volunteer
  const isVolunteerParticipant = async () => {
    let localUserUsn = JSON.parse(localStorage.getItem("user"));

    //check if the user trying to be a volunteer has logged in!
    if (localUserUsn == null) {
      displayErrorMessage("Pehele LOGIN kar na!! Kya Volunteer banega re tu!");
      return true;
    } else {
      //has logged in
      localUserUsn = localUserUsn.usn;
      const participantsData = await axios.get(
        "http://localhost:5000/api/registeredData"
      );

      for (let i = 0; i < participantsData.data.length; i++) {
        if (
          localUserUsn == participantsData.data[i].userId &&
          participantsData.data[i].eventId == id
        ) {
          displayErrorMessage(
            "You cannot volunteer and also be a pariticpant at the same time! DUMMY!"
          );
          return true;
        }
      }
      return false;
    }
  };

  //check if required volunteer limit is reached
  const isVolunteerLimitReached = async (maxLimit) => {
    const volunteerData = await axios.get(
      "http://localhost:5000/api/volunteer/" + id.toString()
    );
    console.log("VOLUNTEER DATA : ", volunteerData.data.length);
    console.log("MAX LIMIT : ", maxLimit);
    if (volunteerData.data.length >= maxLimit) {
      displayInfoMessage(
        "We have met the requirements of Volunteers for this event. You can still try volunteering in other events "
      );
      return true;
    }
    return false;
  };

  //check if already a volunteer
  const isAlreadyVolunteer = async (localUserUsn) => {
    let check;
    const userData = await axios.get(
      "http://localhost:5000/api/volunteer/" + id.toString()
    );
    for (let i = 0; i < userData.data.length; i++) {
      if (
        localUserUsn == userData.data[i].userId &&
        userData.data[i].eventId == id
      ) {
        console.log(
          "INCLUDES - BACKEND - FRONTEND: ",
          userData.data[i].userId,
          localUserUsn
        );
        check = true;
        break;
      } else {
        check = false;
      }
    }
    return check;
  };

  //post volunteer data to backend
  const postVolunteerDataToBackend = async (localUserUsn) => {
    try {
      const res = await axios.post("http://localhost:5000/api/volunteer/", {
        eventId: id,
        usn: localUserUsn,
        eventName: name,
        poster: img,
      });
      console.log("Result posted to backend! ");
      displaySuccessMessage(
        "You're all set to be the volunteer! Reach out to our coordinators!"
      );
    } catch (err) {
      displayErrorMessage(
        "Ruh-roh! Please contact the website team to report this bug!"
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted, team registration started");
    const teamName = document.getElementById("teamName").value;
    let teamMemberUSNs = [];

    // store all USNs
    for (let i = 0; i < maxTeamSize; i++) {
      const teamMemberUSN = document
        .getElementById(`usn${i + 1}`)
        .value.toLowerCase();

      if (teamMemberUSN === "") {
        teamMemberUSNs.push("");
        continue;
      }
      if (isUSNValid(teamMemberUSN)) {
        // USN is valid
        teamMemberUSNs.push(teamMemberUSN);
        isDetailsValid = true;
      } else {
        // USN is not valid
        isDetailsValid = false;
        displayErrorMessage(`Team member ${i + 1} USN invalid`);
        document.getElementById(`usn${i + 1}`).value = "";
      }
    }

    while (teamMemberUSNs.length != 5) {
      teamMemberUSNs.push("");
    }

    //check for duplicate USN entries
    if (checkDuplicateUSNs(teamMemberUSNs)) {
      // found duplicate USNs
      displayErrorMessage("Duplicates USNs found");
      for (let i = 0; i < maxTeamSize; i++) {
        document.getElementById(`usn${i + 1}`).value = "";
      }
      return;
    }

    if (isDetailsValid) {
      teamMemberUSNs = teamMemberUSNs.map((e) => {
        return e.toUpperCase();
      });
      checkRegistered(teamName, teamMemberUSNs);
      console.log("ALMIGHTY PUSH!");
    }
  };

  //check if he's logged in! Check if he's a participant. Check if max limit is reached.
  const handleVolunteerSubmit = async (e) => {
    const checkisVolunteerParticipant = await isVolunteerParticipant();

    if (!checkisVolunteerParticipant) {
      let checkMaxVolunteerLimit = await isVolunteerLimitReached(maxLimit);
      let localUserUsn = JSON.parse(localStorage.getItem("user"));
      localUserUsn = localUserUsn.usn;
      if (!checkMaxVolunteerLimit) {
        const checkVolunteer = await isAlreadyVolunteer(localUserUsn);
        if (checkVolunteer) {
          displayInfoMessage(
            "Hold your horses! You are already a part of the volunteering team!"
          );
        } else {
          postVolunteerDataToBackend(localUserUsn);
        }
      }
    }
  };

  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <ToastContainer></ToastContainer>
        <div
          className="page-header clear-filter page-header-small"
          filter-color="blue"
        >
          <div
            className="page-header-image"
            style={{
              backgroundImage: givenData.eventBanner,
            }}
            ref={pageHeader}
          ></div>
          <Container>
            <h3 className="title">{category}</h3>
            <p className="category">{name}</p>
            <div className="content">
              <div className="social-description">
                <h2>{minTeamSize}</h2>
                <p>Min Team Size</p>
              </div>
              <div className="social-description">
                <h2>{maxTeamSize}</h2>
                <p>Max Team Size</p>
              </div>
              <div className="social-description">
                <h2>{eventDate}</h2>
                <p>Event Date</p>
              </div>
            </div>
          </Container>
        </div>
        <div className="section">
          <Container>
            <div className="button-container">
              <Button
                className="btn-round"
                color="info"
                size="lg"
                onClick={() => {
                  if (checkLogin() == null) {
                    displayErrorMessage(
                      "Pehele LOGIN kar na!! Kya participant banega re tu!"
                    );
                    return;
                  }
                  setIsFormVisible(!isFormVisible);
                }}
              >
                Participate!
              </Button>
              <Button
                className="btn-round"
                color="default"
                size="lg"
                onClick={handleVolunteerSubmit}
              >
                Volunteer
              </Button>
            </div>

            {isFormVisible && (
              <div
                className="section"
                style={{
                  padding: "1em",
                }}
              >
                <h2 className="title" style={{ textAlign: "left" }}>
                  Register your team for this event!
                </h2>
                <Form
                  style={{ border: "5px solid white", fontSize: "1rem" }}
                  onSubmit={handleSubmit}
                >
                  <FormGroup className="col-md-6">
                    <label htmlFor="teamName">Team Name</label>
                    <Input
                      id="teamName"
                      placeholder="Team name"
                      type="text"
                      required
                    ></Input>
                  </FormGroup>
                  {studentUSNFields.map((usnField, index) => {
                    if (index >= minTeamSize) {
                      isRequired = false;
                    }
                    const curId = `usn${index + 1}`;
                    const displayText = `Team Member ${index + 1} USN`;
                    return (
                      <FormGroup className="col-md-6" key={index}>
                        <label htmlFor={curId}>Team Member {index + 1}</label>
                        <Input
                          id={curId}
                          key={index}
                          placeholder={displayText}
                          type="text"
                          required={isRequired}
                        ></Input>
                      </FormGroup>
                    );
                  })}
                  <Button
                    color="info"
                    type="submit"
                    style={{
                      marginLeft: "2%",
                      width: "15%",
                      minWidth: "100px",
                    }}
                  >
                    Submit
                  </Button>
                </Form>
              </div>
            )}
            <h3 className="title">Event Description</h3>
            <h5 className="description">{desc}</h5>

            <Row>
              <Col className="ml-auto mr-auto" md="6">
                <h4 className="title text-center">Co-ordinator's</h4>
                <div className="team">
                  <Row>
                    {coords.map((coord, index) => {
                      return (
                        <Col md="3" key={index}>
                          <div className="team-player">
                            <img
                              alt="..."
                              className="rounded-circle img-fluid img-raised"
                              src={coord.img}
                              // src={require("assets/img/ryan.jpg").default}
                            ></img>
                            <h4 className="title">{coord.name}</h4>
                            <p className="category text-info">{coord.number}</p>
                          </div>
                        </Col>
                      );
                    })}
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default EventDetailPage;
