import { IoIosArrowDown } from "react-icons/io";

export default function Generate() {
  return (
    <>
      <div className="w-full flex justify-between items-center px-8">
        <p>Generate</p>
        <div className="w-fit flex gap-2 items-center text-[var(--color-blue)] font-medium">
          <IoIosArrowDown />
          <p>Show all</p>
        </div>
      </div>
    </>
  );
}
