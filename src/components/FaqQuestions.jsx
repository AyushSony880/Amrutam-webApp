import { useState } from "react";
import Title from "./Title";
import FaqQuestion from "./FaqQuestion";
import Button1 from "./Button1";

const FaqQuestions = ({icons}) => {
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
    <div className="py-8 flex px-2 flex-col items-center justify-between  lg:px-52">
      
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
            icons={icons}
          />
        ))}
      </div>
      
    </div>
  );
};

export default FaqQuestions;
