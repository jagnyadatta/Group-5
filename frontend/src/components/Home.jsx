
import BackgroundImage from "./BackgroundImage";
import Navbar from "./shared/Navbar";
import FrontPagelayout from "./FrontPagelayout";
import Service from "./Service";
import AboutUs from "./AboutUs";


function Home() {
  return (
    <>
      <Navbar />
      <FrontPagelayout/>
      <BackgroundImage />
      <Service/>
      <AboutUs/>
    </>
  );
}

export default Home;
