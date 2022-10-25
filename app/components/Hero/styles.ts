import { styled } from "~/styles/stitches.config"

export const SocialIconsContainer = styled('div', {
  color: "White",
  display: 'flex', 
  flexDirection: 'row', 
  gap: 10,
  'svg': {
    fontSize: '2rem',
  }
})

export const Link = styled('a', {
	textDecoration: 'none',
	fontWeight: 700,
  position: 'relative',
  fontSize: '2rem',
  cursor: 'pointer',
  '&:hover': {
    '&::before': {
      bottom: 0,
      height: '100%'
    }
  },
  '&::before': {
    content: '',
    backgroundColor: '$pink',
    position: 'absolute',
    left: 0,
    bottom: 3,
    width: '100%',
    height: '8px',
    zIndex: -1,
    transition: 'all .3s ease-in-out'
  }
})

export const MainButton = styled('a', {
  display: 'flex',
  alignItems: 'center',
  gap: 10,
  border: 0,
  borderRadius: 6,
  backgroundColor: '#4158D0',
  backgroundImage: 'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)',
  color: 'white',
  fontSize: '1rem',
  padding: '2px 20px',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  '&:hover': {
    transition: 'all 0.3s ease',
    boxShadow: 'rgba(1, 134, 218, 0.5) 0px 0px 20px 0px',
  }
})