import Header from "@/app/components/header";
import Main from "@/app/components/main";

export default function Home() {
  return (
    <div className="w-screen min-h-screen flex flex-col gap-[3rem]">
      <Header />
      <Main />
    </div>
  );
}
