import React from 'react'
import styled from '@emotion/styled'
import { Container } from '../../common/container'
import bp from '../../../style/breakpoints'
import colors from '../../../style/colors'

const Hero = styled.div`
  ${bp({
    fontSize: ['2rem', '3rem'],
    textAlign: ['left', 'right'],
    padding: ['2rem 0', '3rem 0'],
  })}
  color: white;
  background: ${colors.logothing.red};
`

export default ({ children }) => (
  <Hero>
    <Container>{children}</Container>
  </Hero>
)
