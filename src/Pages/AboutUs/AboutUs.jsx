import Button from "@/components/Button/Button";
import React from "react";
import Treshmeme from "../../assets/Images/image 6.png";
import teamMeet from "../../assets/Images/team of four people discussing team project.png";
import quote from "../../assets/Images/quote.png";
import devLang from "../../assets/Images/Frontend development and programming languages.png";
import mobileApp from "../../assets/Images/Successful mobile app startup launch.png";
import { FaArrowDown, FaArrowDown19, FaArrowRight } from "react-icons/fa6";
const AboutUs = () => {
  return (
    <div className="py-12 px-16 flex flex-col flex-1 gap-[40px]">
      <div className="flex flex-col items-center justify-center gap-[40px]">
        <h1 className=" text-[40px] leading-[130%] font-semibold">About us</h1>
        <p className="text-[24px] text-center leading-[33px] font-medium text-[#3A3A3A]">
          We're a passionate collective of web developers, UI/UX designers, and
          copywriters dedicated to crafting exceptional digital
          experiences,We're a passionate collective of web developers, UI/UX
          designers, and copywriters dedicated to crafting exceptional digital
          experiencesUI/UX designers, and copywriters dedicated to crafting
          exceptional digital experiences
        </p>
        <Button
          className="shadow-md bg-[#1d4ed8] text-white py-2.5 px-5 rounded-[30px]"
          onClick={() => navigate("/contact-us")}
        >
          Contact Us
        </Button>
      </div>
      <div className="flex justify-center items-center gap-[20px]">
        <div className="flex flex-col gap-[10px] max-w-[398px] w-full p-5">
          <h1 className="text-[24px] text-center font-medium leading-[130%]">
            Our Mission
          </h1>
          <p className="text-[16px] text-center text-[#4D4D4D] font-normal leading-[26px]">
            To harness the power of technology to solve complex challenges,
            enhance efficiency, and create lasting value for our clients.
          </p>
        </div>
        <div className="flex flex-col gap-[10px] max-w-[398px] w-full p-5">
          <h1 className="text-[24px] text-center font-medium leading-[130%]">
            Our Vision
          </h1>
          <p className="text-[16px] text-center text-[#4D4D4D] font-normal leading-[26px]">
            To be the trusted technology partner for businesses seeking
            innovation, transformation, and scalable growth.
          </p>
        </div>
        <div className="flex flex-col gap-[10px] max-w-[398px] w-full p-5">
          <h1 className="text-[24px] text-center font-medium leading-[130%]">
            Value
          </h1>
          <p className="text-[16px] text-center text-[#4D4D4D] font-normal leading-[26px]">
            Constantly pushing the boundaries of what's possible, Upholding
            honesty and transparency in every interaction.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-[30px]">
        <div className="flex flex-col items-center gap-2.5">
          <h1 className=" text-[40px] text-center leading-[130%] font-bold">
            Team Tresh
          </h1>
          <p className="text-[24px] leading-[33px] font-medium text-[#3A3A3A] text-center">
            Meet the team leads of experts.
          </p>
        </div>
        <div className="flex flex-col items-center gap-[30px]">
          <div className="flex gap-5 items-center">
            <div className=" relative flex-shrink-0 flex flex-col justify-end items-center isolate max-w-[380px] rounded-[20px] overflow-hidden border w-full h-[480px]">
              <img
                className="w-full h-full object-cover"
                src={Treshmeme}
                alt="Tresh Team Colleague pic"
              />
              <div className="absolute px-6 bottom-5 bg-transparent flex items-center justify-between w-full">
                <div>
                  <h1 className="text-[24px] leading-[33px] font-semibold text-white">
                    Tresh
                  </h1>
                  <p className="text-[16px] leading-[22px] font-normal text-white">
                    CEO
                  </p>
                </div>
                <div className="border border-black/10 rounded-full flex items-center justify-center w-8 h-8 p-1 bg-[#D9D9D9]">
                  <FaArrowRight className="-rotate-45" size={20} />
                </div>
              </div>
            </div>
            <div className=" relative flex-shrink-0 flex flex-col justify-end items-center isolate max-w-[380px] rounded-[20px] overflow-hidden border w-full h-[480px]">
              <img
                className="w-full h-full object-cover"
                src={Treshmeme}
                alt="Tresh Team Colleague pic"
              />
              <div className="absolute px-6 bottom-5 bg-transparent flex items-center justify-between w-full">
                <div>
                  <h1 className="text-[24px] leading-[33px] font-semibold text-white">
                    Tresh
                  </h1>
                  <p className="text-[16px] leading-[22px] font-normal text-white">
                    CEO
                  </p>
                </div>
                <div className="border border-black/10 rounded-full flex items-center justify-center w-8 h-8 p-1 bg-[#D9D9D9]">
                  <FaArrowRight className="-rotate-45" size={20} />
                </div>
              </div>
            </div>
            <div className=" relative flex-shrink-0 flex flex-col justify-end items-center isolate max-w-[380px] rounded-[20px] overflow-hidden border w-full h-[480px]">
              <img
                className="w-full h-full object-cover"
                src={Treshmeme}
                alt="Tresh Team Colleague pic"
              />
              <div className="absolute px-6 bottom-5 bg-transparent flex items-center justify-between w-full">
                <div>
                  <h1 className="text-[24px] leading-[33px] font-semibold text-white">
                    Tresh
                  </h1>
                  <p className="text-[16px] leading-[22px] font-normal text-white">
                    CEO
                  </p>
                </div>
                <div className="border border-black/10 rounded-full flex items-center justify-center w-8 h-8 p-1 bg-[#D9D9D9]">
                  <FaArrowRight className="-rotate-45" size={20} />
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <div className=" relative flex-shrink-0 flex flex-col justify-end items-center isolate max-w-[380px] rounded-[20px] overflow-hidden border w-full h-[480px]">
              <img
                className="w-full h-full object-cover"
                src={Treshmeme}
                alt="Tresh Team Colleague pic"
              />
              <div className="absolute px-6 bottom-5 bg-transparent flex items-center justify-between w-full">
                <div>
                  <h1 className="text-[24px] leading-[33px] font-semibold text-white">
                    Tresh
                  </h1>
                  <p className="text-[16px] leading-[22px] font-normal text-white">
                    CEO
                  </p>
                </div>
                <div className="border border-black/10 rounded-full flex items-center justify-center w-8 h-8 p-1 bg-[#D9D9D9]">
                  <FaArrowRight className="-rotate-45" size={20} />
                </div>
              </div>
            </div>
            <div className=" relative flex-shrink-0 flex flex-col justify-end items-center isolate max-w-[380px] rounded-[20px] overflow-hidden border w-full h-[480px]">
              <img
                className="w-full h-full object-cover"
                src={Treshmeme}
                alt="Tresh Team Colleague pic"
              />
              <div className="absolute px-6 bottom-5 bg-transparent flex items-center justify-between w-full">
                <div>
                  <h1 className="text-[24px] leading-[33px] font-semibold text-white">
                    Tresh
                  </h1>
                  <p className="text-[16px] leading-[22px] font-normal text-white">
                    CEO
                  </p>
                </div>
                <div className="border border-black/10 rounded-full flex items-center justify-center w-8 h-8 p-1 bg-[#D9D9D9]">
                  <FaArrowRight className="-rotate-45" size={20} />
                </div>
              </div>
            </div>
            <div className=" relative flex-shrink-0 flex flex-col justify-end items-center isolate max-w-[380px] rounded-[20px] overflow-hidden border w-full h-[480px]">
              <img
                className="w-full h-full object-cover"
                src={Treshmeme}
                alt="Tresh Team Colleague pic"
              />
              <div className="absolute px-6 bottom-5 bg-transparent flex items-center justify-between w-full">
                <div>
                  <h1 className="text-[24px] leading-[33px] font-semibold text-white">
                    Tresh
                  </h1>
                  <p className="text-[16px] leading-[22px] font-normal text-white">
                    CEO
                  </p>
                </div>
                <div className="border border-black/10 rounded-full flex items-center justify-center w-8 h-8 p-1 bg-[#D9D9D9]">
                  <FaArrowRight className="-rotate-45" size={20} />
                </div>
              </div>
            </div>
          </div>
          <Button
            className="shadow-md bg-[#1d4ed8] text-white py-2.5 px-5 rounded-[30px]"
            onClick={() => navigate("/contact-us")}
          >
            See More
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-[30px]">
        <div className="flex flex-col items-center gap-5">
          <h1 className=" text-[40px] text-center leading-[130%] font-bold">
            Development Process
          </h1>
          <p className="text-[24px] leading-[33px] font-medium text-[#3A3A3A] text-center">
            Our formula
          </p>
        </div>
        <div className="flex flex-col gap-[30px]">
          <div className="flex gap-[50px] justify-between items-center">
            <div className="max-w-[580px] py-2.5 px-5 border border-black/20 shadow-md rounded-[10px] w-full flex justify-between items-center relative">
              <div className="max-w-[400px] w-full">
                <h1 className="font-medium text-[20px] leading-[24px] ">
                  1. Client Meeting
                </h1>
                <p className="text-[#3A3A3A] text-[16px] leading-[24px] ">
                  We are always on the lookout for a new cutting edge technology
                  to quickly deploy for our customer to take competitive
                  advantage in the market.
                </p>
              </div>
              <img
                src={teamMeet}
                alt="Team-Meeting"
                className="flex-1 absolute right-0 bottom-0"
              />
            </div>
            <div className="max-w-[580px] py-2.5 px-5 border border-black/20 shadow-md rounded-[10px] w-full flex justify-between items-center relative">
              <div className="max-w-[400px] w-full">
                <h1 className="font-medium text-[20px] leading-[24px] ">
                  2. Quotation
                </h1>
                <p className="text-[#3A3A3A] text-[16px] leading-[24px] ">
                  Software programs have become very useful these days. When
                  looking for software programs to use for your business, you
                  would want the best one that is within your price range.
                </p>
              </div>
              <img
                src={quote}
                alt="Quote"
                className="flex-1 absolute right-0 bottom-0"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[30px]">
          <div className="flex gap-[50px] justify-between items-center">
            <div className="max-w-[580px] py-2.5 px-5 border border-black/20 shadow-md rounded-[10px] w-full flex justify-between items-center relative">
              <div className="max-w-[400px] w-full">
                <h1 className="font-medium text-[20px] leading-[24px] ">
                  3. Software Development
                </h1>
                <p className="text-[#3A3A3A] text-[16px] leading-[24px] ">
                  Software programs have become very useful these days. When
                  looking for software programs to use for your business, you
                  would want the best one that is within your price range.
                </p>
              </div>
              <img
                src={devLang}
                alt="Dev-Language"
                className="flex-1 absolute right-0 bottom-0"
              />
            </div>
            <div className="max-w-[580px] py-2.5 px-5 border border-black/20 shadow-md rounded-[10px] w-full flex justify-between items-center relative">
              <div className="max-w-[400px] w-full">
                <h1 className="font-medium text-[20px] leading-[24px] ">
                  4. Launch
                </h1>
                <p className="text-[#3A3A3A] text-[16px] leading-[24px] ">
                  Software programs have become very useful these days. When
                  looking for software programs to use for your business, you
                  would want the best one that is within your price range.
                </p>
              </div>
              <img
                src={mobileApp}
                alt="Team-Meeting"
                className="flex-1 absolute right-0 bottom-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
