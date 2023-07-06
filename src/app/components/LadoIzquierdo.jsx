import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function LadoIzquiero() {
  return (
    <section className="h-screen left-side w-full xl:pr-56 p-6 xl:p-24 lg:w-1/2 flex items-center justify-center bg-gray-950">
    <div className="flex flex-col gap-7">
      <h1 className="font-display text-4xl text-center lg:text-start leading-[2.5rem] lg:leading-[3rem] font-bold text-white">
        The best books 📚 that you should read{" "}
        <span className="text-yellow-300 cursor-pointer hover:text-yellow-400">1 time in your life</span>
      </h1>
  
      <p className="text-sm/tight leading-[1.4rem] text-center   text-gray-300 lg:text-justify">
        Discover the 10 essential books 📗 to boost your personal growth, Immerse
        yourself in the fascinating world of reading and discover the books
        that will transform your life! On our website, we offer you a careful
        selection of the best{" "}
        <span className="text-yellow-300 font-semibold">10 books </span>that you must read
        to reach your full potential.
      </p>
      <div class="flex flex-wrap justify-center lg:justify-start">
        <a
          class="group relative isolate flex items-center rounded-lg px-2 py-0.5 text-[0.8125rem]/6 font-medium text-white/30 transition-colors hover:text-sky-300 gap-x-3 flex-none"
          href="https://github.com/midudev/noticias.dev"
        >
          <span class="absolute inset-0 -z-10 scale-75 rounded-lg bg-white/5 opacity-0 transition group-hover:scale-100 group-hover:opacity-100"></span>
          <AiFillGithub className="flex-none h-4 w-4" />
          <span class="self-baseline text-white font-medium">GitHub</span>
        </a>
        <a
          class="group relative isolate flex items-center rounded-lg px-2 py-0.5 text-[0.8125rem]/6 font-medium text-white/30 transition-colors hover:text-sky-300 gap-x-3 flex-none"
          href="/rss/feed.xml"
        >
          <span class="absolute inset-0 -z-10 scale-75 rounded-lg bg-white/5 opacity-0 transition group-hover:scale-100 group-hover:opacity-100"></span>
          <AiFillLinkedin className="flex-none h-4 w-4" />
          <span class="self-baseline text-white font-medium">Linkedin</span>
        </a>
      </div>
    </div>
  </section>
  );
}
