import Button from "./UI/Button";


export default function Hero() {
  return (
    <section className="relative bg-background_color h-[90vh] flex items-center justify-center text-center ">
      <div className=" z-10 absolute inset-0 h-full w-full  bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:128px_128px]"></div>
      <div className="container mx-auto z-20">
        <h1 className="text-hero font-bold text-white font-zentry  ">
          Hi, Im <span className="text-secondary">Ghulam Muhammad</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 hover:text-gray-400 font-circular-web ">
          I’m a full-stack developer passionate about building beautiful
          websites and games.
        </p>
        <div className="mt-8 flex justify-center space-x-4 ">
          <Button
            href="#projects"
            bgColor="bg-secondary"
            hoverColor="hover:bg-secondary_hover "
            className="px-6 py-3  text-black font-semibold rounded-lg shadow transition"
          >
            My Projects
          </Button>

          <Button
            href="https://docs.google.com/document/d/YOUR_GOOGLE_DOC_ID_HERE"
            bgColor="bg-gray-800"
            hoverColor="hover:bg-gray-900 "
            className="px-6 py-3  text-white font-semibold rounded-lg shadow transition"
          >
             Resume
          </Button>
        </div>
      </div>
    </section>
  );
}
