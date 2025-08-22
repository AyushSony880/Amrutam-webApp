import { useState } from "react";
import letsConnectImage from "../assets/homePageAssets/letsConnectImage.svg";
import Title from "./Title";

const LetsConnect = () => {
  const [formData, setFormData] = useState({
    name: "This is for demo ",
    contact: "",
    email: "",
    message: "I can handle using proper validation",
  });
  const handleData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <section className=" flex flex-col items-center justify-between">
      <Title
        boxWidth="785"
        title={"Let’s Connect"}
        text={
          "We’re here to help you on your wellness journey. Reach out to us for any questions, product inquiries, or personalized advice."
        }
      />
      <div className="flex max-w-[1300px] flex-col xl:flex-row my-10 items-center justify-between gap-8 w-full px-4">
        <div className="relative w-full max-w-[500px]">
          <img
            className="w-full h-auto rounded-lg object-cover"
            src={letsConnectImage}
            alt="food"
          />
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-[720px] p-6 sm:p-9 border border-[#C2C2C2] rounded-lg bg-white"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
            <div className="mb-5 flex flex-col gap-2 border-b-2 w-full sm:w-1/2 border-[#C2C2C2]">
              <label
                htmlFor="name"
                className="text-[#3A643B] pb-2 text-sm font-normal"
              >
                Your Name
              </label>
              <input
                onChange={handleData}
                className="text-[#7E7E7E] outline-none text-base sm:text-lg lg:text-xl font-medium"
                type="text"
                name="name"
                placeholder="Vikas Kumar"
              />
            </div>

            <div className="mb-5 flex flex-col gap-2 border-b-2 w-full sm:w-1/2 border-[#C2C2C2]">
              <label
                htmlFor="contact"
                className="text-[#3A643B] pb-2 text-sm font-normal"
              >
                Your Contact Number
              </label>
              <input
                onChange={handleData}
                name="contact"
                className="outline-none text-[#7E7E7E] text-base sm:text-lg lg:text-xl font-medium"
                type="text"
                placeholder="8743414476"
              />
            </div>
          </div>
          <div className="mb-5 flex flex-col gap-2 border-b-2 w-full border-[#C2C2C2]">
            <label
              htmlFor="email"
              className="text-[#3A643B] pb-2 text-sm font-normal"
            >
              Your Email
            </label>
            <input
              onChange={handleData}
              name="email"
              className="outline-none text-[#7E7E7E] text-base sm:text-lg lg:text-xl font-medium"
              type="email"
              placeholder="vikass@gmail.com"
            />
          </div>
          <div className="flex flex-col gap-2 border-b-2 w-full border-[#C2C2C2]">
            <label
              htmlFor="message"
              className="text-[#3A643B] pb-2 text-sm font-normal"
            >
              Message (Optional)
            </label>
            <textarea
              onChange={handleData}
              name="message"
              className="text-[#7E7E7E] outline-none resize-none text-base sm:text-lg lg:text-xl h-24 font-medium"
              placeholder="I want to On-board as a Doctor"
            ></textarea>
          </div>
          <button
            className="bg-[#315918] cursor-pointer text-center text-white rounded-xl 
      text-lg sm:text-xl px-6 sm:px-9 py-3 mt-8 font-bold w-full sm:w-[236px]"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default LetsConnect;
