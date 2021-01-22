import React, { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { useHistory } from 'react-router-dom'
import {
  Container, Input, Col, Row, Button, FormGroup, Redirect,
} from '../../styles'
import { REGISTER } from './graphql'

const Signup = () => {
  const history = useHistory()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [register] = useMutation(REGISTER, {
    variables: {
      input: {
        firstName,
        lastName,
        username,
        email,
        password: pass,
      },
    },
    onCompleted: ({ register: { token } }) => {
      localStorage.setItem('token', token)
      history.push('/categories')
    },
  })
  return (
    <Container>
      <h1>Create Your Profile</h1>
      <Row>
        <Col>
          <FormGroup>
            <Input type="firstName" name="firstName" placeholder="First Name" onChange={e => setFirstName(e.target.value)} value={firstName} />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Input type="lastName" name="lastName" placeholder="Last Name" onChange={e => setLastName(e.target.value)} value={lastName} />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <FormGroup>
            <Input type="email" name="email" placeholder="Email" onChange={e => setEmail(e.target.value)} value={email} />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <FormGroup>
            <Input type="username" name="username" placeholder="Username" onChange={e => setUsername(e.target.value)} value={username} />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <FormGroup>
            <Input type="password" name="password" placeholder="Password" onChange={e => setPass(e.target.value)} value={pass} />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Button onClick={register}>Sign Up!</Button>
      </FormGroup>
      <Redirect href="/login">Aready have an account? Sign in here!</Redirect>
    </Container>
  )
}

export default Signup
