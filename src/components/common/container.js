import bp from '../../style/breakpoints'
import styled from '@emotion/styled'

const Container = styled.div`
  ${bp({
    maxWidth: ['100%', '100%', '1100px'],
    margin: ['0 1rem', '0 1rem', '0 auto'],
  })}
`

const TextContainer = styled.div`
  ${bp({
    maxWidth: ['100%', '100%', '60ch'],
    margin: ['0 1rem', '0 1rem', '0 auto'],
  })}
`

export { Container, TextContainer }
