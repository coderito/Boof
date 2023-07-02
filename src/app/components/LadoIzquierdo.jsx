import {
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { HiMail } from "react-icons/hi";

export default function LadoIzquiero() {
  return (
    <section className="h-screen w-full xl:pr-56 p-6 xl:p-24 lg:w-1/2 flex items-center justify-center bg-gray-950">
      <div className="flex flex-col gap-7">
        <h1 className="font-display text-4xl leading-[2.8rem] font-bold text-white">
          Los mejores libros 📚 que debes leer{" "}
          <span className="text-yellow-300"> 1 vez en tu vida</span>
        </h1>
        <p className="text-sm/tight font-medium leading-[1.4rem]   text-gray-300">
          Encuentra los mejores 10 libros que debes leer para tu crecimineto
          personal
        </p>
        <div class="flex flex-wrap gap-x-1 gap-y-3 justi justify-start">
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
            <span class="self-baseline text-white font-medium">Correo</span>
          </a>
        </div>
      </div>
    </section>
  );
}
