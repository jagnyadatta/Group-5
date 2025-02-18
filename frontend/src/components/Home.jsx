import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "./ui/button";
import { faFacebook, faInstagram, faLinkedin, faWhatsapp, faYoutube } from "@fortawesome/free-brands-svg-icons";
function Home() {
  return (
    <div className="w-full flex flex-col relative items-center justify-center p-0">
      {/* Background Image (Covers Entire Page) */}
      <div className="inset-0 absolute w-full h-full flex items-center justify-center img-card opacity-20 z-10">
        <img
          src="/image/ElevateU.png"
          alt="homepage image"
          className="w-[50vw] md:w-[45vw]"
        />
      </div>
      {/* Content */}
      <div className="w-full h-[100vh] grid grid-cols-2 z-20">
        <div className="flex flex-col items-center justify-center border-2 gap-4 border-red-400 col-span-2 sm:col-span-1 md:col-span-1 lg:col-span-1">
          <div className="w-full h-full border-2 border-blue-500 flex flex-col justify-center items-end">
            <div className="w-[95%] h-auto flex flex-col border-2 border-red-400 gap-3 items-start">
              <h1 className="text-black text-6xl">
                Welcome to{" "}
                <span className="font-bold text-[#3b66ff]">ElevateU</span>
              </h1>
              <p className="text-[1rem] italic text-[#002ccc] whitespace-nowrap">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />
                Perspiciatis, quae sunt. Dicta atque repellendus molestias,<br />
                repellat consectetur iure nisi saepe ex nesciunt id non suscipit <br />
                provident voluptatum architecto, quod est.
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laudantium adipisci exercitationem
              </p>
              <Button>Go With..</Button>
            </div>
          </div>
          <div className="w-full h-[20%] m border-2 border-black flex items-center gap-3 z-49">
            <FontAwesomeIcon
              icon={faFacebook}
              className="text-[#3b66ff] text-3xl"
            />
            <FontAwesomeIcon
              icon={faWhatsapp}
              className="text-[#3b66ff] text-3xl"
            />
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-[#3b66ff] text-3xl"
            />
            <FontAwesomeIcon icon={faLinkedin} className="text-[#3b66ff] text-3xl" />
          </div>
        </div>
        <div className="w-full hidden sm:flex items-end md:items-center justify-end">
          <img
            src="/image/person-laptop.png"
            alt="person-with-table"
            className="z-50"
          />
          <div class="absolute bottom-0 left-0 w-full z-48">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="white"
                fill-opacity="1"
                d="M0,320L120,288C240,256,480,192,720,144C960,96,1200,64,1320,48L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home
