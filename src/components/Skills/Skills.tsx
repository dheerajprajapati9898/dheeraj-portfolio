import { Container } from "./styles";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-svgrepo-com.svg";
import javascriptIcon from "../../assets/javascript-svgrepo-com.svg";
import flutterIcon from "../../assets/flutter-svgrepo-com.svg";
import xcodeIcon from "../../assets/Xcode_icon.png";
import androistudioIcon from "../../assets/androidstudio.png";
import razorpayIcon from "../../assets/razor_pay_icon-ICtywSbN.png";
import phonepeIcon from "../../assets/unnamed-2-2.png";
import Card from "./Card";

export function Skills() {
  const projects = [
    {
      title: "React Native",
      description:
        "I have 1 Year of experience in React Native framework to build a cool and well performance Mobile Apps.",
      techStack: ['React Native', 'Apps'],
      internalUrl: "https://reactnative.dev/",
      // externalUrl: "https://ai-chatbot-t8fn.onrender.com",
      firstimage: reactIcon,
      secondimage: null
    },
    {
      title: 'TypeScript & JavaScript',
      description:
        'TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.\n',
      techStack: ['TypeScript', 'JavaScript'],
      internalUrl: 'https://www.typescriptlang.org/',
      externalUrl:
        'https://www.javascript.com/',
      firstimage: typescriptIcon,
      secondimage: javascriptIcon
    },
    {
      title: 'Flutter',
      description:
        'Hands-on experience in build Mobile Apps using Flutter. I am handling over all 10+ Flutter project currenty in my company.',
      techStack: ['Flutter', 'Apps', 'Games'],
      internalUrl:
        'https://flutter.dev/',
      // externalUrl: 'https://medibook.vinayaksingh.com',
      firstimage: flutterIcon,
      secondimage: null
    },
    {
      title: 'Xcode',
      description:
        'Xcode lets you build, test, and distribute apps for all Apple platforms with powerful tools like predictive code completion, live previews, Git staging, video-enhanced test reports, and seamless deployment via Xcode Cloud to TestFlight and the App Store.',
      techStack: ['Xcode', 'IOS', 'Deveploer', 'TestFlight'],
      internalUrl:
        'https://developer.apple.com/xcode/',
      // externalUrl: 'https://medibook.vinayaksingh.com',
      firstimage: xcodeIcon,
      secondimage: null
    },
    {
      title: 'Android Studio',
      description:
        'Modern tools and resources to help you build experiences that people love, faster and easier, across every Android device.',
      techStack: ['Android Studio', 'Adnroid', 'Developer'],
      internalUrl:
        'https://developer.apple.com/xcode/',
      // externalUrl: 'https://medibook.vinayaksingh.com',
      firstimage: androistudioIcon,
      secondimage: null
    },
    {
      title: 'Razorpay & PhonePe',
      description:
        'Integrated Razorpay & PhonePe in the React Native & Fluter both the framework with demo and real account.',
      techStack: ['Razorpay', 'PhonePe', 'Payment Gateway'],
      internalUrl: 'https://www.typescriptlang.org/',
      externalUrl:
        'https://www.javascript.com/',
      firstimage: razorpayIcon,
      secondimage: phonepeIcon
    },
  ];
  return (
    <Container id="skills">
      <h2>Here are my main skills</h2>
      {/* <div className="hard-skills" style={{justifyContent:'center'}}> */}
      <div className="projects">

        {projects.map((project, index) => (
          <Card
            key={index}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            internalUrl={project.internalUrl}
            externalUrl={project.externalUrl}
            firstimage={project.firstimage}
            secondimage={project.secondimage}
          />
        ))}
      </div>
    </Container>
  );
}