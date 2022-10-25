
import { Card } from "../Base/Card"
import SectionHeader from "../SectionHeader"
import * as React from 'react'
import { ChevronLeftIcon, ChevronRightIcon, ExternalLinkIcon, GitHubLogoIcon } from "@radix-ui/react-icons"
import CurrencyConverter from './images/currencyConverter.png'
import Concord from './images/concord.png'
import Datify from './images/datify.png'
import IconButton from "../Base/IconButton"
import { PortfolioGrid, PortfolioSection } from "./styles"

export default function ProjectSection() {
  const [prevDisabled, setPrevDisabled] = React.useState(true);
  const [nextDisabled, setnextDisabled] = React.useState(false);


  const isDown = React.useRef(false)
  const startX = React.useRef(0);
  const scrollLeft = React.useRef(0);
  const carrouselRef = React.useRef<HTMLDivElement | null>(null as unknown as HTMLDivElement)

  const handleRightClick = () => {
    if (!carrouselRef.current) return;
    // carrouselRef.current?.scrollTo({ left: 300, behavior: 'smooth'})
    carrouselRef.current.scrollLeft += 40;
  }

  React.useEffect(() => {
    const carrouselMouseDown = (e: MouseEvent) => {
      if (!carrouselRef.current) return;

      isDown.current = true;
      startX.current = e.pageX - carrouselRef.current.offsetLeft;
      scrollLeft.current = carrouselRef.current?.scrollLeft;
    }

    const carrouselMouseLeave = () => {
      isDown.current = false;
    }

    const carrouselMouseMove = (e: MouseEvent) => {
      if(!isDown.current || !carrouselRef.current) return;

      e.preventDefault();

      const x = e.pageX - (carrouselRef.current?.offsetLeft || 0);
      const walk = (x - startX.current) * 1.5;

      carrouselRef.current.scrollLeft = scrollLeft.current - walk;
    }

    carrouselRef.current?.addEventListener('mousedown', carrouselMouseDown)
    carrouselRef.current?.addEventListener('mouseleave', carrouselMouseLeave)
    carrouselRef.current?.addEventListener('mouseup', carrouselMouseLeave)
    carrouselRef.current?.addEventListener('mousemove', carrouselMouseMove)

    return () => {
      carrouselRef.current?.removeEventListener('mousedown', carrouselMouseDown)
      carrouselRef.current?.removeEventListener('mouseleave', carrouselMouseLeave)
      carrouselRef.current?.removeEventListener('mouseup', carrouselMouseLeave)
      carrouselRef.current?.removeEventListener('mousemove', carrouselMouseMove)
    }
  }, [])

  const projects = [
    {
      name: 'Currency Converter',
      description: 'Currency convertor app built using React (Vite), Material UI, Redux and Chart.js.',
      tags: ['React', 'Redux', 'Material UI'],
      image: CurrencyConverter,
      repo: 'https://github.com/felipeafreitas/currency-converter',
      demo: ''
    },
    {
      name: 'Concord',
      description: 'Concord is a chat group app using Web Socket to allow users to send and receive messages instantly.',
      tags: ['React', 'Chakra UI', 'Styled Components', 'React Router',  'React Query', 'Socket.io', 'Node.js', 'MongoDB'],
      image: Concord,
      repo: 'https://github.com/felipeafreitas/concord',
      demo: ''
    },
    {
      name: 'Datify',
      description: 'Datify is a app that uses Spotify API to compare tracks and match music properties.',
      tags: ['React', 'React Router', 'Axios'],
      image: Datify,
      repo: 'https://github.com/felipeafreitas/datify',
      demo: ''
    }
  ]

  return (
    <PortfolioSection id="projects">
      <SectionHeader>
        Featured Projects
      </SectionHeader>
    {/* <div>
      <Button>All</Button>
      <Button>Web Development</Button>
      <Button>Side Projects</Button>
      <Button>Creative Coding</Button>
      <Button>UX/UI</Button>
    </div>
    <div>
      <Button>React</Button>
      <Button>Node.js</Button>
    </div> */}
      <PortfolioGrid id="portfolio" ref={carrouselRef}>
        {projects.map(({name, description, image, tags, repo, demo}) => (
          <div key={name} style={{ width: 400, whiteSpace: 'normal' }}>
            <Card src={image}/>
            <p style={{fontWeight: 700}}>{name}</p>
            <p>{description}</p>
            <br />
            <div style={{display: 'flex', flexDirection: 'row',gap: 5}}>
              {repo && <IconButton href={repo} target="_blank" icon={<GitHubLogoIcon />} />}
              {demo && <IconButton href={demo} target="_blank" icon={<ExternalLinkIcon />} />}
            </div>
            {/* {tags.map((tag) => (<span key={tag}>{tag}</span>))} */}
          </div>
        ))}
        {/* <LeftButtonWrapper>
          <button><ChevronLeftIcon /></button>
        </LeftButtonWrapper>
        <RightButtonWrapper>
          <button onClick={handleRightClick}><ChevronRightIcon /></button>
        </RightButtonWrapper> */}
      </PortfolioGrid>
    </PortfolioSection>
  )
}