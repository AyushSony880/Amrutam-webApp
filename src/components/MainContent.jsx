import Title from "./Title";
import group1 from "../assets/mainContentImage/Group1.svg";
import group2 from "../assets/mainContentImage/Group2.svg";
import group3 from "../assets/mainContentImage/Group3.svg";
import group4 from "../assets/mainContentImage/Group4.svg";
import group5 from "../assets/mainContentImage/Group5.svg";
import FeatureCard from "./FeatureCard";

const featureData = [
  {
    image: group1,
    title: "Instant FREE 5-Mins Call",
    text: "We understand the importance of building trust with your patients. That’s why Amrutam offers a free 5-minute call, helping you connect instantly and foster lasting patient relationships with ease.",
  },
  {
    image: group2,
    title: "Forum for Meaningful Connections",
    text: 'We value your journey in Ayurveda .The Amrutam Forum helps you engage with patients, answer questions, while the "Thoughts" section allows you to share deeper Ayurvedic wisdom.',
  },
  {
    image: group3,
    title: "Choose Your Session Mode",
    text: "Amrutam offers you to connect with patients via Instant Chat, Instant Call, or Schedule Video call. Each option offers flexibility and personalized care to suit individual needs.",
  },
  {
    image: group4,
    title: "Smart Wallet",
    text: "We understand the need for seamless transactions. With Amrutam Wallet, you can easily withdraw payments, and for your security, a one-time password is sent to your registered mobile number during withdrawals.",
  },
  {
    image: group5,
    title: "Flexible Work Timing",
    text: "We recognize the importance of managing your time. With the availability toggle in the doctor’s app, you control when patients can book consultations, ensuring a balanced and stress-free practice.",
  },
];

const MainContent = () => {
  return (
    <section className="py-9 ">
      <Title
        title={"Why Doctors Choose Us?"}
        text={
          "Unlock the Benefits of Smarter Healthcare Management and Patient Care"
        }
        boxWidth="499"
      />
      {featureData.map((detail, i) => (
        <FeatureCard
          title={detail.title}
          image={detail.image}
          index={i}
          text={detail.text}
          key={i}
        />
      ))}
    </section>
  );
};

export default MainContent;
