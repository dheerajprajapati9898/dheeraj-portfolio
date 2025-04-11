import { BrowserRouter } from "react-router-dom"
import { Container } from "./styles"
import ScrollAnimation from "react-animate-on-scroll"
import Illustration from "../../assets/illustration.svg"
import { NavHashLink } from "react-router-hash-link"
import linkedin from '../../assets/linkedin.svg'
import x from '../../assets/twitterx.png'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
import Hello from '../../assets/Hello.gif'
import telegram from '../../assets/telegram.svg'
export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
      {/* animateIn="fadeInUp" */}
        <ScrollAnimation animateIn="fadeInUp">
          <p>Hello <img src={Hello} alt="Hello" width="20px"/>, I'm <br/> <br/> var name = </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <h1>"Dheeraj Prajapati";</h1>
        </ScrollAnimation>
        <p>let profile = </p>
        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <h3>"Mobile App Developer";</h3>
        </ScrollAnimation>
        <p>var skills = </p>
        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <p className="small-resume">"React Native & Flutter (IOS & Android)";</p>
        </ScrollAnimation>
        <p>let experience = </p>
        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <p className="small-resume">"1 Years of Experience";</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
          <BrowserRouter>
            <NavHashLink smooth to="#contact" className="button">Contact</NavHashLink>
          </BrowserRouter>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={1 * 1000}>
      <div className="social-media">
        <a
        href="https://www.linkedin.com/in/dheeraj-prajapati-38993a253/"
        target="_blank"
        rel="noreferrer"
        style={{backgroundColor:"white",height:34,padding:0,borderRadius:6}}
      >
        <img src={linkedin} alt="Linkedin" sizes="15" />
      </a>
      <a
          href="https://x.com/DheerajPra4633"
          target="_blank"
          rel="noreferrer"
          style={{backgroundColor:"white",height:34,padding:0,borderRadius:6}}
        >
          <img src={x} alt="X"  />
        </a>
        {/* <a
          href="https://github.com/CodeVinayak/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=%2B919630576848&text=Hello+Vinayak"
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsapp} alt="Whatsapp" />
        </a>
        <a
          href="https://t.me/CodeVinayak"
          target="_blank"
          rel="noreferrer"
        >
          <img src={telegram} alt="telegram" />
        </a> */}
        </div>
        </ScrollAnimation>
      </div>
      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={1 * 1000}>
          <img src={Illustration} alt="Ilustração" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}