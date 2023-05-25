import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <>
      <main className="flex flex-col items-center w-full bg-[#656CEC] rounded-b-[40px]">
        <span className="mb-5 mt-5 border-b-2 text-4xl pb-3 text-white border-gray-200 w-full text-center">
          Leaderboard
        </span>
        <div className="flex items-end space-x-10 mb-5">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-white bg-[#BABEFF] px-2 py-[2px] text-sm rounded-full">
              2
            </span>
            <div className=" border-[5px] border-white rounded-full">
              <Image
                src={"https://i.pravatar.cc/300"}
                width={100}
                height={100}
                className="rounded-full brightness-75"
              />
            </div>
            <span className="text-white bg-[#BABEFF] py-[2px] px-2 text-xs rounded-2xl">
              Jeremy•657
            </span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <span className="text-white bg-[#BABEFF] px-2 py-[2px] text-sm rounded-full">
              1
            </span>
            <div className=" border-[5px] border-white rounded-full">
              <Image
                src={"https://i.pravatar.cc/300"}
                width={150}
                height={150}
                className="rounded-full brightness-75"
              />
            </div>
            <span className="text-white bg-[#BABEFF] py-[2px] px-2 text-xs rounded-2xl">
              Jeremy•657
            </span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <span className="text-white bg-[#BABEFF] px-2 py-[2px] text-sm rounded-full">
              3
            </span>
            <div className=" border-[5px] border-white rounded-full">
              <Image
                src={"https://i.pravatar.cc/300"}
                width={100}
                height={100}
                className="rounded-full brightness-75"
              />
            </div>
            <span className="text-white bg-[#BABEFF] py-[2px] px-2 text-xs rounded-2xl">
              Jeremy•657
            </span>
          </div>
        </div>
      </main>
    </>
  );
};

export default Banner;
