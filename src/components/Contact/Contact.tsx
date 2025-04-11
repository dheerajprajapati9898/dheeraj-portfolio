import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        {/* <p>Ready to get started on your project? </p>
        <p>Contact me now for a Free consultation.</p> */}
      </header>
      <div
  style={{
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 20,
    alignItems: 'center',
  }}
>
  <div
    style={{
      backgroundColor: 'rgb(35, 206, 107)',
      width: '100%',
      maxWidth: 350,
      padding: 15,
      borderRadius: 12,
      display: 'flex',
      alignItems: 'center',
    }}
  >
    <a href="mailto:dheerajprajapati0009@gmail.com">
      <img src={emailIcon} alt="Email" width={30} />
    </a>
    <a
      href="mailto:dheerajprajapati0009@gmail.com"
      style={{ color: 'white', paddingLeft: 15 }}
    >
      dheerajprajapati0009@gmail.com
    </a>
  </div>

  <div
    style={{
      backgroundColor: 'rgb(35, 206, 107)',
      width: '100%',
      maxWidth: 350,
      padding: 15,
      borderRadius: 12,
      display: 'flex',
      alignItems: 'center',
    }}
  >
    <a href="tel:+917378891335">
      <img src={phoneIcon} alt="Phone No" width={30} />
    </a>
    <a href="tel:+917378891335" style={{ color: 'white', paddingLeft: 15 }}>
      (+91) 73788-91335
    </a>
  </div>
</div>

      {/* <Form></Form> */}
    </Container>
  )
}