import React from 'react'
import { Title } from './styles'
import Question from './components/Question/index'

const categories = ['cat1', 'cat2', 'cat3', 'cat4']

const Categories = () => (
  <center>
    <Title>Categories</Title>
    {categories.map(category => (
      <div>
        <Question name={category} />
        <br />
      </div>
    ))}
  </center>
)

export default Categories
