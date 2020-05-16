import React, { useState } from 'react'
import styled from '@emotion/styled'
import { Flex, Box } from 'reflexbox'
import { Link } from 'gatsby'
import bp from '../../style/breakpoints'
import { Container } from '../common/container'

import colors from '../../style/colors'

const HeaderMobileButton = styled.button`
  ${bp({
    display: ['inline-block', 'none'],
  })}
  border: 0;
  background: translate;
  font-size: 1.5rem;
  cursor: pointer;
`
const Header = styled.header`
  border-bottom: 3px solid ${colors.primary.dark};
  margin-bottom: 2rem;
  background: red;
`

const Nav = styled.nav`
  ${bp({
    display: ['none', 'block'],
  })}
  &.expanded {
    display: block !important;
  }
  ul {
    list-style-type: none;
    margin: 0;
  }
  li {
    padding: 1rem;
    background: white;
    ${bp({
      display: ['block', 'inline-block'],
      marginRight: [0, '2rem'],
    })}
  }
`

export default () => {
  const [isExpanded, setIsExpanded] = useState(false)
  return (
    <Header>
      <Container>
        <Flex>
          <Box width={[1, 2 / 3]}>
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
              </ul>
            </Nav>
          </Box>
          <Box width={[1, 1 / 3]}>
            <Link to="/">Grasshopper</Link>
            <HeaderMobileButton
              onClick={event => {
                event.preventDefault()
                setIsExpanded(!isExpanded)
              }}
            >
              Menu
            </HeaderMobileButton>
          </Box>
        </Flex>
      </Container>
    </Header>
  )
}
