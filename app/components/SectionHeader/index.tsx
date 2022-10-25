import { styled } from "~/styles/stitches.config"

const Wrapper = styled('div', {
  textAlign: 'center',
  marginBottom: '1rem',
  marginTop: '5rem',
  'span': {
    fontSize: 50,
    fontWeight: 700
  }
})

const HorizontalLine1 = styled('hr', {
  backgroundColor: '$mainBrown',
  border: 0,
  width: '50%',
  height: 5,
  maxWidth: 430,
  clear: 'both'
})

const HorizontalLine2 = styled('hr', {
  backgroundColor: '$mainBrown',
  width: 45,
  opacity: 0.3
})

type SectionHeaderProps = {
  children: JSX.Element | string
}

export default function SectionHeader({ children }: SectionHeaderProps) {
  return (
    <Wrapper>
      {/* <HorizontalLine1 /> */}
      <HorizontalLine2 />
      <span>{children}</span>
    </Wrapper>
  )
}