import { styled } from "~/styles/stitches.config"
import About from "~/components/About"
import { Container } from "~/components/Base/Container"
import Contact from "~/components/Contact"
import Footer from "~/components/Footer"
import Header from "~/components/Header"
import Hero from "~/components/Hero"
import ProjectSection from "~/components/ProjectSection"
import * as React from 'react'
import Work from "~/components/Work"
import { CaretUpIcon } from "@radix-ui/react-icons"

const BackgroundTop = styled('div', {
  display: 'flex',
  position: 'relative',
  left: 0,
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100vw',
  '&:before': {
    content: '',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'absolute',
    height: '100%',
    width: '100%',
    zIndex: -1,
    overflow: 'hidden',
    filter: 'blur(30px)',
    opacity: 0.3,
  },
})



export default function Portfolio() {
  const [url, setUrl] = React.useState()
  const [showGoToTop, setShowGoToTop] = React.useState(false)

  const getPhoto = async () => {
    const { url } = await fetch('https://api.nasa.gov/planetary/apod?api_key=Net9s4pX2mWNJmFxGwZ7NhU5rw6ojy7uFdLO6LRR').then(async (response) => response.json())
    setUrl(url)
  }

  React.useEffect(() => {
    getPhoto();
  }, [])

  const isOnTop = () => {
    if (window.scrollY !== 0) return setShowGoToTop(true);
    return setShowGoToTop(false)
  }

  React.useEffect(() => {
    window.addEventListener('scroll', isOnTop)
    return () => {
      window.removeEventListener('scroll', isOnTop)
    }
  }, [])

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  const ButtonGoToTop = styled('a', {
    position: 'fixed', bottom: 50, right: 50, backgroundColor: "white", color: "black", height: 50, width: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', transition: '0.3s' 
  })
  return (
    <Container>
      <BackgroundTop css={{'&:before': { backgroundImage: `url(${url})`}}}>
        <Header />
        <Hero />
      </BackgroundTop>
      <About />
      <Work />
      <ProjectSection />
      <Contact />
      <Footer />
      <ButtonGoToTop css={{ opacity: showGoToTop ? 1 : 0}} onClick={goToTop}>
        <CaretUpIcon />
      </ButtonGoToTop>
    </Container>
  )
}