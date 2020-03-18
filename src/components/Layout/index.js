import React from 'react'
import {
  Container,
  Row,
  Col,
  Badge,
  OverlayTrigger,
  Tooltip,
} from 'react-bootstrap'
import TwoLeftTextarea from 'features/processDataFromTextareas/TwoLeftTextarea'
import OutputDataTextareas from 'features/processDataFromTextareas/OutputDataTextareas'

const Layout = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Badge pill variant="warning">
              1_0_
            </Badge>
          </Col>
          <Col>
            <Badge pill variant="warning">
              1_1_
            </Badge>
          </Col>
          <Col>
            <Badge pill variant="warning">
              1_2_
            </Badge>
          </Col>

          <Col>
            <Badge pill variant="warning">
              1_3_
            </Badge>
          </Col>

          <Col>
            <Badge pill variant="warning">
              1_4_
            </Badge>
          </Col>
        </Row>
        <Row>
          {/* ============================== */}
          <TwoLeftTextarea />
          <OutputDataTextareas />
        </Row>
        <Row>
          <Col>
            <Badge pill variant="warning">
              3_0_
            </Badge>

            <p className="middlePos">
              App for finding errors in the account balance
            </p>
            <h5>
              <OverlayTrigger
                placement="auto"
                overlay={
                  <Tooltip id="tooltip-disabled">
                    Numbers or Words in the first left column must be the same
                    as the second column numbers (words) from left. If data not
                    match, then we see the difference in the columns from right.
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
                  </Tooltip>
                }
              >
                <Badge variant="success">Features</Badge>
              </OverlayTrigger>
            </h5>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Layout
