import React, { Component } from 'react'
import {
  Container,
  Row,
  Col,
  Button,
  OverlayTrigger,
  Tooltip,
  Badge,
} from 'react-bootstrap'

import {
  FaSortNumericDown,
  FaSortNumericUp,
  FaHandPointRight,
  FaAngleDoubleLeft,
  FaCrow,
} from 'react-icons/fa'

import Textarea from 'react-textarea-autosize'
import './MaryDebet.css'

export class MaryDebet extends Component {
  constructor(props) {
    super(props)
    this.state = {
      textareaOne: '',
      textareaTwo: '',
      textareaThree: '',
      textareaFour: '',
      copySuccess: '',
    }

    this.handleTextareaOne = this.handleTextareaOne.bind(this)
    this.handleTextareaTwo = this.handleTextareaTwo.bind(this)
    this.handleTextareaThree = this.handleTextareaThree.bind(this)
    this.handleTextareaFour = this.handleTextareaFour.bind(this)
    this.getResult = this.getResult.bind(this)
    this.demo = this.demo.bind(this)
    this.destroyAll = this.destroyAll.bind(this)
    this.changeTextareaWidthAuto = this.changeTextareaWidthAuto.bind(this)
    // this.setTextareaWidth = this.setTextareaWidth.bind(this)
  }

  copyToClipboardFour = e => {
    this.textArea.select()
    document.execCommand('copy')

    e.target.focus()
    this.setState({ copySuccess: 'ok!' })
  }

  copyToClipboardThree = e => {
    this.textArea3.select()
    document.execCommand('copy')

    e.target.focus()
    this.setState({ copySuccess: 'ok!' })
  }

  //   setTextareaWidth() {
  //     console.log('lengthOfMathNumber > 7')
  //     let a = document.querySelector('textarea').offsetWidth
  //     console.log('a:', a)
  //     ;(() => {
  //       document.querySelector('textarea').style.width = 90 + 'px'
  //     })()
  //   }

  //   componentDidMount() {
  //     this.setTextareaWidth()
  //   }

  handleTextareaOne(e) {
    this.setState({
      textareaOne: e.target.value,
    })

    let middle = e.target.value

    if (/\s{4}/.test(middle)) {
      middle = e.target.value
        .split('\n')
        .filter(e => e !== '')
        .map(e => e.replace(/,/g, '.'))
        .join('\n')

      this.setState({
        textareaOne: middle,
      })
    }
  }
  handleTextareaTwo(e) {
    this.setState({
      textareaTwo: e.target.value,
    })

    let middle = e.target.value

    if (/\s{4}/.test(middle)) {
      middle = e.target.value
        .split('\n')
        .filter(e => e !== '')
        .map(e => e.replace(/,/g, '.'))
        .join('\n')

      this.setState({
        textareaTwo: middle,
      })
    }
  }
  handleTextareaThree(e) {
    this.setState({
      textareaThree: e.target.value,
    })
  }
  handleTextareaFour(e) {
    this.setState({
      textareaFour: e.target.value,
    })
  }

  demo() {
    this.setState({
      textareaOne: '5\n11\n1\n2\n2\n4\n4\n8.5\n9',
      textareaTwo: '1\n2\n2\n3\n4\n8,5\n8.5',
      textareaThree: '',
      textareaFour: '',
    })
  }

  destroyAll() {
    this.setState({
      textareaOne: '',
      textareaTwo: '',
      textareaThree: '',
      textareaFour: '',
    })
  }

  getResult() {
    // this.changeTextareaWidthAuto()

    window.scrollTo(0, 0)

    const dataFromTextareaOne = this.state.textareaOne
    const arrayFromTextareaOne = dataFromTextareaOne
      .split('\n')
      .filter(e => e !== '')
      .map(e => e.replace(/,/g, '.'))

    const dataFromTextareaTwo = this.state.textareaTwo
    const arrayFromTextareaTwo = dataFromTextareaTwo
      .split('\n')
      .filter(e => e !== '')
      .map(e => e.replace(/,/g, '.'))

    //main logic
    let arrOne = arrayFromTextareaOne
    let arrTwo = arrayFromTextareaTwo

    let arrLenMax = Math.max(arrOne.length, arrTwo.length)

    function handleArrays3(arrO, arrT) {
      for (let i = 0; i < arrLenMax; i++) {
        for (let k = 0; k < arrLenMax; k++) {
          if (arrO[i] === arrT[k]) {
            arrOne[i] = arrT[k] = null
            return
          }
        }
      }
    }

    for (let i = 0; i < arrLenMax; i++) {
      handleArrays3(arrOne, arrTwo)

      arrOne = arrOne.filter(e => e !== null)
      arrTwo = arrTwo.filter(e => e !== null)
    }

    let middleOne = this.state.textareaOne
      .split('\n')
      .filter(e => e !== '')
      .map(e => e.replace(/,/g, '.'))
      .join('\n')
    let middleTwo = this.state.textareaTwo
      .split('\n')
      .filter(e => e !== '')
      .map(e => e.replace(/,/g, '.'))
      .join('\n')

    this.setState({
      textareaOne: middleOne,
      textareaTwo: middleTwo,
      textareaThree: arrOne.join('\n'),
      textareaFour: arrTwo.join('\n'),
    })
  }

  changeTextareaWidthAuto() {
    let arrayFromLeftColumnOne = this.state.textareaOne
      .split('\n')
      .map(e => e.replace(/,/g, '.'))

    let arrayFromLeftColumnTwo = this.state.textareaTwo
      .split('\n')
      .map(e => e.replace(/,/g, '.'))

    let maxNumFromTwoLeftColumns = Math.max(
      ...arrayFromLeftColumnOne,
      ...arrayFromLeftColumnTwo
    )

    let lengthOfMathNumber = maxNumFromTwoLeftColumns.toString().split('')
      .length

    console.log(lengthOfMathNumber)

    let allTextAreas = document.querySelectorAll('textarea')

    if (lengthOfMathNumber > 6) {
      console.log('lengthOfMathNumber > 7')
      let a = document.querySelector('textarea').offsetWidth
      console.log('a:', a)
      ;(() => {
        // document.querySelector('textarea').style.width = (lengthOfMathNumber) * 13 + 'px'
        // console.log(document.querySelector('textarea').offsetWidth)

        for (let i = 0, aL = allTextAreas.length; i < aL; i++) {
          allTextAreas[i].style.width = lengthOfMathNumber * 13 + 'px'
        }
      })()
    } else {
      ;(() => {
        // document.querySelector('textarea').style.width = 90 + 'px'
        // console.log(document.querySelector('textarea').offsetWidth)

        for (let i = 0, aL = allTextAreas.length; i < aL; i++) {
          allTextAreas[i].style.width = 90 + 'px'
        }
      })()
    }
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <p>
                <FaSortNumericDown />
              </p>
              <p>
                <u>
                  {
                    this.state.textareaOne.split('\n').filter(e => e !== '')
                      .length
                  }
                </u>
              </p>
              <Textarea
                className="sticky"
                value={this.state.textareaOne}
                onChange={this.handleTextareaOne}
              />
            </Col>
            <Col>
              <p>
                <FaSortNumericDown />
              </p>
              <p>
                <u>
                  {
                    this.state.textareaTwo.split('\n').filter(e => e !== '')
                      .length
                  }
                </u>
              </p>
              <Textarea
                className="sticky"
                value={this.state.textareaTwo}
                onChange={this.handleTextareaTwo}
              />
            </Col>
            <Col>
              <br />
              <Button onClick={this.demo} variant="secondary" block>
                <FaAngleDoubleLeft />
                &nbsp; demo
              </Button>
              <br />
              <Button
                className="sticky"
                variant="success"
                size="lg"
                block
                onClick={this.getResult}
              >
                Get Result &nbsp;
                <FaHandPointRight />
              </Button>
              <br />

              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip id="tooltip-disabled">KAFKA, DESTROY ALL!</Tooltip>
                }
              >
                <Button onClick={this.destroyAll} block variant="secondary">
                  <FaCrow size={28} />
                </Button>
              </OverlayTrigger>

              <br />
            </Col>

            <Col>
              <p>
                <FaSortNumericUp />
              </p>

              <p>
                <u>
                  {
                    this.state.textareaThree.split('\n').filter(e => e !== '')
                      .length
                  }
                </u>
                &nbsp;
                {document.queryCommandSupported('copy') && (
                  <span>
                    <Button
                      variant="success"
                      onClick={this.copyToClipboardThree}
                    >
                      copy
                    </Button>
                  </span>
                )}
              </p>
              <Textarea
                value={this.state.textareaThree}
                onChange={this.handleTextareaThree}
                inputRef={textarea => (this.textArea3 = textarea)}
              />
            </Col>

            <Col>
              <p>
                <FaSortNumericUp />
              </p>

              <p>
                <u>
                  {
                    this.state.textareaFour.split('\n').filter(e => e !== '')
                      .length
                  }
                </u>
                &nbsp;
                {document.queryCommandSupported('copy') && (
                  <span>
                    <Button
                      variant="success"
                      onClick={this.copyToClipboardFour}
                    >
                      copy
                    </Button>
                  </span>
                )}
                {/* <Badge variant="success"> {this.state.copySuccess}</Badge> */}
              </p>
              <Textarea
                value={this.state.textareaFour}
                onChange={this.handleTextareaFour}
                inputRef={textarea => (this.textArea = textarea)}
              />
            </Col>
          </Row>
          <Row>
            <Col />
            <Col />
            <Col>
              <p className="middlePos">
                App for finding errors in the account balance
              </p>
              <h5>
                <OverlayTrigger
                  placement="auto"
                  overlay={
                    <Tooltip id="tooltip-disabled">
                      Numbers in the first left column must be the same as the
                      second column numbers from left. If not match, then we see
                      the difference in the columns from right.
                    </Tooltip>
                  }
                >
                  <Badge variant="primary">How it's work</Badge>
                </OverlayTrigger>
              </h5>
            </Col>
            <Col />
            <Col />
          </Row>
        </Container>

        {/* // //////////////// */}
        {/* <div>
          {document.queryCommandSupported('copy') && (
            <div>
              <button onClick={this.copyToClipboard}>Copy</button>
              {this.state.copySuccess}
            </div>
          )}
        </div> */}
        {/* ////////////// */}
      </div>
    )
  }
}
