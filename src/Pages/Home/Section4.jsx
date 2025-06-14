import Button from "@/components/Button/Button";
import React from "react";

const Section4 = () => {
  return (
    <>
      <div className="py-6 px-2 md:py-12 md:px-6 flex flex-col gap-6 md:gap-[30px]">
        
        <div className="flex flex-col items-center gap-2.5 md:gap-6">
          <h1 className=" text-[30px] md:text-[40px] leading-[130%] font-semibold">
            Testimonial
          </h1>
          <p className="text-base md:text-[24px] leading-[33px] font-medium text-[#3A3A3A]">
            What our client says about us
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-[10px]">
          <div className="flex flex-col gap-[10px] max-w-[390px] w-full p-5">
            <h1 className="text-[24px] text-center font-bold leading-[33px]">
              Priya Sharma
            </h1>
            <p className="text-base md:text-[13px] text-center text-[#3A3A3A] font-normal leading-[18px]">
              CTO of CloudSphere
            </p>
            <p className="text-base md:text-[16px] text-center text-[#3A3A3A] font-normal leading-[200%]">
              We were struggling with scaling our cloud infrastructure, but{" "}
              <strong>Tresh</strong> provided a seamless solution.{" "}
            </p>
            <p className="text-base md:text-[16px] text-center font-medium">
              <a href="" className="text-primary leading-[22px] underline">
                www.tresh.com
              </a>
            </p>
          </div>
          <div className="flex flex-col gap-[10px] max-w-[390px] w-full p-5">
            <h1 className="text-[24px] text-center font-bold leading-[33px]">
              Olamilekan
            </h1>
            <p className="text-base md:text-[13px] text-center text-[#3A3A3A] font-normal leading-[18px]">
              COO of TechNova Corp
            </p>
            <p className="text-base md:text-[16px] text-center text-[#3A3A3A] font-normal leading-[200%]">
              The team at <strong>Tresh</strong> transformed our outdated
              systems into a sleek, efficient platform. Their innovative
              approach and attention to detail made.
            </p>
            <p className="text:base md:text-[16px] text-center font-medium">
              <a href="" className="text-primary leading-[22px] underline">
                www.tresh.com
              </a>
            </p>
          </div>
          <div className="flex flex-col gap-[10px] max-w-[390px] w-full p-5">
            <h1 className="text-[24px] text-center font-bold leading-[33px]">
              Michael Rivera
            </h1>
            <p className="text-base md:text-[13px] text-center text-[#3A3A3A] font-normal leading-[18px]">
              Founder of FitTrack
            </p>
            <p className="text-base md:text-[16px] text-center text-[#3A3A3A] font-normal leading-[200%]">
              From concept to delivery, the professionalism and expertise of{" "}
              <strong>Tresh</strong> were unmatched. They didn’t just build our
              mobile app.
            </p>
            <p className="text-base md:text-[16px] text-center font-medium">
              <a href="" className="text-primary leading-[22px] underline">
                www.tresh.com
              </a>
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Button className="shadow-md border border-[##4D4D4D1A] bg-[#1d4ed8] text-white py-2.5 font-normal px-5 rounded-[30px]">View our project</Button>
        </div>
      </div>
    </>
  );
};

export default Section4;
