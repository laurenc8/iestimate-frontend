import React from 'react'
/*import {
    FormBox, FormTitle, SmallFormField, BigFormField
} from './styles'*/

import { Container } from 'react-bootstrap'
import { FormGroup, Input, Button, Row, Col } from 'reactstrap'

// need to figure out how to use bootstrap styling for the form without overriding the navbar styling
import 'bootstrap/dist/css/bootstrap.min.css';

const Signup = () => {
    return (
        <Container align='center'>
            <h1>Sign Up!</h1>
            <Row>
                <Col>
                    <FormGroup>
                        <Input type="firstName" name="firstName" id="examplefirstName" placeholder="First Name" />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <Input type="lastName" name="lastName" id="examplelastName" placeholder="Last Name" />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col>
                    <FormGroup>
                        <Input type="username" name="username" id="exampleusername" placeholder="Username" />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col>
                    <FormGroup>
                        <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col>
                    <FormGroup>
                        <Input type="password" name="password" id="examplePassword" placeholder="Password" />
                    </FormGroup>
                </Col>
            </Row>
            <Button>Sign Up!</Button>
        </Container>   

    )
}

export default Signup
