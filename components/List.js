import Image from "next/image";
import React from "react";

const List = ({ others }) => {
  return (
    <>
      <main className="flex flex-col items-center w-full px-3">
        {others?.map((item, index) => {
          return (
            <div
              key={index}
              className="flex items-center justify-between w-full space-x-5 bg-[#D2D4F2] py-2 my-4"
            >
              <div className="flex items-center space-x-10">
                <span className="pl-10">{index + 4}</span>
                <div className="flex items-center space-x-5 md:space-x-10">
                  <div className="rounded-full border-2 w-[50px] relative border-white">
                    <Image
                      src={item.avatar}
                      width={50}
                      height={50}
                      className="rounded-full brightness-75"
                      alt="avatar pic"
                    />
                  </div>
                  <span>{item.name}</span>
                </div>
              </div>
              <span className="pr-[20px] md:pr-[100px]">{item.points}</span>
            </div>
          );
        })}
      </main>
    </>
  );
};

export default List;
