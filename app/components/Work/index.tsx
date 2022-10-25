import { Section } from "../Base/Section"
import SectionHeader from "../SectionHeader"
import { styled } from "~/styles/stitches.config"
import Pluga1 from '../../../public/static/pluga1.svg'
import Pluga2 from '../../../public/static/pluga2.svg'
import Pluga3 from '../../../public/static/pluga3.png'
import Pluga4 from '../../../public/static/pluga4.png'
import { ExternalLinkIcon } from "@radix-ui/react-icons"

const CardImage = styled('img', {
  height: 245,
  width: 300,
  border: '1 px solid rgba(255, 255, 255, 0.73)',
  borderRadius: 6,
  objectFit: 'cover',
})

const Button = styled('a', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 5
})


export default function Work() {
  return (
    <Section id="work">
      <SectionHeader>
        Work Experience
      </SectionHeader>
      <div style={{
          display: 'flex', 
          flexDirection: 'row', 
          gap: 30,
        }}>
          <div style={{display: 'flex', flexDirection: 'column', flex: 1}}>
            <h3>Pluga.co</h3>
            <br />
            <br />
            <p>
              Pluga integrates essential tools for business, helping them to save time in daily routines. As a Frontend Engineer, I'm responsible for translating designs into high quality code, developing new user-facing features and components.   
            </p>
            <br />
            <br />
            <Button href="http://www.pluga.co" target="_blank" rel="noreferrer">Pluga.co<ExternalLinkIcon /></Button>
          </div>
          <div style={{display: 'flex', flex: 2, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', gap: 30}}>
            <CardImage src={Pluga1}/>
            <CardImage src={Pluga2} />
            <CardImage src={Pluga3} />
            <CardImage src={Pluga4}/>
          </div>
      </div>
    </Section>
  )
}