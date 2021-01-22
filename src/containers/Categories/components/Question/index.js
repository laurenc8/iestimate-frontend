/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable class-methods-use-this */
/* eslint-disable max-len */
import React from 'react'
import {
  PopupboxManager,
  PopupboxContainer,
} from 'react-popupbox'
// import { Link } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'
import { CatButton, Input, QuestionButton } from './styles'
import { FormGroup } from '../../../../styles'
import 'react-popupbox/dist/react-popupbox.css'
import { randomQuestionByCategory } from './graphql'

const openPopupbox = () => {
  const content = (
    <div>
      {/* <Link to="/goal">
        <CatButton type="button">link</CatButton>
      </Link> */}
      <FormGroup>
        <Input placeholder="Answer" />
      </FormGroup>
      <QuestionButton type="button">Next Question</QuestionButton>
    </div>
  )
  PopupboxManager.open({ content })
}

const Question = props => {
  const { loading, error, data } = useQuery(randomQuestionByCategory, { variables: { categoryId: props.categoryId } })

  if (loading) return <p>Loading...</p>
  if (error) {
    // eslint-disable-next-line no-console
    console.log(error)
    return (
      <p>
        Error:
      </p>
    )
  }
  const popupboxConfig = {
    titleBar: {
      enable: true,
      text: `Question: ${data.randomQuestionByCategory.question}`,
    },
    fadeIn: true,
    fadeInSpeed: 500,
  }
  return (
    <div>
      <CatButton onClick={openPopupbox} type="button">{props.title}</CatButton>
      <PopupboxContainer {...popupboxConfig} />
    </div>
  )
}

export default Question
