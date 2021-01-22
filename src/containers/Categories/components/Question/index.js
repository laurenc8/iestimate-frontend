/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable class-methods-use-this */
/* eslint-disable max-len */
import React, { Component } from 'react'
import {
  PopupboxManager,
  PopupboxContainer,
} from 'react-popupbox'
// import { Link } from 'react-router-dom'
import { CatButton, Input, QuestionButton } from './styles'
import { FormGroup } from '../../../../styles'
import 'react-popupbox/dist/react-popupbox.css'

class Question extends Component {
  openPopupbox() {
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

  render() {
    const popupboxConfig = {
      titleBar: {
        enable: true,
        text: 'Question:',
      },
      fadeIn: true,
      fadeInSpeed: 500,
    }

    return (
      <div>
        <CatButton onClick={this.openPopupbox} type="button">{this.props.name}</CatButton>
        <PopupboxContainer {...popupboxConfig} />
      </div>
    )
  }
}

export default Question
