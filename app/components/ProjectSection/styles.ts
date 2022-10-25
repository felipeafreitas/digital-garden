import { styled } from "~/styles/stitches.config"
import { Section } from "../Base/Section"

export const PortfolioGrid = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: '45px',
  overflowY: 'hidden',
  overflowX: 'hidden',
  paddingRight: 45,
  whiteSpace: 'nowrap',
  paddingLeft: 'calc((100vw - 1100px) / 2)',
  overflowScrolling: 'touch',
  ':active': {
    cursor: 'grabbing',
  }
})

export const LeftButtonWrapper = styled('div', {
  position: 'absolute',
  top: '1200px',
  left: '15px',
  'button': {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    height: 45,
    width: 45,
    borderRadius: 6,
    border: 0,
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      marginTop: 1,
      marginRight: 1
    }
  }
})

export const RightButtonWrapper = styled('div', {
  position: 'absolute',
  top: '1200px',
  right: '15px',
  'button': {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    height: 45,
    width: 45,
    borderRadius: 6,
    border: 0,
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      marginTop: 1,
      marginRight: 1
    }
  },
})

export const PortfolioSection = styled(Section, {
  maxWidth: '100vw',
})