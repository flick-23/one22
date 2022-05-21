/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function DefaultFooter() {
  return (
    <>
      <footer className="footer footer-default">
        <Container>
          <div className="copyright" id="copyright">
            © {new Date().getFullYear()}, Developed by{" "}
            <a
              href="https://www.linkedin.com/in/venkatesh-dhongadi-ba2904187/"
              target="_blank"
            >
              TEAM STRAWHATS
            </a>
            .
          </div>
        </Container>
      </footer>
    </>
  );
}

export default DefaultFooter;
