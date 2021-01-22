import React from 'react'
import Select from "react-select"
import {
  Container, Col, Row, LeaderboardRow, UserRow,
} from '../../styles'

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: '1px dotted pink',
    color: state.isSelected ? 'red' : 'blue',
    padding: 20,
  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />
    width: 200,
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1
    const transition = "opacity 300ms"

    return { ...provided, opacity, transition }
  },
}


const Leaderboard = () => {
  const top10Users = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
  const categories = [
    { label:'cat1', value: 1 },
    { label:'cat2', value: 2 },
    { label:'cat3', value: 3 }
  ]
  return (
    <Container>
      <h1>Leaderboard: [Category Name]</h1>
      <div>
        <Select styles={customStyles} options={categories}/>
      </div>
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
