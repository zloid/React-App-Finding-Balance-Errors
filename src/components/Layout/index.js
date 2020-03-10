import React, { useState } from 'react'
import { Container, Row, Col, Button, Badge } from 'react-bootstrap'
import Textarea from 'react-textarea-autosize'
import TwoLeftTextarea from 'features/processDataFromTextareas/TwoLeftTextarea'
// < (.|\n)*?<\/ >
//<Col>(.|\n|\r\n)*?<\/Col>

const Layout = () => {
  const [stateTextarea, setStateTextarea] = useState('test')
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
          <Row>
            <Col>
              <Badge pill variant="warning">
                2_3_
              </Badge>
              <Textarea
                value={stateTextarea}
                onChange={e => setStateTextarea(e.target.value)}
              />
            </Col>
            <Col>
              <Badge pill variant="warning">
                2_4_
              </Badge>
              <Textarea
                value={stateTextarea}
                onChange={e => setStateTextarea(e.target.value)}
              />
            </Col>
          </Row>
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
