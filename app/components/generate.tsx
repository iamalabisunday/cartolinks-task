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
        <GenerateCard />
        <GenerateCard />
        <GenerateCard />
        <GenerateCard />
        <GenerateCard />
        <GenerateCard />
        <GenerateCard />
        <GenerateCard />
      </div>
    </div>
  );
}

function GenerateCard() {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-2 items-center">
        {/* Image ection */}
        <div className="img">
          <img src="" alt="" />
        </div>
        {/* content Section */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <p className="font-bold text-md">Image</p>
            <span className="w-fit bg-[var(--color-blue)] px-3 py-1 rounded-full text-[var(--background)] font-bold text-sm">
              New
            </span>
          </div>
          <div className="w-60 text-[var(--color-black)] text-sm">
            Generate image with custom styles in Flux and Ideogram.
          </div>
        </div>
      </div>

      {/* Button Section */}
      <button className="w-fit bg-[var(--graybackground)] py-2 px-5 rounded-full text-[var( --color-primaryBlack)] font-bold text-sm curoser-pointer">
        Open
      </button>
    </div>
  );
}

//
