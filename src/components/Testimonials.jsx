import testimonialImage from "../assets/testimonialImage.svg";

import Title from "./Title";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  const testimonialData = [
    {
      isCardSmall: true,
      name: "Dr. Pooja Deshmukh",
      image: testimonialImage,
      role: "BAMS",
      rating: 4,
      text: '"Amrutam’s formulations stay true to the ancient wisdom of Ayurveda. Their authentic, chemical-free products help restore balance and promote holistic well-being. I often recommend them to my patients seeking natural healing."',
    },
    {
      isCardSmall: false,
      name: "Dr. Rajesh Iyer",
      image: testimonialImage,
      role: "Ayurvedic Practitioner",
      rating: 4,
      text: '"Amrutam beautifully bridges the gap between traditional Ayurveda and modern wellness. Their high-quality ingredients and ethical practices make them a trustworthy choice for those looking to embrace a healthier lifestyle."',
    },
    {
      isCardSmall: true,
      name: "Dr. Ananya Sharma, BAMS",
      image: testimonialImage,
      role: "BAMS",
      rating: 4,
      text: '"As an Ayurvedic doctor, I appreciate Amrutam’s commitment to purity and efficacy. Their herbal blends are thoughtfully crafted, ensuring maximum benefits for mind and body. I’ve personally seen positive results in my patients using their products."',
    },
  ];
  return (
    <section className="py-8 px-5 xl:px-24 mt-10">
      <Title
        title={"What other Ayurvedic Doctors are Saying"}
        text={
          "Trusted by experts – Hear what Ayurvedic doctors say about Amrutam!"
        }
        boxWidth="808"
      />
      <div className="flex items-center flex-wrap gap-5 justify-center mt-16 ">
        {testimonialData.map(
          ({ name, image, role, rating, text, isCardSmall },i) => (
                <TestimonialCard
                    key={i}
              image={image}
              name={name}
              role={role}
              rating={rating}
              text={text}
              isCardSmall={isCardSmall}
            />
          )
        )}
      </div>
    </section>
  );
};

export default Testimonials;
