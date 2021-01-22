import React, { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { useHistory } from 'react-router-dom'
import {
  Container, Input, Button, Row, Col, FormGroup, Redirect,
} from '../../styles'
import { LOGIN } from './graphql'

const Login = () => {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [login, { loading, error }] = useMutation(LOGIN, {
    variables: {
      email,
      password: pass,
    },
    onCompleted: ({ login: { token } }) => {
      localStorage.setItem('token', token)
      history.push('/categories')
    },
  })
  return (
    <Container>
      <h1>Welcome Back!</h1>
      <Row>
        <Col>
          <FormGroup>
            <Input type="email" name="email" onChange={e => setEmail(e.target.value)} value={email} />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <FormGroup>
            <Input type="password" name="password" onChange={e => setPass(e.target.value)} value={pass} />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Button onClick={login}>Sign in</Button>
      </FormGroup>
      <Redirect href="/signup">Don&apos;t have an account? Sign up here!</Redirect>
    </Container>
  )
}

export default Login

/*
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
*/
