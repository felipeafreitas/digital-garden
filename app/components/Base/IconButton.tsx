import { styled } from "~/styles/stitches.config"

const IconContainer = styled('a', {
  height: 45,
  width: 45,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 6,
  transition: '0.3s',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    border: '1px solid white'
  }
})

type IconButtonProps = {
  icon: React.ReactNode,
} & React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>

export default function IconButton({ icon, ref, ...props }: IconButtonProps) {
  return (
    <IconContainer {...props}>{icon}</IconContainer>
  )
}