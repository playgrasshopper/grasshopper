import React, { useState } from 'react'
import styled from '@emotion/styled'
import { Flex, Box } from 'reflexbox'
import { Link } from 'gatsby'
import bp from '../../style/breakpoints'
import logo from '../../images/grasshopper-black.svg'

const Header = styled.header`
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
  background: red;
  border: 2px solid black;
  &.expanded {
    display: block !important;
  }
  ul {
    list-style-type: none;
    margin: 0;
  }
  li {
    padding: 1rem;
    ${bp({
      display: ['block', 'inline-block'],
      marginRight: [0, '2rem'],
    })}
    a {
      color: black;
      font-weight: bold;
      text-decoration: none;
    }
  }
`

const MobileButton = styled.button`
  border: 3px solid black;
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 60px;
  height: 60px;
  padding: 5px;
  background: red;
  ${bp({
    display: ['block', 'none'],
  })}
`

export default ({ absolute }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  return (
    <Header absolute={absolute}>
      <Flex>
        <Box width={[7 / 9, 2 / 3]}>
          <Nav className={isExpanded && 'expanded'}>
            <ul>
              <li>
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
          </Nav>
        </Box>
        <Box width={[2 / 9, 1 / 3]} textAlign="right">
          <MobileButton
            type="button"
            onClick={event => {
              event.preventDefault()
              setIsExpanded(!isExpanded)
            }}
          >
            <img src={logo} alt="Grasshopper" />
          </MobileButton>
        </Box>
      </Flex>
    </Header>
  )
}
