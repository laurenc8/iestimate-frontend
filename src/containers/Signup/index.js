import React from 'react'
import {
  Container, Input, Col, Row, Button, FormGroup,
} from './styles'

// how to use bootstrap styling for the form without overriding the navbar styling

const Signup = () => {
  const formFields = ['email', 'username', 'password']
  return (
    <Container>
      <h1>Sign Up!</h1>
      <Row>
        <Col>
          <FormGroup>
            <Input type="firstName" name="firstName" placeholder="First Name" />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Input type="lastName" name="lastName" placeholder="Last Name" />
          </FormGroup>
        </Col>
      </Row>
      {formFields.map(e => (
        <Row>
          <Col>
            <FormGroup>
              <Input type={e} name={e} placeholder={e.charAt(0).toUpperCase() + e.slice(1)} />
            </FormGroup>
          </Col>
        </Row>
      ))}
      <Button>Sign Up!</Button>
    </Container>
  )
}

export default Signup
