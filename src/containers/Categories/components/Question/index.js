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
import { CatButton } from './styles'
import 'react-popupbox/dist/react-popupbox.css'

class Question extends Component {
  openPopupbox() {
    const content = (
      <div>
        <h2>Question:</h2>
        {/* <Link to="/goal">
          <CatButton type="button">link</CatButton>
        </Link> */}
        <CatButton type="button">Next Question</CatButton>
      </div>
    )
    PopupboxManager.open({ content })
  }

  render() {
    const popupboxConfig = {
      titleBar: {
        enable: true,
        text: this.props.name,
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
