import { styled } from "@stitches/react"

const Container = styled('div', {
  padding: 30,
  display: 'flex',
  justifyContent: 'center',
  marginTop: 200,
  'a': {
    fontSize: '1rem'
  }
})

export default function Footer() {
  return (
    <Container>
      <a href="https://github.com/felipeafreitas/digital-garden-client">
        Designed and built by Felipe Freitas
      </a>
    </Container>
  )
}