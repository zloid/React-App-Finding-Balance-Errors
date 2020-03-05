import React from 'react'
import { Column, Row } from 'styled-grid-system-component'

const AppRTK = () => {
  return (
    <div>
      <Row p3></Row>
      <Row bgDarker p3 m3>
        <Column p3 bgLight>
          1.0
        </Column>
        <Column p3 bgDark>
          1.1
        </Column>
        <Column p3 bgLight>
          <button>button 1.2</button>
        </Column>
        <Column p3 bgDark>
          1.3
        </Column>
        <Column p3 bgLight>
          1.4
        </Column>
      </Row>
      {/*  */}
      <Row></Row>
      {/*  */}
      <Row bgDarker p3 m3>
        <Column p3 bgLight>
          <textarea>textarea 2.0</textarea>
        </Column>
        <Column p3 bgDark>
          <textarea>textarea 2.1</textarea>
        </Column>
        <Column p3 bgLight>
          <button>button 2.2</button>
        </Column>
        <Column p3 bgDark>
          <textarea>textarea 2.3</textarea>
        </Column>
        <Column p3 bgLight>
          <textarea>textarea 2.4</textarea>
        </Column>
      </Row>
      {/*  */}
      <Row></Row>
      {/*  */}
      <Row bgDarker p3 m3>
        <Column p3 bgLight>
          Footer 3.0
        </Column>
      </Row>
    </div>
  )
}

export default AppRTK
