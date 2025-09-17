export default function Main() {
  return (
    <div className="w-full h-fit pl-8">
      <div className="w-full flex gap-6 overflow-x-auto scrollbar-auto scroll-smooth snap-x pr-8">
        <Card
          img="/Wan.webp"
          title="WAN 2.2 Image generation"
          description="Generate complex images with the brand and powerful WAN 2.2 model.
              Exeptional prompt adherence and ultra-realistc textures."
          button="Try WAN 2.2"
        />
        <Card
          img="/Wan.webp"
          title="FLUX.1 Krea"
          description="We're making the weight to our FLUX.1 Krea model open source. Download and run our model weights, read and technical report, or generate with it in Krea Image."
          button="Try FLUX.1"
        />
        <Card
          img="/Wan.webp"
          title="WAN 2.2 Image generation"
          description="Generate complex images with the brand and powerful WAN 2.2 model.
              Exeptional prompt adherence and ultra-realistc textures."
          button="Try WAN 2.2"
        />
      </div>
    </div>
  );
}

function Card({
  img,
  title,
  description,
  button,
}: {
  img: string;
  title: string;
  description: string;
  button: string;
}) {
  return (
    <div
      className="relative min-w-[55rem] min-h-[35rem] rounded-[1.25rem] bg-cover bg-center snap-start"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#000000cc] to-transparent rounded-b-[1.25rem]">
        <div className="absolute w-full bottom-0 text-white text-xl p-8 flex justify-between items-end">
          <div className="w-[26rem] text-[1rem] flex flex-col gap-2 ">
            <p className="text-[2rem] font-medium">{title}</p>
            <p>{description}</p>
          </div>
          <button className="w-fit bg-[var(--background)] py-4 px-6 rounded-full text-[var(--color-black)] text-[0.78rem] font-bold cursor-pointer">
            {button}
          </button>
        </div>
      </div>
    </div>
  );
}
