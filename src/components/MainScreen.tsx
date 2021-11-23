import React from "react";
import { Container, Row } from "react-bootstrap";

import './mainscreen.css'

interface Props {
  title: string;
  children: unknown;
}

const MainScreen: React.FC<Props> = ({ title, children }) => {
  return (
    <div className="mainback">
      <Container>
        <Row>
          <div className="page">
            {title && (
              <>
                <h1 className="heading">{title}</h1>
                <br />
              </>
            )}
            {children}
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default MainScreen;
