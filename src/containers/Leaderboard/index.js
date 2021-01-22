/* eslint-disable max-len */
import React, { useState } from 'react'
import { useQuery, useLazyQuery } from '@apollo/react-hooks'
import { useHistory } from 'react-router-dom'
import { allCategories, leaderboardByCategory } from './graphql'
import {
  Container, Col, Row, LeaderboardRow, UserRow,
} from '../../styles'
import { Left, Right } from './styles'

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
    const transition = 'opacity 300ms'

    return { ...provided, opacity, transition }
  },
}

const Leaderboard = () => {
  const history = useHistory()
  const token = localStorage.getItem('token')
  if (!token) {
    history.push('/login')
  }
  const [currCategory, setCategory] = useState('')
  const { loading: catLoading, error: catError, data: catData } = useQuery(allCategories)

  const [getNewLeaderboard, {
    loading: lbLoading,
    error: lbError,
    data: lbData,
    called,
  }] = useLazyQuery(
    leaderboardByCategory,
    {
      variables: { categoryId: currCategory },
    },
  )

  const handleChange = e => {
    setCategory(e.target.value)
    getNewLeaderboard()
  }

  if (catLoading || lbLoading) return <p>Loading...</p>
  if (catError || lbError) {
    return (
      <p>
        Error:
        {catError}
      </p>
    )
  }

  if (called && lbData) {
    return (
      <Container>
        <h1>Leaderboard</h1>
        <div>
          <select styles={customStyles} onChange={handleChange}>
            <option disabled>Select a Category</option>
            {catData.allCategories.map(category => (
              <option key={category.id} value={category.id}>
                {category.title}
              </option>
            ))}
          </select>
        </div>
        <Row>
          <Col>
            <UserRow>
              <Left>user</Left>
              <Right>score</Right>
            </UserRow>
          </Col>
        </Row>
        {lbData.leaderboardByCategory.map(user => (
          <Row key={user.id}>
            <Col>
              <LeaderboardRow>
                <Left>{`${user.username}`}</Left>
                <Right>{`${user.scoreByCategory.score}`}</Right>
              </LeaderboardRow>
            </Col>
          </Row>
        ))}
      </Container>
    )
  }

  return (
    <Container>
      <h1>Leaderboard</h1>
      <div>
        <select styles={customStyles} onChange={handleChange}>
          <option disabled>Select a Category</option>
          {catData.allCategories.map(category => (
            <option key={category.id} value={category.id}>
              {category.title}
            </option>
          ))}
        </select>
      </div>
      <Row>
        <Col>
          <UserRow>Username and Score</UserRow>
        </Col>
      </Row>
    </Container>
  )
}

export default Leaderboard
