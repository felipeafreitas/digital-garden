import { Section } from "../Base/Section"

import { LinkedInLogoIcon, GitHubLogoIcon, EnvelopeClosedIcon, DownloadIcon } from '@radix-ui/react-icons'

import IconButton from "../Base/IconButton"
import { MainButton, SocialIconsContainer, Link } from "./styles"

const copyEmail = () => {
  navigator.clipboard.writeText('afelipe.freitas@gmail.com')
}

export default function Hero() {
  return (
    <Section style={{ flexDirection: 'row' }} id="about">
      <div style={{ display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center',   gap: '30px', }}>
        <p style={{fontSize: '2rem'}}>
          Olá! I'm <span style={{fontSize: '2rem', fontWeight: 800}}>Felipe Freitas</span> — curious web developer based in somewhere in Brasil. Interested in music, football, chess, user interfaces, productiity, social ciences. Currently working as frontend engineer at <Link href="http://www.pluga.co" target="_blank">Pluga.co</Link>.
        </p>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
          <MainButton href="https://docs.google.com/document/d/1c-nKHm8BIgJHM8xKZAnqP3kQ0ENWdC9oa41tlU8khvs/edit?usp=sharing" target="_blank">Download my Resume <DownloadIcon /></MainButton>
          <SocialIconsContainer>
            <IconButton 
              href="https://www.linkedin.com/in/affreitas/" 
              target="_blank" 
              icon={<LinkedInLogoIcon />} 
            />
            <IconButton 
            href="https://github.com/felipeafreitas" 
            target="_blank"
            icon={<GitHubLogoIcon/>}
            />
            <IconButton
              onClick={copyEmail}
              target="_blank"
              icon={<EnvelopeClosedIcon />}
            />
          </SocialIconsContainer>
        </div>
      </div>
    </Section>
  )
}