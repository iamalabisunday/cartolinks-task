import Header from "@/app/components/header";
import Main from "@/app/components/main";
import Generate from "@/app/components/generate";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col gap-6 justify-between pb-6">
      <Header />
      <Main />
      <Generate />
    </div>
  );
}
