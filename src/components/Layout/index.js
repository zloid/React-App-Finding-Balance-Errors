import React from 'react'
import {
  Container,
  Row,
  Col,
  Badge,
  OverlayTrigger,
  Tooltip,
} from 'react-bootstrap'

import './index.css'
import TwoLeftTextarea from 'features/processDataFromTextareas/TwoLeftTextarea'
import OutputDataTextareas from 'features/processDataFromTextareas/OutputDataTextareas'

const Layout = () => {
  return (
    <>
      <Container>
        <Row>
          <TwoLeftTextarea />
          <OutputDataTextareas />
        </Row>
        <Row>
          <Col sm>
            <div className="middlePos">
              <p>App for finding errors in the account balance</p>
              <h6>
                <OverlayTrigger
                  placement="auto"
                  overlay={
                    <Tooltip id="tooltip-disabled">
                      Numbers or Words in the first left column must be the same
                      as the second column numbers (words) from left. If data
                      not match, then we see the difference in the columns from
                      right.
                    </Tooltip>
                  }
                >
                  <Badge variant="primary">How it's work</Badge>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="auto"
                  overlay={
                    <Tooltip id="tooltip-disabled">
                      Comparison and processing of two data sets;
                      <br />
                      2,3 -> 2.3 (each comma become point);
                      <br />
                      Return button;
                      <br />
                      Delete all button;
                      <br />
                      Demo button;
                      <br />
                      Copy buttons;
                      <br />
                      Count each inputs numbers;
                    </Tooltip>
                  }
                >
                  <Badge variant="success">Features</Badge>
                </OverlayTrigger>
              </h6>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Layout
