import React, { useState } from 'react'
import { useQuery, useLazyQuery } from '@apollo/react-hooks'
import Select from 'react-select'
import { allCategories, leaderboardByCategory } from './graphql'
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
  const [currCategory, setCategory] = useState('')
  const { loading: catLoading, error: catError, data: catData } = useQuery(allCategories)

  const [getNewLeaderboard, { loading: lbLoading, error: lbError, data: lbData }] = useLazyQuery(
    leaderboardByCategory,
    {
      variables: { categoryId: currCategory },
    },
  )

  if (catLoading || lbLoading) return <p>Loading...</p>
  if (catError || lbError) {
    return (
      <p>
        Error:
        {catError}
      </p>
    )
  }
  /* use `catData` in the dropdown menu
     make the dropdown have an "onchange" property whose value is a function that calls
     `setCategory` to set the state of the new category, and also calls `getNewLeaderboard`
  */
  return (
    <Container>
      <h1>Leaderboard: [Category Name]</h1>
      <div>
        <Select styles={customStyles} options={catData}/>
      </div>
      <Row>
        <Col>
          <UserRow>user and score</UserRow>
        </Col>
      </Row>
      {lbData.leaderboardByCategory.map(user => (
        <Row key={user.id}>
          <Col>
            <LeaderboardRow>
              {user.firstName}
              {user.lastName}
            </LeaderboardRow>
          </Col>
        </Row>
      ))}
    </Container>
  )
}

export default Leaderboard
