import Image from "next/image";
import React from "react";

const List = () => {
  return (
    <>
      <main className="flex flex-col items-center w-full px-3">
        <div className="flex items-center justify-between w-full bg-[#D2D4F2] py-2 my-4">
          <div className="flex items-center space-x-10">
            <span className="pl-10">4</span>
            <div className="flex pl-[100px] items-center space-x-10">
              <div className="rounded-full border-2 border-white">
                <Image
                  src={"https://i.pravatar.cc/300"}
                  width={50}
                  height={50}
                  className="rounded-full brightness-75"
                />
              </div>
              <span>Joe</span>
            </div>
          </div>
          <span className="pr-[100px]">445</span>
        </div>
      </main>
    </>
  );
};

export default List;
