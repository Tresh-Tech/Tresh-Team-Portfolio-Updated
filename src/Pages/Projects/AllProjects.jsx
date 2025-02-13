import React from "react";
import eComm from "../../assets/Images/Ecommerce.svg";
import Desktop22 from "../../assets/Images/Desktop22.png";
import Car from "../../assets/Images/Car.png";
import Frame161 from "../../assets/Images/Frame161.png";
import Button from "@/components/Button/Button";
const AllProjects = () => {
  return (
    <div className="py-12 px-16 flex flex-col flex-1 gap-[30px]">
      <div className="flex flex-col items-center gap-[30px]">
        <h1 className=" text-[40px] leading-[130%] font-semibold">Projects</h1>
        <p className="text-[24px] text-center leading-[33px] font-medium text-[#3A3A3A]">
          Our work speaks for itself.
        </p>
      </div>
      <div className="flex flex-col items-center gap-[40px]">
        <div className="flex justify-between items-center w-full">
          <div className="max-w-[575px] w-full h-[500px] border-[0.5px] border-black/20 py-5 px-[30px] flex flex-col gap-5 rounded-[10px]">
            <h1 className="font-medium text-xl leading-[24px] text-[#3A3A3A]">
              E-commerce
            </h1>
            <img src={eComm} alt="Ecommerce site" className="w-full h-auto" />
            <div className="flex justify-between items-end">
              <div className="flex flex-col gap-2.5 max-w-[360px] w-full">
                <h1 className="font-medium text-2xl leading-[24px]">
                  Dashboard Management
                </h1>
                <p className="font-normal leading-[24px] text-[#3A3A3A]">
                  A shoe store web application which simplifies user purchase
                  process
                </p>
              </div>
              <div className="flex-1 flex justify-end">
                <Button className="shadow-md bg-[#1d4ed8] text-white py-2.5 px-5 rounded-[30px]">
                  View
                </Button>
              </div>
            </div>
          </div>
          <div className="max-w-[575px] w-full h-[500px] border-[0.5px] border-black/20 py-5 px-[30px] flex flex-col gap-5 rounded-[10px]">
            <div className="flex items-center justify-between">
              <h1 className="font-medium text-xl leading-[24px] text-[#3A3A3A]">
                Tourism
              </h1>
              <small className="leading-[19px] text-center py-1.5 text-white bg-[#11CD00] border border-white rounded-md px-2.5 shadow-sm">
                For sale
              </small>
            </div>
            <img
              src={Desktop22}
              alt="Ecommerce site"
              className="w-full h-auto"
            />
            <div className="flex justify-between items-end">
              <div className="flex flex-col gap-2.5 max-w-[360px] w-full">
                <h1 className="font-medium text-2xl leading-[24px]">
                  Dashboard Management
                </h1>
                <p className="font-normal leading-[24px] text-[#3A3A3A]">
                  A shoe store web application which simplifies user purchase
                  process
                </p>
              </div>
              <div className="flex-1 flex justify-end gap-[30px]">
                <Button className="shadow-md bg-[#1d4ed8] text-white py-2.5 px-5 rounded-[30px]">
                  View
                </Button>
                <Button
                  //   variant="plain"
                  className="border border-[#0000CD] shadow-md bg-transparent py-2.5 px-5 rounded-[30px]"
                >
                  Buy
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center w-full">
          <div className="max-w-[575px] w-full h-[500px] border-[0.5px] border-black/20 py-5 px-[30px] flex flex-col gap-5 rounded-[10px]">
            <h1 className="font-medium text-xl leading-[24px] text-[#3A3A3A]">
              Management
            </h1>
            <img src={eComm} alt="Ecommerce site" className="w-full h-auto" />
            <div className="flex justify-between items-end">
              <div className="flex flex-col gap-2.5 max-w-[360px] w-full">
                <h1 className="font-medium text-2xl leading-[24px]">Logo</h1>
                <p className="font-normal leading-[24px] text-[#3A3A3A]">
                  A shoe store web application which simplifies user purchase
                  process
                </p>
              </div>
              <div className="flex-1 flex justify-end">
                <Button className="shadow-md bg-[#1d4ed8] text-white py-2.5 px-5 rounded-[30px]">
                  View
                </Button>
              </div>
            </div>
          </div>
          <div className="max-w-[575px] w-full h-[500px] border-[0.5px] border-black/20 py-5 px-[30px] flex flex-col gap-5 rounded-[10px]">
            <div className="flex items-center justify-between">
              <h1 className="font-medium text-xl leading-[24px] text-[#3A3A3A]">
                Dealership
              </h1>
            </div>
            <img src={Car} alt="Ecommerce site" className="w-full h-auto" />
            <div className="flex justify-between items-end">
              <div className="flex flex-col gap-2.5 max-w-[360px] w-full">
                <h1 className="font-medium text-2xl leading-[24px]">Cars</h1>
                <p className="font-normal leading-[24px] text-[#3A3A3A]">
                  A shoe store web application which simplifies user purchase
                  process
                </p>
              </div>
              <div className="flex-1 flex justify-end gap-[30px]">
                <Button className="shadow-md bg-[#1d4ed8] text-white py-2.5 px-5 rounded-[30px]">
                  View
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center w-full">
          <div className="max-w-[575px] w-full h-[500px] border-[0.5px] border-black/20 py-5 px-[30px] flex flex-col gap-5 rounded-[10px]">
            <h1 className="font-medium text-xl leading-[24px] text-[#3A3A3A]">
              Website Vendor (Web And Mobile app)
            </h1>
            <img
              src={Frame161}
              alt="Ecommerce site"
              className="w-full h-auto"
            />
            <div className="flex justify-between items-end">
              <div className="flex flex-col gap-2.5 max-w-[360px] w-full">
                <h1 className="font-medium text-2xl leading-[24px]">Wei</h1>
                <p className="font-normal leading-[24px] text-[#3A3A3A]">
                  A shoe store web application which simplifies user purchase
                  process
                </p>
              </div>
              <div className="flex-1 flex justify-end">
                <Button className="shadow-md bg-[#1d4ed8] text-white py-2.5 px-5 rounded-[30px]">
                  View
                </Button>
              </div>
            </div>
          </div>
          <div className="max-w-[575px] w-full h-[500px] border-[0.5px] border-black/20 py-5 px-[30px] flex flex-col gap-5 rounded-[10px]">
            <div className="flex items-center justify-between">
              <h1 className="font-medium text-xl leading-[24px] text-[#3A3A3A]">
                Dealership
              </h1>
            </div>
            <img src={Car} alt="Ecommerce site" className="w-full h-auto" />
            <div className="flex justify-between items-end">
              <div className="flex flex-col gap-2.5 max-w-[360px] w-full">
                <h1 className="font-medium text-2xl leading-[24px]">
                  Car Dealership Web
                </h1>
                <p className="font-normal leading-[24px] text-[#3A3A3A]">
                  A shoe store web application which simplifies user purchase
                  process
                </p>
              </div>
              <div className="flex-1 flex justify-end gap-[30px]">
                <Button className="shadow-md bg-[#1d4ed8] text-white py-2.5 px-5 rounded-[30px]">
                  View
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center w-full">
          <div className="max-w-[575px] w-full h-[500px] border-[0.5px] border-black/20 py-5 px-[30px] flex flex-col gap-5 rounded-[10px]">
            <h1 className="font-medium text-xl leading-[24px] text-[#3A3A3A]">
              Home Rental (Mobile)
            </h1>
            <img src={Frame161} alt="Ecommerce site" className="w-full h-auto" />
            <div className="flex justify-between items-end">
              <div className="flex flex-col gap-2.5 max-w-[360px] w-full">
                <h1 className="font-medium text-2xl leading-[24px]">
                  Bahay
                </h1>
                <p className="font-normal leading-[24px] text-[#3A3A3A]">
                  A shoe store web application which simplifies user purchase
                  process
                </p>
              </div>
              <div className="flex-1 flex justify-end">
                <Button className="shadow-md bg-[#1d4ed8] text-white py-2.5 px-5 rounded-[30px]">
                  View
                </Button>
              </div>
            </div>
          </div>
          <div className="max-w-[575px] w-full h-[500px] border-[0.5px] border-black/20 py-5 px-[30px] flex flex-col gap-5 rounded-[10px]">
            <div className="flex items-center justify-between">
              <h1 className="font-medium text-xl leading-[24px] text-[#3A3A3A]">
                Dealership
              </h1>
            </div>
            <img src={Car} alt="Ecommerce site" className="w-full h-auto" />
            <div className="flex justify-between items-end">
              <div className="flex flex-col gap-2.5 max-w-[360px] w-full">
                <h1 className="font-medium text-2xl leading-[24px]">
                  Car Dealership Web
                </h1>
                <p className="font-normal leading-[24px] text-[#3A3A3A]">
                  A shoe store web application which simplifies user purchase
                  process
                </p>
              </div>
              <div className="flex-1 flex justify-end gap-[30px]">
                <Button className="shadow-md bg-[#1d4ed8] text-white py-2.5 px-5 rounded-[30px]">
                  View
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
