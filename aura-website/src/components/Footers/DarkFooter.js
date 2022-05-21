/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="blue">
      <Container>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, Coded by <b>TEAM STRAWHATS</b>.
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
