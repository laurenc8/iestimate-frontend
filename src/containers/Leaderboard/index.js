import React from 'react'
import {
  Container, Col, Row, LeaderboardRow, UserRow,
} from '../../styles'
import Dropdown from '../Dropdown/index.js'

const Leaderboard = () => {
  const top10Users = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
  return (
    <Container>
      <h1>Leaderboard: [Category Name]</h1>
      <Row>
        <Col>
          <UserRow>user and score</UserRow>
        </Col>
      </Row>
      {top10Users.map(user => (
        <Row>
          <Col>
            <LeaderboardRow>{user}</LeaderboardRow>
          </Col>
        </Row>
      ))}
    </Container>
  )
}

export default Leaderboard
