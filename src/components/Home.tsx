import berkeley from "../assets/berkeley.jpg";
import fnal from "../assets/fnal.jpg";
import slac from "../assets/slac.svg";
import inl from "../assets/inl.png";
import graphic from "../assets/graphic.jpeg";
import uiux from "../assets/uiux.jpeg";
import { Link } from "react-router-dom";
import { MousePointer, Settings, Code } from "react-feather";

export default function Home() {
  return (
    <div>
      {/* First section - half info, half graphic */}
      <section className="flex h-screen">
        <div className="absolute top-[50%] left-[50%] translate-x-[-10%] translate-y-[-50%] w-[50vw] h-[70vh] bg-[#D4B060] flex justify-center items-center">
          <img
            src={uiux}
            alt="UI/UX Design"
            className="max-w-[90%] max-h-[90%] object-contain"
          />
        </div>

        <div className="w-1/2 flex justify-start items-center p-5 translate-y-[-10%] ">
          <div className="max-w-md text-left top-[40%] ml-6">
            <p className="text-lg font-bold text-[#1e88b6] mb-2">
              FEB 26 to 28, 2025
            </p>
            <h1 className="text-5xl font-bold text-black mb-2">
              The 1st Particle Accelerator UX Workshop
            </h1>
            <p className="text-lg text-[#333] mb-5">
              Elevating User Experience in Accelerator Labs
            </p>
            <Link to="event">
              <button className="bg-[#1e88b6] text-white text-base py-2 px-5 rounded transition-colors duration-300 hover:bg-[#1565a6]">
                Learn More
              </button>
            </Link>
          </div>
        </div>
        <div className="w-1/2 bg-[#1e88b6]"></div>
      </section>

      {/* Second section - logos of participating labs */}
      <section className="py-20 h-[75vh] bg-gray-100 flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold text-center mb-10">
          Participating Laboratories
        </h2>

        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-5">
          <div className="flex items-center justify-center">
            <img
              src={berkeley}
              alt="Berkeley National Lab Logo"
              className="w-full object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              src={fnal}
              alt="Fermilab Logo"
              className="w-full object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              src={inl}
              alt="INL Logo"
              className="w-full object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              src={slac}
              alt="SLAC Logo"
              className="w-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Third section - about the workshop */}
      <section className="flex py-20 h-[75vh] bg-white">
        <div className="w-1/4 mx-12 flex justify-center items-center">
          <img src={graphic} alt="Workshop Graphic" className="w-full h-auto" />
        </div>

        <div className="w-2/3 mx-6 flex flex-col justify-center p-5">
          <div className="max-w-2xl text-left mb-6">
            <p className="text-lg font-bold text-[#1e88b6] mb-2">
              ABOUT THE WORKSHOP
            </p>
            <h1 className="text-5xl font-bold text-black mb-2">
              The Importance of UI/UX Design in Control Systems
            </h1>
            <p className="text-lg text-[#333]">
              Taking the time to focus on UI/UX isn’t an extra step—it’s the
              foundation of success. The best technology is only as powerful as
              its usability. By prioritizing human factors in our modernization
              efforts, we create a system that not only works—but works well for
              the people who rely on it.
            </p>
          </div>
        </div>
      </section>

      {/* Fourth section - who's involved */}
      <section className="flex py-20 h-[75vh] bg-gray-100">
        <div className="mx-6 flex flex-col justify-center p-5">
          <div className="text-left mb-6">
            <p className="text-lg font-bold text-[#1e88b6] mb-2">AUDIENCE</p>
            <h1 className="text-5xl font-bold text-black mb-4">
              Who's Involved?
            </h1>
            <p className="text-lg text-[#333] mb-8">
              Join a gathering of professionals to consolidate knowledge and
              best practices for control system applications and management
              tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* UI/UX Experts */}
            <div className="flex flex-col items-center text-center p-4 bg-white shadow-md rounded-lg">
              <MousePointer className="h-16 mb-4 text-[#1e88b6]" />
              <h2 className="text-xl font-semibold text-[#1e88b6]">
                UI/UX Experts
              </h2>
              <p className="text-md text-gray-600">
                Designers focused on improving user experience and interfaces
                for control systems.
              </p>
            </div>

            {/* Control System Specialists */}
            <div className="flex flex-col items-center text-center p-4 bg-white shadow-md rounded-lg">
              <Settings className="h-16 mb-4 text-[#1e88b6]" />
              <h2 className="text-xl font-semibold text-[#1e88b6]">
                Control System Specialists
              </h2>
              <p className="text-md text-gray-600">
                Experts working with complex control systems in research and
                industrial settings.
              </p>
            </div>

            {/* Software Engineers */}
            <div className="flex flex-col items-center text-center p-4 bg-white shadow-md rounded-lg">
              <Code className="h-16 mb-4 text-[#1e88b6]" />
              <h2 className="text-xl font-semibold text-[#1e88b6]">
                Software Engineers
              </h2>
              <p className="text-md text-gray-600">
                Engineers developing robust applications for operational
                excellence.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
