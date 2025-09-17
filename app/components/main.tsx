export default function Main() {
  return (
    <div className="w-full h-fit pl-8 flex flex-col gap-8">
      <div className="w-full flex gap-8 overflow-x-auto scrollbar-auto scroll-smooth snap-x pr-8">
        <Card
          img="/Wan.webp"
          title="WAN 2.2 Image generation"
          description="Generate complex images with the brand and powerful WAN 2.2 model.
              Exceptional prompt adherence and ultra-realistic textures."
          button="Try WAN 2.2"
        />
        <Card
          video="https://s.krea.ai/OSSKreaFlux1_video.mp4"
          title="WAN 2.2 Video Demo"
          description="A video demo showing WAN 2.2 model’s advanced generation."
          button="Watch Demo"
        />
        <Card
          img="/Seedream.webp"
          title="Seedream 4.0"
          description="Try the brand new and record-breaking image generation model Seedream 4.0 by ByteDance."
          button="Try Seedream"
        />
      </div>

      {/* Dots */}
      <div className="w-full flex justify-center items-center gap-4 cursor-pointer">
        {Array(9)
          .fill(null)
          .map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 rounded-full bg-[var(--color-black)]"
            ></div>
          ))}
      </div>
    </div>
  );
}

<div className="w-full flex justify-end items-center gap-4"></div>;

// card section component
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
  button: string;
}) {
  return (
    <div className="relative min-w-[50rem] max-h-[30rem] rounded-[1.25rem] overflow-hidden snap-start">
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
          <div className="w-[28rem] text-[1rem] flex flex-col gap-2 ">
            <p className="text-[2rem] font-medium">{title}</p>
            <p className="leading-7 tracking-[0.05rem]">{description}</p>
          </div>
          <button className="w-fit bg-[var(--background)] py-4 px-6 rounded-full text-[var(--color-black)] text-[0.78rem] font-bold cursor-pointer">
            {button}
          </button>
        </div>
      </div>
    </div>
  );
}
