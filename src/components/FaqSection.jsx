import Button1 from "./Button1";
import FaqQuestions from "./FaqQuestions";
import Title from "./Title";

const FaqSection = () => {
  return (
    <section className="flex flex-col mb-5 md:mb-24 justify-center items-center">
      <FaqQuestions icons={["+", "-"]} />
      <Title
        title={"Frequently Asked Questions"}
        text={
          "Find quick answers to common questions to help you navigate the app and its features easily."
        }
        boxWidth="820"
      />
      <Button1 text={"See More"} BtnWidth={163} />
    </section>
  );
};

export default FaqSection;
