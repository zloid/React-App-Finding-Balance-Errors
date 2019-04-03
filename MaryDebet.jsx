import React, { Component } from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

// import Overlay from 'react-bootstrap/Overlay'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
// import Popover from 'react-bootstrap/Popover'
import Tooltip from 'react-bootstrap/Tooltip'

import { FaSortNumericDown } from 'react-icons/fa'
import { FaSortNumericUp } from 'react-icons/fa'
import { FaHandPointRight } from 'react-icons/fa'
import { FaAngleDoubleLeft } from 'react-icons/fa'
import { FaCrow } from 'react-icons/fa'
// import { FaSkull } from 'react-icons/fa';

import Textarea from 'react-textarea-autosize';


export default class MaryDebet extends Component {
    constructor(props) {
        super(props)
        this.state = {
            textareaOne: '',
            textareaTwo: '',
            textareaThree: '',
            textareaFour: '',
        }

        this.handleTextareaOne = this.handleTextareaOne.bind(this)
        this.handleTextareaTwo = this.handleTextareaTwo.bind(this)
        this.handleTextareaThree = this.handleTextareaThree.bind(this)
        this.handleTextareaFour = this.handleTextareaFour.bind(this)
        this.getResult = this.getResult.bind(this)
        this.demo = this.demo.bind(this)
        this.destroyAll = this.destroyAll.bind(this)
    }

    handleTextareaOne(e) {

        this.setState({
            textareaOne: e.target.value
        })

        let middle = e.target.value
        // let testMiddle = /\s{3}/.test(middle)

        // console.log('testMiddle:', testMiddle)


        if (/\s{4}/.test(middle)) {
            middle = e.target.value.split('\n').filter(e => e !== '').map(e => e.replace(/,/g, '.')).join('\n')

            this.setState({
                textareaOne: middle
            })
        }



    }
    handleTextareaTwo(e) {
        this.setState({
            textareaTwo: e.target.value
        })

        let middle = e.target.value

        if (/\s{4}/.test(middle)) {
            middle = e.target.value.split('\n').filter(e => e !== '').map(e => e.replace(/,/g, '.')).join('\n')

            this.setState({
                textareaTwo: middle
            })
        }

    }
    handleTextareaThree(e) {
        this.setState({
            textareaThree: e.target.value
        })
    }
    handleTextareaFour(e) {
        this.setState({
            textareaFour: e.target.value
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
        window.scrollTo(0, 0);

        const dataFromTextareaOne = this.state.textareaOne
        const arrayFromTextareaOne = dataFromTextareaOne.split('\n').filter(e => e !== '').map(e => e.replace(/,/g, '.'))

        const dataFromTextareaTwo = this.state.textareaTwo
        const arrayFromTextareaTwo = dataFromTextareaTwo.split('\n').filter(e => e !== '').map(e => e.replace(/,/g, '.'))

        // let arrAfterOne = [999]
        // let arrAfterTwo = ['blah']

        // const maxLengthArray = Math.max(arrayFromTextareaOne.length, arrayFromTextareaTwo.length)


        // for (let i = 0; i < maxLengthArray; i++) {
        //     if(arrayFromTextareaOne[i] !== arrayFromTextareaTwo[i]) {                                
        //         arrayFromTextareaOne[i] === undefined ? arrAfterOne.push('—💀—') : arrAfterOne.push(arrayFromTextareaOne[i])
        //         arrayFromTextareaTwo[i] === undefined ? arrAfterTwo.push('—💀—') : arrAfterTwo.push(arrayFromTextareaTwo[i])


        //     }
        // }





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


        let middleOne = this.state.textareaOne.split('\n').filter(e => e !== '').map(e => e.replace(/,/g, '.')).join('\n')
        let middleTwo = this.state.textareaTwo.split('\n').filter(e => e !== '').map(e => e.replace(/,/g, '.')).join('\n')

        this.setState({
            textareaOne: middleOne,
            textareaTwo: middleTwo,
            textareaThree: arrOne.join('\n'),
            textareaFour: arrTwo.join('\n')
        })

    }

    render() {
        return (
            // <div className="con">
        <div>

            
                <Container>

                
                    {/* <FaSkull /> */}
                    {/* <Example /> */}

                    <Row>
                        <Col>

                            <p><FaSortNumericDown /></p>
                            <p><u>
                                {this.state.textareaOne.split('\n').filter(e => e !== '').length}
                            </u></p>
                            <Textarea className="sticky" value={this.state.textareaOne} onChange={this.handleTextareaOne} />
                            {/* <textarea  value={this.state.textareaOne} onChange={this.handleTextareaOne}></textarea> */}

                        </Col>
                        <Col>
                            <p><FaSortNumericDown /></p>
                            {/* <textarea   value={this.state.textareaTwo} onChange={this.handleTextareaTwo}></textarea> */}
                            <p><u>
                                {this.state.textareaTwo.split('\n').filter(e => e !== '').length}
                            </u></p>
                            <Textarea className="sticky" value={this.state.textareaTwo} onChange={this.handleTextareaTwo} />
                        </Col>
                        <Col>
                            <br />
                            <Button onClick={this.demo} variant="secondary" block >
                                <FaAngleDoubleLeft />&nbsp;
                            demo</Button>
                            <br />
                            <Button className="sticky" variant="success" size="lg" block onClick={this.getResult}>Get Result &nbsp;
                                <FaHandPointRight />
                            </Button>
                            <br />

                            <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">KAFKA, DESTROY ALL !</Tooltip>}>

                                <Button onClick={this.destroyAll}
                                    block variant="secondary"
                                >

                                    <FaCrow size={28} />
                                </Button>

                            </OverlayTrigger>

                             

                            <br />
                        </Col>
                        <Col>
                            <p><FaSortNumericUp /></p>

                            <p><u>
                                {this.state.textareaThree.split('\n').filter(e => e !== '').length}
                            </u></p>
                            <Textarea value={this.state.textareaThree} onChange={this.handleTextareaThree} />
                        </Col>
                        <Col>
                            <p><FaSortNumericUp /></p>

                            <p><u>
                                {this.state.textareaFour.split('\n').filter(e => e !== '').length}
                            </u></p>


                            <Textarea value={this.state.textareaFour} onChange={this.handleTextareaFour} />


                        </Col>
                    </Row>
                    <Row>
                        {/* <h2 className="middlePos">App for finding errors in the account balance</h2> */}
                       
                        <Col></Col>
                        <Col></Col>
                        <Col>
                         <p className="middlePos">App for finding errors in the account balance</p>
                        </Col>
                        <Col></Col>
                        <Col></Col>
                    </Row>
                    
                    
                   

                </Container>


                {/* <div className="backdrop_up">  

                    <div className="backdrop"> </div>

                    <div className="backdropInner">999</div>
                    <div className="background"> </div>


                </div>  */}


            </div>


        )
    }
}