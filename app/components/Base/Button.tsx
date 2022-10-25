import { styled } from "~/styles/stitches.config";

export const Button = styled('button', {
  backgroundColor: '$gray100',
  color: '$black',
  border: 0,
  borderRadius: 6,
  height: 45,
  padding: '0 20px',
  boxShadow: 'rgb(0 0 0 / 14%) 0px 2px 10px',
  fontSize: '1rem',
  fontWeight: 500,
  transition: '0.2s',
  opacity: 0.6,
  cursor: 'pointer',
  '&:hover': {
    opacity: 0.9
  },
  variants: {
    outlined: {
      true: {
        border: '2px solid $gray100',
        backgroundColor: 'transparent',
        color: '$gray100'
      }
    }
  }
})