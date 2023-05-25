import Image from "next/image";
import React from "react";

const Banner = ({ topThree }) => {
  return (
    <>
      <main className="flex flex-col items-center w-full bg-[#656CEC] rounded-b-[40px]">
        <span className="mb-5 mt-5 border-b-2 text-4xl pb-3 text-white border-gray-200 w-full text-center">
          Leaderboard
        </span>
        <div className="flex flex-col space-y-5 md:space-y-0 md:flex-row md:items-end md:space-x-10 mb-5 px-5">
          <div className="flex flex-col-reverse md:flex-row md:items-end md:space-x-12 ">
            <div className="flex flex-col items-center space-y-2 second mt-5 md:mt-0">
              <span className="text-white bg-[#BABEFF] px-2 py-[2px] text-sm rounded-full">
                2
              </span>
              <div className=" border-[5px] border-white rounded-full">
                <Image
                  src={topThree[1].avatar}
                  width={100}
                  height={100}
                  className="rounded-full brightness-75"
                  alt="avatar pic"
                />
              </div>
              <span className="text-white bg-[#BABEFF] py-[2px] px-2 text-xs rounded-2xl">
                {topThree[1].name} • {topThree[1].points}
              </span>
            </div>
            <div className="flex flex-col items-center space-y-2 first">
              <span className="text-white bg-[#BABEFF] px-2 py-[2px] text-sm rounded-full">
                1
              </span>
              <div className=" border-[5px] border-white rounded-full">
                <Image
                  src={topThree[0].avatar}
                  width={150}
                  height={150}
                  className="rounded-full brightness-75"
                  alt="avatar pic"
                />
              </div>
              <span className="text-white bg-[#BABEFF] py-[2px] px-2 text-xs rounded-2xl">
                {topThree[0].name} • {topThree[0].points}
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-2 third">
            <span className="text-white bg-[#BABEFF] px-2 py-[2px] text-sm rounded-full">
              3
            </span>
            <div className=" border-[5px] border-white rounded-full">
              <Image
                src={topThree[2].avatar}
                width={100}
                height={100}
                className="rounded-full brightness-75"
                alt="avatar pic"
              />
            </div>
            <span className="text-white bg-[#BABEFF] py-[2px] px-2 text-xs rounded-2xl">
              {topThree[2].name} • {topThree[2].points}
            </span>
          </div>
        </div>
      </main>
    </>
  );
};

export default Banner;
