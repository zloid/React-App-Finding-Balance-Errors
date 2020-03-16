import React from 'react'
import { Container, Row, Col, Badge } from 'react-bootstrap'
// import Textarea from 'react-textarea-autosize'
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
            footer
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Layout
