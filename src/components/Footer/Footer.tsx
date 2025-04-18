import { Container } from './styles'
import reactIcon from '../../assets/react-icon.svg'
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
import telegram from '../../assets/telegram.svg'
import instagramIcon from '../../assets/instagram.svg'
import x from '../../assets/twitterx.png'
import tailwindlogo from '../../assets/tailwind.png'

export function Footer() {
  return (
    <Container className="footer" style={{ textAlign: 'center', alignItems: "center", justifyContent: 'center' }}>
      {/* <a href="https://vinayaksingh.in" className="logo">
        <span>www.vinayak</span>
        <span>singh.in</span>
      </a> */}
      <div>
        <p>
          This Website was made with <img src={reactIcon} alt="React" /> + <img src={tailwindlogo} alt="React" />
          {/* <span>❤️</span> */}
        </p>
      </div>  &nbsp;
      &nbsp;|
     
      &nbsp;
      &nbsp;
      &nbsp;
      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/dheeraj-prajapati-38993a253/"
          target="_blank"
          rel="noreferrer"
          style={{ backgroundColor: "white", height: 30, padding: 0, borderRadius: 6 }}
        >
          <img src={linkedin} alt="Linkedin" sizes="15" />
        </a>
        <a
          href="https://x.com/DheerajPra4633"
          target="_blank"
          rel="noreferrer"
          style={{ backgroundColor: "white", height: 30, padding: 0, borderRadius: 6 }}
        >
          <img src={x} alt="X" />
        </a>
      </div>
    </Container>
  )
}
