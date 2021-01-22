/* eslint-disable max-len */
import React, { useReducer } from 'react'
import { NavLink } from 'reactstrap'
import { Navbar, Nav } from 'react-bootstrap'
// eslint-disable-next-line import/no-unresolved
import './styles.css'
import sun from '../../assets/sunny.png'
import rainy from '../../assets/rainy.png'
import snow from '../../assets/snow.webp'
import cloudy from '../../assets/cloudy.png'

function NavBar() {
  function reducer(state, action) {
    switch (action.type) {
      case 'success':
        return { weather: action.data, hasRequested: true }
      case 'fail':
        return { weather: null, hasRequested: true }
      default:
        return state
    }
  }

  const [{ weather, hasRequested }, dispatch] = useReducer(reducer, { weather: null, hasRequested: false })
  if (!hasRequested) {
    // eslint-disable-next-line no-unused-vars
    new Promise((resolve, reject) => { navigator.geolocation.getCurrentPosition(resolve) })
      .then(loc => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${loc.coords.latitude}&lon=${loc.coords.longitude}&appid=db5bbba816b58757082ce2230c7754a6&units=imperial`)
          .then(result => result.json())
          .then(result => dispatch({ type: 'success', data: result }))
      })
      .catch(() => dispatch({ type: 'fail' }))
  }

  let weatherPic = null
  if (weather !== null) {
    const pics = {
      Clear: <img src={sun} alt="clear" width="30px" />,
      Rain: <img src={rainy} alt="rain" width="30px" />,
      Snow: <img src={snow} alt="snow" height="30px" />,
      Clouds: <img src={cloudy} alt="clouds" height="30px" />,
    }
    weatherPic = pics[weather.weather[0].main]
  }

  return (
    <div className="App">
      <Navbar expand="lg" style={{ height: '50px' }}>
        <Navbar.Brand>iEstimate</Navbar.Brand>
        <Nav>
          {weatherPic}
          <NavLink href="/login">Login</NavLink>
          <NavLink href="/leaderboard">Leaderboard</NavLink>
          <NavLink href="/">Categories</NavLink>
        </Nav>
      </Navbar>
    </div>
  )
}

export default NavBar
