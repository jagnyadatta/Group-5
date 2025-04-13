export default function BackgroundImage() {
  return (
    <>
      {/* Background Image (Covers Entire Page) */}
      <div className="w-full flex flex-col items-center justify-center p-0">
        <div className="fixed inset-0 bg-amber-500 absolute w-full h-full flex items-center justify-center img-card sm:opacity-20 opacity-30 z-1">
          <img
            src="/image/ElevateU.png"
            alt="homepage image"
            className="w-[50vw] md:w-[45vw]"
          />
        </div>
        {/* <div className="absolute bottom-0 left-0 w-full z-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="white"
            fillOpacity="1"
            d="M1440,0 L1440,320 L0,320 Z"
          ></path>
        </svg> 
      </div> */}
      </div>
      {/* <div className="w-full flex flex-col relative items-center justify-center p-0 z-2"> */}
      {/* Background Image (Covers Entire Page) */}
      {/* <div className="inset-0 absolute w-full h-full flex items-center justify-center img-card sm:opacity-20 opacity-30 z-1">
        <img
          src="/image/ElevateU.png"
          alt="homepage image"
          className="w-[50vw] md:w-[45vw]"
        />
      </div> */}

      {/* <div className="absolute bottom-0 left-0 w-full z-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="white"
            fillOpacity="1"
            d="M1440,0 L1440,320 L0,320 Z"
          ></path>
        </svg>
      </div> */}
      

      {/* </div> */}
    </>
  );
}
