import { styled } from "~/styles/stitches.config";

export const Card = styled('img', {
  display: 'flex',
  flexGrow: 1,
  placeContent: 'center',
  height: '400px',
  width: '400px',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  borderRadius: '5px',
  marginBottom: 10,
  objectFit: 'none',
  transition: '0.3s',
  '&:hover': {
    filter: 'grayscale(100%) contrast(1)',
  }
})