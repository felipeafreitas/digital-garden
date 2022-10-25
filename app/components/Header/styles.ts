import { styled } from "~/styles/stitches.config"
import { Container } from "../Base/Container"

export const Box = styled(Container, {
  display: 'inline-flex',
  flexDirection: 'row',
  width: '100%',
  padding: '30px 0',
  alignContent: 'center',
  justifyContent: 'space-between',
})

export const Menu = styled('nav', {
  display: 'inline-flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  gap: 45,
  'a': {
    fontSize: '1rem'
  }
})

export const Link = styled('a', {
  position: 'relative',
  textTransform: 'capitalize',
  '&::before': {
    content: '',
    position: 'absolute',
    width: '100%',
    height: 2,
    backgroundColor: 'white',
    bottom: 0,
    left: 0,
    transformOrigin: 'right',
    transform: 'scaleX(0)',
    transition: 'transform .3s ease-in-out'
  },
  '&:hover': {
    '&::before': {
      transformOrigin: 'left',
      transform: 'scaleX(1)',
    }
  }
})