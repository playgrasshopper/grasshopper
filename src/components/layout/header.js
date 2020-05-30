import React, { useState } from 'react'
import styled from '@emotion/styled'
import { Flex, Box } from 'reflexbox'
import { Link } from 'gatsby'
import bp from '../../style/breakpoints'
import logo from '../../images/grasshopper-black.svg'
import bang from '../../images/bang.svg'

const Header = styled.header`
  ${bp({
    height: ['100px', 'auto'],
  })}
  padding: 1rem;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  position: relative;
  font-family: 'Comic Neue', cursive;
  ${props =>
    props.absolute &&
    `
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;`}
`

const Nav = styled.nav`
  ${bp({
    display: ['none', 'block'],
  })}
  margin-left: -300px;
  margin-right: -300px;
  padding-left: 700px;
  margin-top: 40px;
  z-index: 1;
  background: red;
  border: 2px solid black;
  transform: rotate(1.5deg);
  &.expanded {
    display: block !important;
  }
  ul {
    list-style-type: none;
    margin: 0 auto;
  }
  li {
    padding: 1rem;
    display: inline-block;
    margin-right: 2rem;
    &.home-link {
      display: none;
    }
    a {
      color: black;
      font-weight: bold;
      text-decoration: none;
    }
  }
`

const MobileNav = styled.nav`
  ${bp({
    display: ['block', 'none'],
  })}
  ${props =>
    props.isExpanded
      ? 'margin-top: 50px;'
      : 'margin-top: -1000px;'}
  transition: margin-top 0.5s ease-in;
  margin-left: -300px;
  margin-right: -300px;
  padding-left: 350px;
  transform: rotate(10deg);
  border: 2px solid black;
  z-index: 1;
  background: red;
  ul {
    list-style-type: none;
    margin: 0 auto;
  }
  a {
    color: black;
    font-weight: bold;
    text-decoration: none;
  }
`

const MobileButton = styled.button`
  ${bp({
    display: ['block', 'none'],
  })}
  position: absolute;
  ${props =>
    props.isExpanded
      ? `transform: rotate(195deg);`
      : `transform: rotate(-15deg);`}
  transition: transform 0.2s ease-in;
  background: url(${bang}) no-repeat;
  border: 0;
  width: 230px;
  height: 120px;
  font-family: 'Comic Neue', cursive;
  font-weight: bold;
  font-size: 1.5rem;
  padding-right: 2rem;
  right: 0;
  cursor: pointer;
  z-index: 10;
`

const Bang = styled(Link)`
  ${bp({
    display: ['none', 'block'],
  })}
  background: url(${bang}) no-repeat;
  width: 500px;
  height: 300px;
  padding-top: 100px;
  font-weight: bold;
  padding-left: -25px;
  font-size: 3.5rem;
  text-align: center;
  color: black;
  text-decoration: none;
  position: absolute;
  top: -30px;
  left: -20px;
  transform: rotate(-10deg);
  z-index: 10;
`

const Menu = () => (
  <ul>
    <li className="home-link">
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/rules">The rules</Link>
    </li>
    <li>
      <Link to="/players">Players</Link>
    </li>
    <li>
      <Link to="/leagues">Leagues</Link>
    </li>
  </ul>
)

export default ({ absolute }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  return (
    <Header absolute={absolute}>
      <Bang to="/">
        <span>grasshopper</span>
      </Bang>
      <MobileButton
        type="button"
        isExpanded={isExpanded}
        onClick={event => {
          event.preventDefault()
          setIsExpanded(!isExpanded)
        }}
      >
        grasshopper
      </MobileButton>
      <Nav>
        <Menu />
      </Nav>
      <MobileNav isExpanded={isExpanded}>
        <Menu />
      </MobileNav>
    </Header>
  )
}
