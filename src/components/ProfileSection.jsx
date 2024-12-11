import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import {glowEffect} from "@/helper/styles"
import CustomTitle from "./CustomTitle";

const ProfileSection = () => {
  return (
    <div className="bg-black py-8 md:h-[100vh] flex items-center justify-center">
      <div className=" max-w-[1280px] flex flex-col justify-center items-center mx-auto py-[20px]">
      <CustomTitle text="Profile Summary" />
        <div className=" flex flex-col  gap-5 md:flex md:flex-row md:h-[70vh] md:px-10 text-justify lg:flex w-full  items-center my-5">
          <div className="w-1/2 h-[60vh] flex flex-col gap-3 items-center justify-center">
            {/* images */}

            <Image
              src="https://images.unsplash.com/photo-1519689157479-930721ed8836?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={100}
              height={100}
              alt="profile"
              className="w-full h-[60vh] rounded-lg "
              style={glowEffect}
            />
           
          </div>
          {/* text */}
          <div className="w-1/2 h-[60vh] flex flex-col justify-between">
            <div className="flex flex-col gap-3">
            <h1 className="text-white text-4xl  ">I'm  Name of the Profile</h1>
            <h3 className="text-white text-xl">Famous Dancer</h3>
            </div>
            <p className="text-gray-400 ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Temporibus, voluptate eos perferendis repellat velit iusto labore!
              Laudantium consectetur molestiae nostrum magnam deleniti
              architecto dignissimos voluptatum. Optio sunt a repudiandae
              exercitationem!
            </p>
            <p className="text-gray-400 ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Temporibus, voluptate eos perferendis repellat velit iusto labore!
              Laudantium consectetur molestiae nostrum magnam deleniti
              architecto dignissimos voluptatum. Optio sunt a repudiandae
              exercitationem!
            </p>
            <Button variant="gradient_bg" className="w-[200px]">View More</Button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
