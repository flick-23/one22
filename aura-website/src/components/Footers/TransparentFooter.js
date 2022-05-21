/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function TransparentFooter() {
  return (
    <footer className="footer">
      <Container>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, Developed by{" "}
          <a href="" target="_blank">
            <b style={{ color: "aqua" }}>TEAM STRAWHATS</b>
          </a>
          .
        </div>
      </Container>
    </footer>
  );
}

export default TransparentFooter;
