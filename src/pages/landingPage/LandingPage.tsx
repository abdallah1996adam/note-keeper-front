import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./landingpage.css";

const LandingPage: React.FC = () => {
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title">Welcome to note keepr</h1>
              <p className="subtitle">one place for all your notes .</p>
            </div>
            <div className="buttonContainer">
              <Link to="/login">
                <Button size="lg" className="landingbutton">
                  Login
                </Button>
              </Link>
              <Link to="signup">
                <Button
                  size="lg"
                  className="landingbutton"
                  variant="outline-secondary"
                >
                  Signup
                </Button>
              </Link>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
