import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { HiMail } from "react-icons/hi";

export default function LadoIzquiero() {
  return (
    <section className="h-screen left-side w-full  xl:pr-56 p-6 xl:p-24 lg:w-1/2 flex items-center justify-center bg-gray-950">
      <div className="flex flex-col gap-7">
       
        <h1 className="font-display text-4xl leading-[2.8rem] font-bold text-white">
          The best books 📚 that you should read{" "}
          <span className="text-yellow-300">1 time in your life</span>
        </h1>

        <p className="text-sm/tight font-medium leading-[1.4rem]  text-gray-300 text-justify">
          Discover the <span className="text-gray-300 font-semibold">10 </span>
          essential books to boost your personal growth, Immerse yourself in the
          fascinating world of reading and discover the books that will
          transform your life! On our website, we offer you a careful selection
          of the best <span className="text-yellow-300">10 books </span>📗that
          you must read to reach your full potential.
        </p>
        <div>
          <img
            class="h-auto max-w-full rounded-md cursor-pointer"
            src="/img/img.jpg"
            alt=""
          />
        </div>
        <div class="flex flex-wrap">
          <a
            class="group relative isolate flex items-center rounded-lg px-2 py-0.5 text-[0.8125rem]/6 font-medium text-white/30 transition-colors hover:text-sky-300 gap-x-3 flex-none"
            href="https://github.com/midudev/noticias.dev"
          >
            <span class="absolute inset-0 -z-10 scale-75 rounded-lg bg-white/5 opacity-0 transition group-hover:scale-100 group-hover:opacity-100"></span>
            <AiFillGithub className="h-5 w-5" />
            <span class="self-baseline text-white font-medium">GitHub</span>
          </a>
          <a
            class="group relative isolate flex items-center rounded-lg px-2 py-0.5 text-[0.8125rem]/6 font-medium text-white/30 transition-colors hover:text-sky-300 gap-x-3 flex-none"
            href="/rss/feed.xml"
          >
            <span class="absolute inset-0 -z-10 scale-75 rounded-lg bg-white/5 opacity-0 transition group-hover:scale-100 group-hover:opacity-100"></span>
            <AiFillLinkedin className="h-5 w-5" />
            <span class="self-baseline text-white font-medium">Linkedin</span>
          </a>
          <a
            class="group relative isolate flex items-center rounded-lg px-2 py-0.5 text-[0.8125rem]/6 font-medium text-white/30 transition-colors hover:text-sky-300 gap-x-3 flex-none"
            href="/rss/feed.xml"
          >
            <span class="absolute inset-0 -z-10 scale-75 rounded-lg bg-white/5 opacity-0 transition group-hover:scale-100 group-hover:opacity-100"></span>
            <HiMail className="h-5 w-5" />
            <span class="self-baseline text-white font-medium">Mail</span>
          </a>
        </div>
      </div>
    </section>
  );
}
