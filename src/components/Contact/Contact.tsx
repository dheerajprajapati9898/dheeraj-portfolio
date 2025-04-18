import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import { Form } from "../Form/Form";

export function Contact() {
  return (
    <Container id="contact" style={{ padding: "4rem 1rem", textAlign: "center" }}>
      <header>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Contact</h2>
        {/* <p>Ready to get started on your project?</p>
        <p>Contact me now for a Free consultation.</p> */}
      </header>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 30,
          marginTop: 50,
        }}
      >
        {/* Email Card */}
        <div style={cardStyles}>
          <a href="mailto:dheerajprajapati0009@gmail.com" style={linkStyles}>
            <img src={emailIcon} alt="Email" style={iconStyles} />
            <span>dheerajprajapati0009@gmail.com</span>
          </a>
        </div>

        {/* Phone Card */}
        <div style={cardStyles}>
          <a href="tel:+917378891335" style={linkStyles}>
            <img src={phoneIcon} alt="Phone" style={iconStyles} />
            <span>(+91) 73788-91335</span>
          </a>
        </div>
      </div>

      {/* <Form /> */}
    </Container>
  );
}

// 💅 Styles
const cardStyles = {
  backgroundColor: "#23ce6b",
  width: "100%",
  maxWidth: 350,
  padding: "20px",
  borderRadius: 14,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
  transition: "transform 0.2s ease, box-shadow 0.3s ease",
  cursor: "pointer",
};

const linkStyles = {
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
  color: "white",
  fontSize: "1.5rem",
  fontWeight: 500,
};

const iconStyles = {
  width: 28,
  marginRight: 15,
};
