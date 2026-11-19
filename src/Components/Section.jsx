import KedarnathTemple from "../assets/Kedarnath-Temple.jpg";

function Section({ title, heading, description }) {
  return (
    <section
      className="relative mt-18 flex min-h-[300px] items-center bg-cover bg-center px-6"
      style={{ backgroundImage: `url(${KedarnathTemple})` }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(10, 35, 75, 0.78) 0%, rgba(10, 35, 75, 0.4) 40%, transparent 70%), linear-gradient(to left, rgba(10, 35, 75, 0.78) 0%, rgba(10, 35, 75, 0.4) 40%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl text-white">
        <p className="mb-3 text-sm">Home / {title}</p>
        <h1 className="text-xl text-yellow-400 font-bold font-serif">A JOURNEY WITH MEANING</h1>
        <h1 className="text-4xl font-bold mt-2 md:text-5xl font-serif">{heading}</h1>
        <p className="mt-4 max-w-xl text-sm">{description}</p>
      </div>
    </section>
  );
}

export default Section;