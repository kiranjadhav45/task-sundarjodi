import React from "react";

const Home = () => {
  const text = [
    "1. Our Marathi matrimony site allows thousands of verified profiles",
    "2. Find a perfect life partner from one of the leading Marathi Matrimony Site ",
    "3. Marathi matrimonial site that is dedicated to matchmaking",
    "4. Marathi matrimony site with a blend of Tradition and Technology",
    "5. Marathi matrimony site with filters to find your perfect match",
    "6. Marathi Matrimonial Website with 100% Data Security and Privacy",
    "7. Help Center and Online Support",
  ];
  //   <img src="" alt="Whats-App-Image-2024-05-15-at-8-27-16-PM" border="0"></img>
  //   <img src="https://i.ibb.co/4gM4nvv/Whats-App-Image-2024-05-15-at-8-28-03-PM.jpg" alt="Whats-App-Image-2024-05-15-at-8-28-03-PM" border="0"></img>
  //   <img src="https://i.ibb.co/SR15Z1c/Whats-App-Image-2024-05-15-at-8-29-24-PM.jpg" alt="Whats-App-Image-2024-05-15-at-8-29-24-PM" border="0"></img>
  //   <img src="https://i.ibb.co/ys0vhdw/Whats-App-Image-2024-05-15-at-8-30-09-PM.jpg" alt="Whats-App-Image-2024-05-15-at-8-30-09-PM" border="0"></img>
  //   <img src="https://i.ibb.co/wCb8Pxr/Whats-App-Image-2024-05-15-at-8-30-49-PM.jpg" alt="Whats-App-Image-2024-05-15-at-8-30-49-PM" border="0"></img>
  const tags = [
    {
      image:
        "https://i.ibb.co/rvGwhfz/Whats-App-Image-2024-05-15-at-8-27-16-PM.jpg",
      number: "7+",
      text: " years of Experience",
    },
    {
      image:
        "https://i.ibb.co/4gM4nvv/Whats-App-Image-2024-05-15-at-8-28-03-PM.jpg",
      number: "1300+",
      text: "Happy Marriage",
    },
    {
      image:
        "https://i.ibb.co/SR15Z1c/Whats-App-Image-2024-05-15-at-8-29-24-PM.jpg",
      number: "67k+",
      text: "Registered profiles",
    },
    {
      image:
        "https://i.ibb.co/ys0vhdw/Whats-App-Image-2024-05-15-at-8-30-09-PM.jpg",
      number: "85+",
      text: "Caste Profiles",
    },
    {
      image:
        "https://i.ibb.co/wCb8Pxr/Whats-App-Image-2024-05-15-at-8-30-49-PM.jpg",
      number: "40k+",
      text: "App Download",
    },
  ];
  return (
    <div className="max-w-[1440px] mx-auto ">
      <div
        className=""
        style={{
          backgroundImage: `url("https://i.ibb.co/VW28FW5/Whats-App-Image-2024-05-15-at-4-54-41-PM.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          //   width: "200px",
          //   height: "200px",
        }}
      >
        <div className="px-12">
          <nav className=" pt-3">
            <div className="bg-[#00000080] rounded-lg px-4 flex items-center justify-between text-white py-1.5">
              <div className="">
                <img
                  src="https://i.ibb.co/GR0p896/1-2.png"
                  alt="1-2"
                  border="0"
                ></img>
              </div>
              <div className="flex items-center gap-6">
                <ul className="flex items-center gap-6 font-medium text-[18px]">
                  <li>Home</li>
                  <li>Advance Search</li>
                  <li>Matching Profiles</li>
                  <li>Membership</li>
                  <li>Contact</li>
                </ul>
                <div className="flex items-center gap-6">
                  <button className="px-6 py-1.5 rounded-md bg-white text-[#FF004F] text-[20px]">
                    Login
                  </button>
                  <button
                    style={{
                      background:
                        "linear-gradient(90.00deg, rgb(255, 99, 147) 1.538%,rgb(198, 25, 79) 100%)",
                    }}
                    className="px-6 py-1.5 rounded-md text-[20px]"
                  >
                    Ask Experts
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className="px-12 mt-[411px]">
          <div className="bg-[#00000080] px-8 py-10 rounded-3xl flex items-center gap-3">
            <div className="flex items-center bg-white rounded-lg w-fit px-4 py-1">
              <input
                className="bg-transparent border-none outline-none px-4 py-2 placeholder:text-2xl text-2xl"
                placeholder="Your Name"
                type="text"
              />
              <svg
                width="24.000000"
                height="24.000000"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <desc>Created with Pixso.</desc>
                <defs />
                <rect
                  id="Duotone/User"
                  width="24.000000"
                  height="24.000000"
                  fill="#FFFFFF"
                  fill-opacity="0"
                />
                <g opacity="0.200000" />
                <path
                  id="Vector"
                  d="M12 15C8.68 15 6 12.31 6 9C6 5.68 8.68 3 12 3C15.31 3 18 5.68 18 9C18 12.31 15.31 15 12 15Z"
                  stroke="#505050"
                  stroke-opacity="1.000000"
                  stroke-width="1.500000"
                />
                <path
                  id="Vector"
                  d="M2.9 20.25C3.82 18.65 5.15 17.32 6.74 16.4C8.34 15.48 10.15 14.99 12 14.99C13.84 14.99 15.65 15.48 17.25 16.4C18.84 17.32 20.17 18.65 21.09 20.25"
                  stroke="#505050"
                  stroke-opacity="1.000000"
                  stroke-width="1.500000"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <div className="flex items-center bg-white rounded-lg w-fit px-4 py-1">
              <input
                className="bg-transparent border-none outline-none px-4 py-2 placeholder:text-2xl text-2xl"
                placeholder="Mobile Number"
                type="text"
              />
              <svg
                width="32.000000"
                height="32.000000"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <desc>Created with Pixso.</desc>
                <defs />
                <rect
                  id="Regular/DeviceMobileSpeaker"
                  width="32.000000"
                  height="32.000000"
                  fill="#FFFFFF"
                  fill-opacity="0"
                />
                <path
                  id="Vector"
                  d="M24 27C24 28.1 23.1 29 22 29L10 29C8.89 29 8 28.1 8 27L8 5C8 3.89 8.89 3 10 3L22 3C23.1 3 24 3.89 24 5L24 27Z"
                  stroke="#505050"
                  stroke-opacity="1.000000"
                  stroke-width="1.500000"
                  stroke-linejoin="round"
                />
                <path
                  id="Vector"
                  d="M12 7L20 7"
                  stroke="#505050"
                  stroke-opacity="1.000000"
                  stroke-width="1.500000"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <div className="flex items-center bg-white rounded-lg w-fit px-4 py-1">
              <input
                className="bg-transparent border-none outline-none px-4 py-2 placeholder:text-2xl text-2xl"
                placeholder="Profile For"
                type="text"
              />
              <svg
                width="30.000000"
                height="30.000000"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <desc>Created with Pixso.</desc>
                <defs />
                <path
                  id="Vector"
                  d="M15.88 19.63C15.64 19.86 15.33 19.99 15 19.99C14.66 19.99 14.35 19.86 14.11 19.63L7.04 12.56C6.92 12.44 6.83 12.3 6.76 12.15C6.69 12 6.66 11.84 6.66 11.67C6.66 11.5 6.69 11.34 6.75 11.18C6.81 11.03 6.91 10.89 7.02 10.77C7.14 10.66 7.28 10.56 7.43 10.5C7.59 10.44 7.75 10.41 7.92 10.41C8.09 10.41 8.25 10.44 8.4 10.51C8.55 10.58 8.69 10.67 8.81 10.79L15 16.98L21.18 10.79C21.42 10.56 21.73 10.44 22.06 10.44C22.39 10.44 22.7 10.57 22.93 10.81C23.17 11.04 23.3 11.35 23.3 11.68C23.3 12.01 23.18 12.32 22.95 12.56L15.88 19.63Z"
                  fill="#505050"
                  fill-opacity="1.000000"
                  fill-rule="evenodd"
                />
              </svg>
            </div>
            <div>
              <button
                style={{
                  background:
                    "linear-gradient(90.00deg, rgb(255, 99, 147) 1.538%,rgb(198, 25, 79) 100%)",
                }}
                className="px-6 py-2 rounded-md font-semibold text-[24px] block text-white"
              >
                Register
              </button>
            </div>
          </div>
        </div>
        <div
          style={{
            background:
              "linear-gradient(135.29deg, rgb(255, 0, 79) 1.305%,rgb(255, 99, 147) 100%)",
          }}
          className="mt-[99px] text-white pt-5 pb-2"
        >
          <p className="font-medium text-[48px] text-center">
            कुठं अडतीये तुमच्या लग्नाची गाडी, सुशिक्षित स्थळांसाठी फक्त
            सुंदरजोडी
          </p>
          <p className="font-medium text-[33px] text-center">
            Maharashtra’s #No 1 Marathi Matrimony
          </p>
        </div>
      </div>
      {/* section */}
      <div className="mt-[69px]">
        <p className="text-center text-[#FF004F] text-[34px] leading-[57px]">
          Find Your Sundar Jodidar <br /> With 4 Easy Steps
        </p>
        <div className="mt-10">
          {/* <div className="flex justify-between">
            <div>
              <div className="flex justify-center">
                <img
                  className="rounded-2xl w-[159px]"
                  src="https://i.ibb.co/5K1fFJ9/Whats-App-Image-2024-05-15-at-7-00-37-PM.jpg"
                  alt="Whats-App-Image-2024-05-15-at-7-00-37-PM"
                  border="0"
                />
              </div>
              <h3 className="text-center text-2xl mt-2">
                1. Easy Registration
              </h3>
              <p className="text-center text-base mt-4">
                Login to Marathi matrimony website <br /> with mobile app or
                website in <br /> simple steps
              </p>
            </div>
            <div className="mt-[108px]">
              <div className="flex justify-center">
                <img
                  className="rounded-2xl w-[132px]"
                  src="https://i.ibb.co/d7YHhKr/Whats-App-Image-2024-05-15-at-7-20-27-PM-1.jpg"
                  alt="Whats-App-Image-2024-05-15-at-7-00-37-PM"
                  border="0"
                />
              </div>
              <h3 className="text-center text-2xl mt-2">
                1. Easy Registration
              </h3>
              <p className="text-center text-base mt-4">
                Login to Marathi matrimony website <br /> with mobile app or
                website in <br /> simple steps
              </p>
            </div>
            <div>
              <div className="flex justify-center">
                <img
                  className="rounded-2xl w-[149px]"
                  src="https://i.ibb.co/RzB2BFb/Whats-App-Image-2024-05-15-at-7-23-25-PM.jpg"
                  alt="Whats-App-Image-2024-05-15-at-7-00-37-PM"
                  border="0"
                />
              </div>
              <h3 className="text-center text-2xl mt-2">
                1. Easy Registration
              </h3>
              <p className="text-center text-base mt-4">
                Login to Marathi matrimony website <br /> with mobile app or
                website in <br /> simple steps
              </p>
            </div>
            <div className="mt-[108px]">
              <div className="flex justify-center">
                <img
                  className="rounded-2xl w-[159px]"
                  src="https://i.ibb.co/hDVtcCR/Whats-App-Image-2024-05-15-at-7-24-12-PM.jpg"
                  alt="Whats-App-Image-2024-05-15-at-7-00-37-PM"
                  border="0"
                />
              </div>
              <h3 className="text-center text-2xl mt-2">
                1. Easy Registration
              </h3>
              <p className="text-center text-base mt-4">
                Login to Marathi matrimony website <br /> with mobile app or
                website in <br /> simple steps
              </p>
            </div>
          </div> */}
          <div className="flex justify-center">
            <img
              className="w-full"
              src="https://i.ibb.co/jZF4ZHX/Whats-App-Image-2024-05-15-at-7-33-22-PM.jpg"
              alt="Whats-App-Image-2024-05-15-at-7-33-22-PM"
              border="0"
            />
          </div>
        </div>
      </div>
      {/* section  */}
      <div
        className="mt-12"
        style={{
          backgroundImage: `url("https://i.ibb.co/y8YZ8mh/Whats-App-Image-2024-05-15-at-7-49-26-PM.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          //   width: "200px",
          //   height: "200px",
        }}
      >
        <div className="max-w-[1159px] mx-auto pb-[62px]">
          <h3 className="text-center text-[#FF004F] text-[34px] leading-[57px] pt-8 pb-16">
            7 Promises by our Marathi Matrimonial <br />
            Website before you take yours
          </h3>
          <div className="flex gap-[51px]">
            <div className="flex justify-center">
              <img
                className="w-[463px]"
                src="https://i.ibb.co/CWyh4NY/Whats-App-Image-2024-05-15-at-7-58-25-PM.jpg"
                alt="Whats-App-Image-2024-05-15-at-7-58-25-PM"
                border="0"
              />
            </div>
            <div className="flex-1 ">
              {text &&
                text.map((text) => (
                  <div className="flex mb-3 items-center justify-between bg-[#FFE9ED] p-4 rounded-md">
                    <p className="text-[#373737] text-base">{text}</p>
                    <svg
                      width="17.000000"
                      height="9.000000"
                      viewBox="0 0 17 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                    >
                      <desc>Created with Pixso.</desc>
                      <defs />
                      <path
                        id="Vector"
                        d="M8.88 8.63C8.64 8.86 8.33 8.99 7.99 8.99C7.66 8.99 7.35 8.86 7.11 8.63L0.04 1.56C-0.08 1.44 -0.17 1.3 -0.24 1.15C-0.31 1 -0.34 0.84 -0.34 0.67C-0.34 0.5 -0.31 0.34 -0.25 0.19C-0.19 0.03 -0.09 -0.11 0.02 -0.23C0.14 -0.34 0.28 -0.44 0.43 -0.5C0.59 -0.56 0.75 -0.59 0.92 -0.59C1.08 -0.59 1.25 -0.56 1.4 -0.49C1.55 -0.42 1.69 -0.33 1.81 -0.21L7.99 5.98L14.18 -0.21C14.42 -0.44 14.73 -0.56 15.06 -0.56C15.39 -0.56 15.7 -0.43 15.93 -0.19C16.17 0.04 16.3 0.35 16.3 0.68C16.3 1.01 16.18 1.32 15.95 1.56L8.88 8.63Z"
                        fill="#777777"
                        fill-opacity="1.000000"
                        fill-rule="evenodd"
                      />
                    </svg>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      {/* section */}
      <div className="max-w-[1258px] mx-auto mt-11">
        <div className="grid grid-cols-5">
          {tags &&
            tags.map((item) => (
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-3">
                  <img className="w-[43px]" src={item.image} alt="" />
                  <span className="block text-[52px] leading-[78px] text-[#FF6393]">
                    {item.number}
                  </span>
                </div>
                <p className="text-xl mt-6 underline decoration-[#FF6393] underline-offset-8">
                  {item.text}
                </p>
              </div>
            ))}
        </div>
      </div>
      {/* section */}
      <div className="max-w-[1238px] mx-auto mt-[71px] ">
        <h3 className="text-center text-[#FF004F] text-[34px] leading-[57px] pb-6">
          Best & Trusted <br /> Marathi Matrimony Website in Pune
        </h3>
        <p className="text-[#373737] text-base font-light">
          Sundarjodi- Vishwasu Marathi Wiwaha Sanstha! Is one of the best and
          famous marathi Wiwaha Sanstha dedicated especially to all caste
          Marathi bride and grooms. SundarJodi from past 7+ years fixed more
          than 1300+ marriages of Marathi brides and grooms across the globe.
          Our Website and mobile app offers comprehensive search of the expected
          bride or groom suitable for them with various filters such as career.
          Caste, location, profession etc.
        </p>
        <p className="text-[#373737] text-base font-light mt-4">
          The strength of our online marathi Vadhu Var Suchak in India is
          preserving the marathi tradition and culture through the operation. We
          allow prospects to specify their choices, preferences. This allows
          them to connect with potential prospects who share a common interest.
          This also includes the caste wise filters. The castes like Maratha,
          Brahmin, Mali, Dhangar, Buddhist, Sutar, Chambhar, Koshti, CKP,
          Kokanastha rtc.
        </p>
        <p className="text-[#373737] text-base font-light mt-4">
          Sundarjodi has more than 67,000+ verified profiles. Users can create a
          profile by website or mobile app. They can fill their basic details
          right from profile photo, education, occupation, family background,
          Horoscope details, partner expectations. This information allows them
          to choose the life partner of their choice and ensures compatibility
          amongst the registered bride or groom.
        </p>
        <p className="text-[#373737] text-base font-light mt-4">
          Sundarjodi- a Famous Marathi matrimony is a mixture of traditional and
          modern values. We continuously are in the process of fixing marriages
          for the Marathi Community. With our special premium plan our
          Sundarjodi experts will work for individuals personally finding the
          best suitable match for them. Sundarjodi team wishes all of you for
          finding best & Sundarjodi for you.
        </p>
      </div>
    </div>
  );
};

export default Home;
