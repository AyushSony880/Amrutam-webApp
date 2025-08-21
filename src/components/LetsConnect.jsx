import { useState } from "react";
import letsConnectImage from "../assets/letsConnectImage.svg";
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
      <div className="w-[1240px] h-[471px] flex my-10 items-center justify-between  ">
        <img
          className=" w-[498px] h-[471px] rounded-lg "
          src={letsConnectImage}
          alt="food"
        />

        <form
          onSubmit={handleSubmit}
          className="w-[718px] h-[471px] p-9 border border-[#C2C2C2] rounded-lg  "
        >
          <div className=" flex items-center justify-between ">
            <div className="mb-5 flex flex-col gap-2  border-b-2 w-[300px] border-[#C2C2C2]">
              <label
                htmlFor="name"
                className="text-[#3A643B] pb-3   text-sm font-normal "
              >
                Your Name
              </label>
              <input
                onChange={handleData}
                className="text-[#7E7E7E]  outline-none text-xl font-medium"
                type="text"
                name="name"
                placeholder="Vikas Kumar"
              />
            </div>
            <div className="mb-5 flex flex-col gap-2  border-b-2 w-[300px] border-[#C2C2C2]">
              <label
                htmlFor="contact"
                className="text-[#3A643B] pb-3 text-sm font-normal"
              >
                Your Contact Number
              </label>
              <input
                onChange={handleData}
                name="contact"
                className="outline-none text-[#7E7E7E] text-xl font-medium"
                type="text"
                placeholder="8743414476"
              />
            </div>
          </div>
          <div className="mb-5 flex flex-col gap-2  border-b-2 w-[646px] border-[#C2C2C2]">
            <label
              htmlFor="email"
              className="text-[#3A643B] pb-3 text-sm font-normal"
            >
              Your Email
            </label>
            <input
              onChange={handleData}
              name="email"
              className=" outline-none  text-[#7E7E7E] text-xl font-medium"
              type="email"
              placeholder="vikass@gmail.com"
            />
          </div>
          <div className="  flex flex-col gap-2  border-b-2 w-[646px] border-[#C2C2C2]">
            <label
              htmlFor="message"
              className="text-[#3A643B] pb-3 text-sm font-normal"
            >
              Message (Optional)
            </label>
            <textarea
              onChange={handleData}
              name="message"
              className="text-[#7E7E7E] outline-none resize-none text-xl h-24 font-medium"
              placeholder="I want to On-board as a Doctor"
            ></textarea>
          </div>
          <button
            className={`bg-[#315918] cursor-pointer text-center text-[#FFFFFF] rounded-xl text-xl px-9 py-3.5 mt-10 font-bold w-[236px]`}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default LetsConnect;
