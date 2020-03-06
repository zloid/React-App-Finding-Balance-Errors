import React, { useState } from 'react'
import { Column, Row } from 'styled-grid-system-component'
import { Button } from 'styled-button-component'
import Textarea from 'react-textarea-autosize'

// import TextareaCuctom from '../TextareaCuctom'

const Layout = () => {
  const [stateTextarea, setStateTextarea] = useState('test')
  return (
    <div>
       <Row p1></Row>
      <Row bgDarker p1 m1>
        <Column p1 bgLight m1>
          <Button disabled outline info>
            1_0_
          </Button>
        </Column>
        <Column p1 bgLight m1>
          <Button disabled outline info>
            1_1_
          </Button>
        </Column>
        <Column p1 bgLight m1>
          <Button disabled outline info>
            1_2_
          </Button>
          <Button primary> {`<<`} Demo</Button>
        </Column>
        <Column p1 bgLight m1>
          <Button disabled outline info>
            1_3_
          </Button>
        </Column>
        <Column p1 bgLight m1>
          <Button disabled outline info>
            1_4_
          </Button>
        </Column>
      </Row>
      <Row bgDarker p1 m1>
        <Column p1 bgLight m1>
          <Button disabled outline info>
            2_0_
          </Button>
          <Textarea
            value={stateTextarea}
            onChange={e => setStateTextarea(e.target.value)}
          />
        </Column>
        <Column p1 m1 bgLight>
          <Button disabled outline info>
            2_1_
          </Button>
          <Textarea
            value={stateTextarea}
            onChange={e => setStateTextarea(e.target.value)}
          />
        </Column>
        <Column p1 m1 bgLight>
          <Button disabled outline info>
            2_2_
          </Button>
          <Button success> Get Result {`>>`}</Button>
          <br />
          <br />
          <Button primary> Delete All</Button>
        </Column>
        <Column p1 bgLight m1>
          <Button disabled outline info>
            2_3_
          </Button>
          <Textarea
            value={stateTextarea}
            onChange={e => setStateTextarea(e.target.value)}
          />
        </Column>
        <Column p1 bgLight m1>
          <Button disabled outline info>
            2_4_
          </Button>
          <Textarea
            value={stateTextarea}
            onChange={e => setStateTextarea(e.target.value)}
          />
        </Column>
      </Row>
      <Row bgDarker p1 m1>
        <Column p1 bgLight>
          <Button disabled outline info>
            3_0_
          </Button>
          footer
        </Column>
      </Row>
      {`================================================================`}
 


    </div>
  )
}

export default Layout
