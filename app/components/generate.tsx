import { IoIosArrowDown } from "react-icons/io";

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
          title="Image"
          recent="New"
          description="Generate image with custom styles in Flux and Ideogram."
          button="Open"
        />
        <GenerateCard
          title="Video"
          description="Generate Videos with Hailuo, Pika, Runway, Luma, and more."
          button="open"
        />
        <GenerateCard
          title="Realtime"
          description="Realtime AI rendering on a canvas. Instant feedback loops."
          button="open"
        />
        <GenerateCard
          title="Enhancer"
          recent="New"
          description="Upscale and enhance images and videos up to 22K."
          button="open"
        />
        <GenerateCard
          title="Edit"
          recent="New"
          description="Add objects, change style, or expand photos and generations"
          button="open"
        />
        <GenerateCard
          title="Video Lipsync"
          recent="New"
          description="Lip sync any video to any audio"
          button="open"
        />
        <GenerateCard
          title="Motion Transfer"
          recent="New"
          description="Transfer motion to images and animate characters."
          button="open"
        />
        <GenerateCard
          title="Train"
          description="Teach Krea to replicate your style, producrs, or characters."
          button="open"
        />
      </div>
    </div>
  );
}

function GenerateCard({
  title,
  recent,
  description,
  button,
}: {
  title: string;
  recent?: string;
  description: string;
  button: string;
}) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-2 items-center">
        {/* Image ection */}
        <div className="img">{/* <img src="" alt="" /> */}</div>
        {/* content Section */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <p className="font-bold text-md">{title}</p>
            <span
              className={`w-fit px-3 py-1 rounded-full font-bold text-sm text-[var(--background)] ${
                recent ? "bg-[var(--color-blue)]" : "bg-[var(--graybackground)]"
              }`}
            >
              {recent}
            </span>
          </div>
          <div className="w-60 text-[var(--color-black)] text-sm">
            {description}
          </div>
        </div>
      </div>

      {/* Button Section */}
      <button className="w-fit bg-[var(--graybackground)] py-2 px-5 rounded-full text-[var( --color-primaryBlack)] font-bold text-sm curoser-pointer">
        {button}
      </button>
    </div>
  );
}

//
