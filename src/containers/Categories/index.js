import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { Title } from './styles'
import Question from './components/Question/index'
import { allCategories } from './graphql'

const Categories = () => {
  const { loading, error, data } = useQuery(allCategories)
  if (loading) return <p>Loading...</p>
  if (error) {
    return (
      <p>
        Error:
        {error}
      </p>
    )
  }
  return (
    <center>
      <Title>Categories</Title>
      {data.allCategories.map(category => (
        <div key={category.id}>
          <Question categoryId={category.id} title={category.title} />
          <br />
        </div>
      ))}
    </center>
  )
}

export default Categories
