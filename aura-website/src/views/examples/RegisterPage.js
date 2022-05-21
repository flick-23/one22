import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col,
} from "reactstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import TransparentFooter from "components/Footers/TransparentFooter.js";

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

function RegisterPage() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [usn, setUsn] = useState("");
  const [error, setError] = useState(false);

  const isUSNValid = (usn) => {
    const pattern = /2gi[0-9][0-9][a-z][a-z][0-9]/;
    return pattern.test(usn) && usn.length === 10;
  };

  const isEmailValid = (email) => {
    const pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
  };

  const validateDetails = () => {
    const isAllDetailsEntered = username && password && name && phone && usn;
    if (!isAllDetailsEntered) {
      // all details were not entered
      console.log("details not entered");
      displayErrorMessage("Details not entered");
      return false;
    } else {
      // all details were entered, check for correctness
      let isValidEmail = isEmailValid(username);
      let isValidUSN = isUSNValid(usn.toLowerCase());
      if (phone.length !== 10) {
        // invalid phone number
        console.log("Invalid phone number");
        displayErrorMessage("Invalid phone number");
        return false;
      }
      if (isValidEmail && isValidUSN) {
        // details valid, make post request
        console.log(`USN ${usn} is valid`);
        console.log(`Email ${username} is valid`);
      } else {
        // details not valid
        // setError(true);
        if (!isValidUSN) {
          displayErrorMessage("Invalid USN");
        }
        if (!isValidEmail) {
          displayErrorMessage("Invalid Email");
        }
        console.log("invalid details entered");
        return false;
      }
    }
    return true;
  };

  const handleSubmit = async (e) => {
    setError(false);
    console.log("Form submitted, validating details");

    if (validateDetails()) {
      try {
        const res = await axios.post(
          "http://localhost:5000/api/users/register",
          {
            name: name,
            usn: usn,
            email: username,
            phone: phone,
            college: "KLS GIT",
            password: password,
          }
        );
        console.log("Data : ", res.data);
        res.data && window.location.replace("/login");
      } catch (err) {
        console.log("Fail");
        setError(true);
      }
    }
  };

  React.useEffect(() => {
    document.body.classList.add("login-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("login-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);

  return (
    <>
      <ExamplesNavbar />
      <div className="page-header clear-filter" filter-color="orange">
        <ToastContainer></ToastContainer>
        <div
          className="page-header-image"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1588497859490-85d1c17db96d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')",
          }}
        ></div>
        <div className="content">
          <Container>
            <Col className="ml-auto mr-auto" md="4">
              <Card className="card-login card-plain">
                <Form
                  onSubmit={handleSubmit}
                  action=""
                  className="form"
                  method=""
                >
                  <CardHeader className="text-center">
                    <div className="logo-container">
                      <img
                        alt="..."
                        src={require("assets/img/now-logo.png").default}
                      ></img>
                    </div>
                  </CardHeader>
                  <CardBody>
                    {/* name */}
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (firstFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons users_single-02"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Name"
                        type="text"
                        required={true}
                        onFocus={() => setFirstFocus(true)}
                        onBlur={() => setFirstFocus(false)}
                        onChange={(e) => setName(e.target.value)}
                      ></Input>
                    </InputGroup>
                    {/* number */}
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (firstFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons tech_mobile"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Phone Number"
                        type="number"
                        onFocus={() => setFirstFocus(true)}
                        onBlur={() => setFirstFocus(false)}
                        onChange={(e) => setPhone(e.target.value)}
                      ></Input>
                    </InputGroup>
                    {/* USN */}
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (firstFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons business_badge"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="USN"
                        type="text"
                        onFocus={() => setFirstFocus(true)}
                        onBlur={() => setFirstFocus(false)}
                        onChange={(e) => setUsn(e.target.value)}
                      ></Input>
                    </InputGroup>
                    {/* email */}
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (firstFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons ui-1_email-85"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Email"
                        type="text"
                        onFocus={() => setFirstFocus(true)}
                        onBlur={() => setFirstFocus(false)}
                        onChange={(e) => setUsername(e.target.value)}
                      ></Input>
                    </InputGroup>
                    {/* password */}
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (lastFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons objects_globe"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Password"
                        type="password"
                        onFocus={() => setLastFocus(true)}
                        onBlur={() => setLastFocus(false)}
                        onChange={(e) => setPassword(e.target.value)}
                      ></Input>
                    </InputGroup>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      block
                      className="btn-round"
                      color="primary"
                      href="#pablo"
                      onClick={handleSubmit}
                      size="lg"
                    >
                      <b>REGISTER</b>{" "}
                      <i className="now-ui-icons gestures_tap-01"></i>
                    </Button>
                    {error && (
                      <span style={{ color: "red", marginTop: "10px" }}>
                        Check your input!
                      </span>
                    )}
                    <div>
                      <h6>
                        <a
                          className="link"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <Link className="link" to="/login-page">
                            Have an account? Hop IN!
                          </Link>
                        </a>
                      </h6>
                    </div>
                  </CardFooter>
                </Form>
              </Card>
            </Col>
          </Container>
        </div>
        <TransparentFooter />
      </div>
    </>
  );
}

export default RegisterPage;
