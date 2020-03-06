import React, { useState } from 'react'
// import { Column, Row } from 'styled-grid-system-component'
// import { Button } from 'styled-button-component'
import Textarea from 'react-textarea-autosize'
// import TextareaCuctom from '../TextareaCuctom'
import {
  Container,
  Row,
  Col,
  Button,
  //   OverlayTrigger,
  //   Tooltip,
  Badge,
} from 'react-bootstrap'

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
          <Col>
            <Badge pill variant="warning">
              2_0_
            </Badge>
            <Textarea
              value={stateTextarea}
              onChange={e => setStateTextarea(e.target.value)}
            />
          </Col>
          <Col>
            <Badge pill variant="warning">
              2_1_
            </Badge>
            <Textarea
              value={stateTextarea}
              onChange={e => setStateTextarea(e.target.value)}
            />
          </Col>
          <Col>
            <Badge pill variant="warning">
              2_2_
            </Badge>
            <Button variant="secondary"> {`<<`} Demo</Button>
            <br />
            <br />
            <Button variant="success"> Get Result {`>>`}</Button>
            <br />
            <br />
            <Button variant="secondary"> Delete All</Button>
          </Col>
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
        <Row>
          <Col p1 bgLight>
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
