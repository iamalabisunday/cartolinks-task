import { IoIosArrowDown } from "react-icons/io";
import { FaRegImage } from "react-icons/fa6";
import { IoVideocam } from "react-icons/io5";
import { CiPickerHalf } from "react-icons/ci";
import { GiFountainPen } from "react-icons/gi";
import { AiFillEdit } from "react-icons/ai";
import { GiMicrophone } from "react-icons/gi";
import { FaPerson } from "react-icons/fa6";
import { PiChalkboardTeacherFill } from "react-icons/pi";
import React from "react";
import { IoLogoChrome } from "react-icons/io";

export default function Generate() {
  return (
    <div className="w-full flex flex-col gap-6">
      {/* Header section */}
      <div className="w-full flex justify-between items-center px-8">
        <p className="font-bold text-[var(--color-primaryBlack)]">Generate</p>
        <div className="w-fit flex gap-2 items-center text-[var(--color-blue)] font-medium">
          <IoIosArrowDown />
          <p>Show all</p>
        </div>
      </div>
      {/* generate card */}
      <div className="w-full h-auto grid grid-cols-4 gap-6 px-8">
        <GenerateCard
          icon={<FaRegImage className="w-5 h-5" />}
          iconBg={{
            background:
              "linear-gradient(0deg, rgb(208, 227, 241) 0%, rgb(41, 73, 98) 100%)",
          }}
          title="Image"
          recent="New"
          description="Generate image with custom styles in Flux and Ideogram."
          button="Open"
        />

        <GenerateCard
          icon={<IoVideocam className="w-5 h-5" />}
          iconBg={{ backgroundColor: "oklch(79.55% 0.1875 75.3501)" }}
          title="Video"
          description="Generate Videos with Hailuo, Pika, Runway, Luma, and more."
          button="open"
        />
        <GenerateCard
          icon={<CiPickerHalf className="w-5 h-5" />}
          iconBg={{
            background:
              "linear-gradient(0deg, #CEF6FF 0%, #3EA8FF 35%, #256EFF 100%)",
          }}
          title="Realtime"
          description="Realtime AI rendering on a canvas. Instant feedback loops."
          button="open"
        />

        <GenerateCard
          icon={<GiFountainPen className="w-5 h-5" />}
          iconBg={{
            background:
              "linear-gradient(0deg, rgb(136, 136, 136) 0%, rgb(0, 0, 0) 100%)",
          }}
          title="Enhancer"
          recent="New"
          description="Upscale and enhance images and videos up to 22K."
          button="open"
        />
        <GenerateCard
          icon={<AiFillEdit className="w-5 h-5" />}
          iconBg={{
            background:
              "linear-gradient(0deg, rgb(174, 145, 202) 0%, rgb(89, 42, 133) 60%, rgb(24, 7, 40) 100%)",
          }}
          title="Edit"
          recent="New"
          description="Add objects, change style, or expand photos and generations"
          button="open"
        />
        <GenerateCard
          icon={<GiMicrophone className="w-5 h-5" />}
          iconBg={{
            background:
              "linear-gradient(0deg, rgb(187, 202, 145) 0%, rgb(60, 135, 143) 60%, rgb(7, 40, 15) 100%)",
          }}
          title="Video Lipsync"
          recent="New"
          description="Lip sync any video to any audio"
          button="open"
        />
        <GenerateCard
          icon={<FaPerson className="w-5 h-5" />}
          iconBg="bg-[#1C1E1F]"
          title="Motion Transfer"
          recent="New"
          description="Transfer motion to images and animate characters."
          button="open"
        />
        <GenerateCard
          icon={<IoLogoChrome className="w-10 h-10 text-black" />}
          iconBg="bg-[var(--background)]"
          title="Train"
          description="Teach Krea to replicate your style, producrs, or characters."
          button="open"
        />
      </div>
    </div>
  );
}

function GenerateCard({
  icon,
  iconBg,
  title,
  recent,
  description,
  button,
}: {
  icon?: React.ReactNode;
  iconBg?: string | React.CSSProperties;
  title: string;
  recent?: string;
  description: string;
  button: string;
}) {
  // detect if iconBg is an object (style) or string (class)
  const isStyle = typeof iconBg === "object";

  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-2 items-center">
        {/* Icon Section */}
        <div
          className={`min-w-10 min-h-10 rounded-[0.5rem] flex justify-center items-center text-white ${
            !isStyle ? (iconBg as string) : ""
          }`}
          style={isStyle ? (iconBg as React.CSSProperties) : {}}
        >
          {icon}
        </div>

        {/* Content Section */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <p className="font-bold text-[0.85rem]">{title}</p>
            {recent && (
              <span
                className={`w-fit px-3 py-1 rounded-full font-bold text-[0.5rem] text-[var(--background)] ${
                  recent
                    ? "bg-[var(--color-blue)]"
                    : "bg-[var(--graybackground)]"
                }`}
              >
                {recent}
              </span>
            )}
          </div>
          <div className="w-[90%] text-[var(--color-black)] text-[0.75rem]">
            {description}
          </div>
        </div>
      </div>

      {/* Button Section */}
      <button className="w-fit bg-[var(--graybackground)] py-2 px-5 rounded-full text-[var(--color-primaryBlack)] font-bold text-sm cursor-pointer text-[0.75rem]">
        {button}
      </button>
    </div>
  );
}
