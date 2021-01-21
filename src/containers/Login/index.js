import React from 'react'
import {
  Container, Input, Col, Row, Button, FormGroup, Redirect,
} from '../../styles'

const Login = () => {
  const formFields = ['username', 'password']
  return (
    <Container>
      <h1>Welcome Back!</h1>
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
        <Button>Sign in</Button>
      </FormGroup>
      <Redirect href="/signup">Don&apos;t have an account? Sign up here!</Redirect>
    </Container>
  )
}

export default Login
