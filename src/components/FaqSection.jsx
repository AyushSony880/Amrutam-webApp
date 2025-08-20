import { useState } from "react";
import Title from "./Title";
import FaqQuestion from "./FaqQuestion";
import Button1 from "./Button1";

const FaqSection = () => {
  const [showAns, setShowAns] = useState(false);
  const [opendTab, setOpendTab] = useState(0);

  const faqQuestion = [
    {
      id: 1,
      question: "What is Amrutam?",
      answer:
        "Amrutam is a trusted platform connecting Ayurvedic experts with people seeking holistic healthcare solutions. Join our growing community of doctors to share your expertise, grow your practice, and make a lasting impact.",
    },
    {
      id: 2,
      question: "How does Amrutam help me grow as a practitioner?",
      answer:
        "Amrutam is a trusted platform connecting Ayurvedic experts with people seeking holistic healthcare solutions. Join our growing community of doctors to share your expertise, grow your practice, and make a lasting impact.",
    },
    {
      id: 3,
      question: "How do I become a part of Amrutam Doctor?",
      answer:
        "Amrutam is a trusted platform connecting Ayurvedic experts with people seeking holistic healthcare solutions. Join our growing community of doctors to share your expertise, grow your practice, and make a lasting impact.",
    },
    {
      id: 4,
      question: "What is Amrutam Global as a platform?",
      answer:
        "Amrutam is a trusted platform connecting Ayurvedic experts with people seeking holistic healthcare solutions. Join our growing community of doctors to share your expertise, grow your practice, and make a lasting impact.",
    },
    {
      id: 5,
      question: "What documents do I need to provide?",
      answer:
        "Amrutam is a trusted platform connecting Ayurvedic experts with people seeking holistic healthcare solutions. Join our growing community of doctors to share your expertise, grow your practice, and make a lasting impact.",
    },
    {
      id: 6,
      question: "Is there a fee to join Amrutam?",
      answer:
        "Amrutam is a trusted platform connecting Ayurvedic experts with people seeking holistic healthcare solutions. Join our growing community of doctors to share your expertise, grow your practice, and make a lasting impact.",
    },
  ];
  return (
    <section className="py-8 flex flex-col items-center justify-between  px-52">
      <Title
        title={"Frequently Asked Questions"}
        text={
          "Find quick answers to common questions to help you navigate the app and its features easily."
        }
        boxWidth="820"
      />
      <div className=" mt-6">
        {faqQuestion.map(({ id, question, answer }) => (
          <FaqQuestion
            id={id}
            key={id}
            question={question}
            answer={answer}
            setShowAns={setShowAns}
            showAns={showAns}
            opendTab={opendTab}
            setOpendTab={setOpendTab}
            icon={["+", "-"]}
          />
        ))}
      </div>
      <Button1 text={"See More"} BtnWidth={163}/>
    </section>
  );
};

export default FaqSection;
