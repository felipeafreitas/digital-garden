import { PaperPlaneIcon } from "@radix-ui/react-icons";
import { styled } from "@stitches/react";
import { Section } from "../Base/Section";
import SectionHeader from "../SectionHeader";

const Button = styled('a', {
  padding: '0.5rem 2rem',
  margin: 0,
  fontSize: '1rem',
  color: 'white',
  border: '2px double transparent',
  borderRadius: 6,
  backgroundImage: 'linear-gradient(rgb(13, 14, 33), rgb(13, 14, 33)), radial-gradient(circle at left top, rgb(1, 110, 218), rgb(217, 0, 192))',
  backgroundOrigin: 'border-box',
  backgroundClip: 'padding-box, border-box',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  '&:hover': {
    backgroundImage: 'radial-gradient(circle at left top, rgb(1, 110, 218), rgb(217, 0, 192))',
  }
})

export default function Contact() {
  return (
    <Section css={{gap: 50}} id="contact">
      <SectionHeader>
        Get in touch
      </SectionHeader>
      <p>
        Let's work together on your next project.

        Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
      </p>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Button href="mailto:afelipe.freitas@gmail.com">Email me <PaperPlaneIcon /></Button>
      </div>
    </Section>
  )
}