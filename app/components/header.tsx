"use client";
import { HiMiniBellAlert } from "react-icons/hi2";
import { MdSunny } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { RiGalleryFill } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import GradientBall from "./gredientBall";
import { IoIosArrowDown } from "react-icons/io";
import { GoHomeFill } from "react-icons/go";
import { HiMiniPhoto } from "react-icons/hi2";
import { HiVideoCamera } from "react-icons/hi2";
import { GiFountainPen } from "react-icons/gi";
import { MdEditOff } from "react-icons/md";
import { SiExcalidraw } from "react-icons/si";
import { AiFillFolder } from "react-icons/ai";

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", icon: <GoHomeFill /> },
    { href: "/photo", icon: <HiMiniPhoto /> },
    { href: "/camera", icon: <HiVideoCamera /> },
    { href: "/pen", icon: <GiFountainPen /> },
    { href: "/edit", icon: <MdEditOff /> },
    { href: "/draw", icon: <SiExcalidraw /> },
    { href: "/folder", icon: <AiFillFolder /> },
  ];

  return (
    <div className="w-full flex py-4 px-[1.5rem] justify-between items-center text-[var(----color-black)]">
      {/* First Section */}
      <div className="flex gap-6 items-center text-[var(--color-black)]">
        <Image src="/logoBlack.svg" alt="KreaAllogo" width={40} height={40} />
        <div className="flex gap-3 items-center">
          <GradientBall />
          <p>benevolentnimblebt</p>
          <IoIosArrowDown className="cursor-pointer text-[1.25rem]" />
        </div>
      </div>

      {/* Second Section with Active Icon */}
      <div className="headerstyle gap-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-xl transition px-4 py-3  flex justify-center align-center cursor-pointer
                ${
                  isActive
                    ? "bg-[var(--background)] text-[var(--color-black)] shadow-md"
                    : "text-[var(--color-black)] hover:bg-[var(--background) hover:shadow-md"
                }`}
            >
              <span className="text-[1.25rem]">{item.icon}</span>
            </Link>
          );
        })}
      </div>

      {/* Third Section */}
      <div className="flex gap-2 justify-center align-center text-[var(--color-black)]">
        <div className="headerstyle gap-2">
          <RiGalleryFill className="iconSide" />
          <p>Gallery</p>
        </div>
        <div className="headerstyle gap-2">
          <BiSupport className="iconSide" />
          <p>Support</p>
        </div>
        <div className="headerstyle">
          <HiMiniBellAlert className="iconSide" />
        </div>
        <div className="headerstyle">
          <MdSunny className="iconSide" />
        </div>
        <div className="headerstyle bg-white">
          <GradientBall />
        </div>
      </div>
    </div>
  );
}
