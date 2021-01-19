import React from 'react'
import { Title, CatButton } from './styles'

const categories = ['cat1', 'cat2', 'cat3', 'cat4']

const Categories = () => (
  <center>
    <Title>Categories</Title>
    {categories.map(category => (
      <div>
        <CatButton type="button">
          {category}
        </CatButton>
        <br />
      </div>
    ))}
  </center>
)

export default Categories
