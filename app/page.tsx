import Header from "@/app/components/header";
import Main from "@/app/components/main";
import Generate from "@/app/components/generate";

export default function Home() {
  return (
    <div className="w-screen min-h-screen flex flex-col gap-[2rem]">
      <Header />
      <Main />
      <Generate />
    </div>
  );
}
