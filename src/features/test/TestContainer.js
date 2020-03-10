// import React, { useState } from 'react'
// import { connect } from 'react-redux'
// import { doTestMethod } from 'features/test/testSlice'
// import { ttt } from 'features/processDataFromTextareas/leftTextareaSlice'
// import Textarea from 'react-textarea-autosize'

// import { Container, Row, Col, Button, Badge } from 'react-bootstrap'

// const mapDispatch = { doTestMethod, ttt }

// const TestContainer = ({ doTestMethod, ttt }) => {
//   const [stateTextarea, setStateTextarea] = useState('test')
//   return (
//     <div>
//       <button onClick={() => doTestMethod()}>doTestMethod</button>
//       <Container>
//         <Row>
//           <Col>
//             <Badge pill variant="warning">
//               1_0_
//             </Badge>
//           </Col>
//           <Col>
//             <Badge pill variant="warning">
//               1_1_
//             </Badge>
//           </Col>
//           <Col>
//             <Badge pill variant="warning">
//               1_2_
//             </Badge>
//           </Col>
//           <Col>
//             <Badge pill variant="warning">
//               1_3_
//             </Badge>
//           </Col>
//           <Col>
//             <Badge pill variant="warning">
//               1_4_
//             </Badge>
//           </Col>
//         </Row>
//         <Row>
//           <Col>
//             <Badge pill variant="warning">
//               2_0_
//             </Badge>
//             <Textarea
//               value={stateTextarea}
//               onChange={e => setStateTextarea(e.target.value)}
//             />
//           </Col>
//           <Col>
//             <Badge pill variant="warning">
//               2_1_
//             </Badge>
//             <Textarea
//               value={stateTextarea}
//               onChange={e => setStateTextarea(e.target.value)}
//             />
//           </Col>
//           <Col>
//             <Badge pill variant="warning">
//               2_2_
//             </Badge>
//             <Button variant="secondary" onClick={() => doTestMethod()}>
//               {`<<`} Demo
//             </Button>
//             <br />
//             <br />
//             <Button variant="success" onClick={() => ttt()}>
//               {' '}
//               Get Result {`>>`}
//             </Button>
//             {/* <Button variant="success"  onClick={() => doTestMethod()}> Get Result {`>>`}</Button> */}
//             <br />
//             <br />
//             <Button variant="secondary"> Delete All</Button>
//           </Col>
//           <Col>
//             <Badge pill variant="warning">
//               2_3_
//             </Badge>
//             <Textarea
//               value={stateTextarea}
//               onChange={e => setStateTextarea(e.target.value)}
//             />
//           </Col>
//           <Col>
//             <Badge pill variant="warning">
//               2_4_
//             </Badge>
//             <Textarea
//               value={stateTextarea}
//               onChange={e => setStateTextarea(e.target.value)}
//             />
//           </Col>
//         </Row>
//         <Row>
//           <Col>
//             <Badge pill variant="warning">
//               3_0_
//             </Badge>
//             footer
//           </Col>
//         </Row>
//       </Container>
//       ) }
//     </div>
//   )
// }

// export default connect(null, mapDispatch)(TestContainer)
