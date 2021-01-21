import React from 'react'
import {
  Container, Input, Col, Row, Button, FormGroup, Redirect,
} from '../../styles'

const Signup = () => {
  const formFields = ['email', 'username', 'password']
  return (
    <Container>
      <h1>Create Your Profile</h1>
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
      <FormGroup>
        <Button>Sign Up!</Button>
      </FormGroup>
      <Redirect href="/signup">Aready have an account? Sign in here!</Redirect>
    </Container>
  )
}

export default Signup
