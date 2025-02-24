import { useState, ChangeEvent, FormEvent } from "react";
import emailjs from "emailjs-com";
import fnal from "../assets/fnal.jpg";
import slac from "../assets/slac.svg";
import inl from "../assets/inl.png";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .send(
        "service_qxv7ns8",
        "template_x2ltkte",
        formData,
        "IDsUf6oSbAyhN7Y9Z"
      )
      .then(
        (result) => {
          console.log("Message sent:", result.text);
          // Reset form after successful submission
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log("Error:", error.text);
        }
      );
  };

  return (
    <div>
      {/* Top section with blue background */}
      <section className="h-[70vh] bg-[#1e88b6] flex flex-col items-center justify-center text-center">
        <h1 className="text-6xl font-bold text-white mb-4">Organizers</h1>
        <p className="text-lg text-white max-w-2xl">
          This workshop is a collaborative effort between INL, FNAL, and SLAC,
          aimed at fostering knowledge sharing and improving operational
          efficiency.
        </p>
      </section>

      {/* Middle section with additional info */}
      <section className="py-10 bg-white flex flex-col items-center text-center">
        <p className="text-lg text-gray-700 max-w-3xl mb-6">
          Launched in 2025, this initiative focuses on the importance of UI/UX
          at accelerator facilities, with the goal of involving as many
          interested parties as possible. We are currently in the early stages
          and will provide more information following our first preliminary
          meeting, which will help lay the groundwork for future, formal
          workshops.
        </p>
        <div className="flex justify-center space-x-4 mb-8">
          {" "}
          <img src={inl} alt="INL Logo" className="h-16" />
          <img src={fnal} alt="FNAL Logo" className="h-16" />
          <img src={slac} alt="SLAC Logo" className="h-16" />
        </div>
      </section>

      {/* Section for contact form */}
      <section className="py-20 bg-gray-100 flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold mb-8">Contact Us</h2>
        <form onSubmit={handleSubmit} className="max-w-lg w-full">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 mb-2">
              Message (optional)
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <button
            type="submit"
            className="bg-[#1e88b6] text-white py-2 px-5 rounded transition-colors duration-300 hover:bg-[#1565a6]"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}
