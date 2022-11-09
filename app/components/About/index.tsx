import { Section } from "../Base/Section"
import SectionHeader from "../SectionHeader"
import TechnologiesContainer from "./TechnologiesContainer"
import ProfilePic from '../../assets/images/profile.jpeg'
import { styled } from "~/styles/stitches.config"

const Image = styled('img', {
  borderRadius: 6
})

export default function About() {
  return (
    <Section>
      <SectionHeader>
        About Me
      </SectionHeader>
      <div style={{
          display: 'flex', 
          flex: 1, 
          flexDirection: 'row', 
          alignItems: 'center', 
          borderRadius: 6, 
          padding: 50,
          gap: 30
        }}>
        <div style={{display: 'flex', flexDirection: 'column', width: '50%'}}>
          <p>
            Hello! My name is Felipe and I enjoy creating things that live on the internet. My interest in web development started back in 2010, when I started to build my first pages using HTML and CSS.
          </p>
          <br />
          <p>
            Fast-forward to today, my focus these days is building accessible, inclusive interfaces and digital experiences at Pluga. 
          </p>
          <br />
          <p>
            Comfortable building things from scratch, crazy about clean code and constructive feedback, very communicative, and love to document everything. I'm always focused on delivering interactive, usability, scalable, and visually appealing applications.
          </p>
        </div>
        <div style={{
          display: 'flex', 
          flexDirection: 'column', 
          width: '50%'
        }}>

          <Image src={ProfilePic}/>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20}}>
        <p style={{textAlign: 'center'}}>Here are the main technologies I've been working recently:</p>
        <TechnologiesContainer />
      </div>
    </Section>
  )
}