"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

export default function Main() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const cards = [
    {
      img: "/Wan.webp",
      title: "WAN 2.2 Image generation",
      description:
        "Generate complex images with the brand and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures.",
      button: (
        <Link href="/wan2.2" className="mainbtn">
          Try WAN 2.2
        </Link>
      ),
    },
    {
      img: "/Flux.webp",
      title: "FLUX.1 Krea",
      description:
        "We're making the weights to our FLUX.1 Krea modal open-source, Download and run our model weights, read the technical report , or generate with it in Krea Image",
      button: (
        <Link href="/seedream" className="mainbtn">
          Try Flux.1
        </Link>
      ),
    },
    {
      video: "https://s.krea.ai/OSSKreaFlux1_video.mp4",
      title: "Seedream 4.0",
      description:
        "Try the brand new and record-breaking image generation model Seedream 4.0 by ByteDance.",
      button: (
        <Link href="/flux1" className="mainbtn">
          Watch Seedream
        </Link>
      ),
    },
  ];

  const scrollToCard = (index: number) => {
    const container = containerRef.current;
    if (!container) return;

    const card = container.children[index] as HTMLElement;
    if (card) {
      card.scrollIntoView({ behavior: "smooth", inline: "center" });
      setCurrentIndex(index);
    }
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % cards.length;
    scrollToCard(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + cards.length) % cards.length;
    scrollToCard(prevIndex);
  };

  return (
    <div className="w-full h-fit pl-8 flex flex-col gap-2">
      {/* /////////////////// */}
      <div
        ref={containerRef}
        className="w-full flex gap-8 overflow-x-auto scroll-smooth snap-x pr-8 no-scrollbar"
      >
        {cards.map((card, i) => (
          <Card key={i} {...card} />
        ))}
      </div>

      {/* /////////////////// */}
      <div className="w-full flex items-center px-6">
        {/* Empty spacer */}
        <div className="flex-1"></div>

        {/* Dots */}
        <div className="flex justify-center items-center gap-4 cursor-pointer flex-1">
          {cards.map((_, i) => (
            <div
              key={i}
              onClick={() => scrollToCard(i)}
              className={`w-3 h-3 rounded-full transition-colors ${
                i === currentIndex
                  ? "bg-[var(--color-black)]"
                  : "bg-[var(--graybackground)]"
              }`}
            ></div>
          ))}
        </div>

        {/* Arrows */}
        <div className="flex justify-end items-center gap-2 flex-1">
          <div
            onClick={handlePrev}
            className="flex justify-center items-center cursor-pointer w-8 h-8 rounded-full bg-[var(--graybackground)]"
          >
            <IoIosArrowBack />
          </div>
          <div
            onClick={handleNext}
            className="flex justify-center items-center cursor-pointer w-8 h-8 rounded-full bg-[var(--graybackground)]"
          >
            <IoIosArrowForward />
          </div>
        </div>
      </div>

      {/* Hide scrollbar CSS */}
      <style jsx>{`
        .no-scrollbar {
          -ms-overflow-style: none; /* IE/Edge */
          scrollbar-width: none; /* Firefox */
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none; /* Chrome, Safari */
        }
      `}</style>
    </div>
  );
}

// Card Component
function Card({
  img,
  video,
  title,
  description,
  button,
}: {
  img?: string;
  video?: string;
  title: string;
  description: string;
  button: React.ReactNode;
}) {
  return (
    <div
      className="relative rounded-[1.25rem] overflow-hidden snap-start"
      style={{
        minWidth: "clamp(30rem, 78vw, 48rem)",
        maxHeight: "clamp(15rem, 55vh, 28rem)",
      }}
    >
      {/* video and image */}
      {video ? (
        <video
          src={video}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      ) : (
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      )}

      {/* Gradient and Content */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#000000cc] to-transparent rounded-b-[1.25rem]">
        <div className="absolute w-full bottom-0 text-white text-xl p-8 flex justify-between items-end">
          <div className="w-[28rem] text-[1rem] flex flex-col gap-2">
            <p className="text-[1.85rem] font-[520]">{title}</p>
            <p className="leading-6 tracking-[0.05rem]">{description}</p>
          </div>
          {/* Button section */}
          {button}
        </div>
      </div>
    </div>
  );
}
