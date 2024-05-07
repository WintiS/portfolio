import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { HeaderButton } from "~/components/ui/headerbutton";
import { Modal } from "@qwik-ui/headless";
import { SvgImage } from "~/components/ui/svgimage";
import { SvgWaveTop } from "~/components/ui/svgwavetop";
import { Project } from "~/components/projects/project";
import { LuArrowRight } from "@qwikest/icons/lucide";
import { SvgWaveBottom } from "~/components/ui/svgwavebottom";
import { Navigation } from "~/components/nav/navigation";
import { Cell } from "~/components/projecttimeline/cell";
import { BeutyInput } from "~/components/ui/input";
import ImgSapiens from "./public/sapiensCropped.png?jsx";
import { SvgImagePC } from "~/components/ui/svgimagepc";
import { PostaranoTwo } from "~/components/ui/postaranotwo";
import { PostranaOne } from "~/components/ui/postaranoone";
import { Collumn } from "~/components/ui/collumn";

export default component$(() => {
  const menustate = useSignal(false);
  const isVisible = useSignal("w-10");

  const outputRef = useSignal<Element>();
  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(
    () => {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          isVisible.value = "loading";
        }
      });
      observer.observe(outputRef.value!);
      return () => observer.disconnect();
    },
    { strategy: "intersection-observer" },
  );

  return (
    <div class={"pb-16 text-white"}>
      <Navigation menustate={menustate} />
      <div class={"flex px-5 pt-12 md:mb-20 md:px-12 md:pt-16 xl:mb-32"}>
        <div class={"md:pt-6 xl:pl-[12vw]"}>
          <h1 class={"mb-12 text-3xl md:mb-14"}>
            <p
              class={
                "inline-block bg-gradient-to-r from-primary to-[#FF0094] bg-clip-text pb-4 pt-3 font-pretty text-5xl text-transparent"
              }
            >
              Frontend developer
            </p>
            <p class={"text-lg"}>Žiju pro kreativní projekty.</p>
          </h1>
          <div class={"mb-44"}>
            <HeaderButton />
          </div>
        </div>
        <div class={"absolute right-10 hidden md:block"}>
          <ImgSapiens
            class={"-scale-x-100 md:w-96 lg:w-[460px] xl:w-[500px] "}
          />
        </div>
      </div>

      <div class={"px-5 md:px-12"}>
        <div class={"mb-5 rounded px-8 py-3 text-center text-2xl md:mb-0"}>
          <span class={""}>Proč mít webovou stránku?</span>
        </div>
        <div class={"mb-14"}>
          <div class={"sm:hidden"}>
            <SvgImage />
          </div>
          <div
            class={
              "hidden w-screen scale-75 items-center justify-center sm:flex "
            }
          >
            <SvgImagePC />
          </div>
        </div>
      </div>
      <div class={"mb-10 rounded px-5 text-center text-2xl"}>
        <span>
          Se mnou máte o vše <span class={"text-primary"}>postaráno</span>
        </span>
      </div>
      <div class={"mb-12 px-5 md:px-12"}>
        <div class={"md:hidden"}>
          <PostranaOne />
        </div>
        <div class={"hidden md:block"}>
          <PostaranoTwo />
        </div>
      </div>
      <div class={"mb-32 flex items-center justify-center md:mb-[24vw]"}>
        <svg
          width="295"
          height="118"
          viewBox="0 0 295 118"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M152.858 9.53395C190.333 10.5539 221.629 8.19825 255.287 18.2155C288.946 28.2327 303.923 40.0283 289.184 73.5656C275.245 105.28 236.047 108.793 195.065 115.631C167.106 120.296 138.809 115.463 111.72 108.203C74.9709 98.3534 27.7464 113.22 10.5374 85.3304C-8.78495 35.4117 -1.58523 32.0256 32.5607 9.53411C64.2644 -11.3487 111.887 8.41882 152.858 9.53395Z"
            fill="#A23405"
          />
        </svg>
        <a
          href="#"
          class={
            "absolute flex items-center gap-1 rounded-[7px] bg-primary px-6 py-3 md:transition-transform md:hover:translate-x-2"
          }
        >
          Kontaktujte mě <LuArrowRight />
        </a>
      </div>
      <div>
        <div class={"flex items-center justify-center"}>
          <SvgWaveTop />
        </div>
        <div
          class={
            "z-10 mt-[70px] w-full bg-accent px-5 pb-10 pt-5 md:mt-[20vw]  md:px-20 lg:px-28 xl:px-36"
          }
          id="projects"
        >
          <div class={"mb-14 "}>
            <h1 class={"text-6xl tracking-wider md:hidden"}>
              <span class={"text-primary"}>V</span>
              ítězsla
              <span class={"text-primary"}>v</span>
              <div class={"flex items-baseline"}>
                Ším
                <span class={"text-primary"}>a</span>
                <h2 class={"ml-4 text-2xl tracking-tighter"}>Mé projekty</h2>
              </div>
            </h1>
            <div class={"hidden items-center justify-between md:flex"}>
              <h2
                class={"hidden px-4 text-4xl tracking-tighter md:inline-block"}
              >
                Projekty, na kterých jsem pracoval
              </h2>
              <h1 class={" px-4 text-6xl tracking-wider"}>
                <span class={"text-primary"}>V</span>
                ítězsla
                <span class={"text-primary"}>v </span>
                Ším
                <span class={"text-primary"}>a</span>
              </h1>
              <h2 class={"ml-4 px-4 text-4xl tracking-tighter md:hidden"}>
                Mé projekty
              </h2>
            </div>
          </div>
          <div
            class={
              "mt-12  flex -translate-y-8 flex-col items-center   md:mt-16"
            }
          >
            <Project
              bgimgurl="/tda.png"
              name="Teacher Digital Agency"
              documentationhref="/portfolio/tda"
              backgeoundpos="top"
            />
            <Project
              bgimgurl="/jjo.png"
              name="Jaroška Jídelna Online"
              documentationhref="/portfolio/jaroska-jidelna"
              backgeoundpos="top"
            />
            <Project
              bgimgurl="/hanka.png"
              name="Hanka Zlatníková"
              documentationhref="/portfolio/hanka-zlatnikova"
              backgeoundpos="top"
            />
          </div>
        </div>
        <div class={"z-0 mb-6 -translate-y-4 md:mb-12 md:-translate-y-12"}>
          <SvgWaveBottom />
        </div>
      </div>
      <div class={"mb-24  flex items-center justify-center md:mb-0"}>
        <div class={" px-5 md:flex md:w-2/3  md:gap-16 md:px-0"}>
          <div
            class={
              "hidden aspect-[3/4] h-96 rounded-xl bg-[url('/mockuptda.jpeg')] bg-cover bg-center md:block"
            }
          ></div>
          <div class={"mb-4 md:mt-10"}>
            <h4 class={"mb-2 text-2xl md:mb-6 md:text-3xl"}>
              Návrh webu <span class={"text-primary"}>zdarma</span>
            </h4>
            <p class={"mb-4 md:text-lg"}>
              Pokud nebudete s mým designem zcela spokojeni, nedostanu od vás
              ani korunu. Předem nic neplatíte.
            </p>
            <a
              href="#"
              class={
                "absolute flex items-center gap-1 rounded-[7px] bg-primary px-6 py-3 md:transition-transform md:hover:translate-x-2"
              }
            >
              Kontaktujte mě <LuArrowRight />
            </a>
          </div>
          <div
            class={
              "mt-24 h-64 w-full rounded-xl bg-[url('/mockuptda.jpeg')] bg-cover md:hidden"
            }
          ></div>
        </div>
      </div>
      <div class={"mb-24 px-5 md:hidden"}>
        <div class={"mb-14 "}>
          <h1 class={"text-6xl tracking-wider"}>
            <span class={"text-primary"}>V</span>
            ítězsla
            <span class={"text-primary"}>v</span>
            <div class={"flex items-baseline"}>
              Ším
              <span class={"text-primary"}>a</span>
              <div class={"ml-3 -translate-y-2 text-sm"}>
                <button class={"mb-1 mr-3 rounded-[8px] px-2 py-1"}>
                  O mně
                </button>
                <button class={"rounded-[8px] bg-primary px-2 py-1"}>
                  Tech stack
                </button>
              </div>
            </div>
          </h1>
        </div>
        <div class={"flex items-center gap-2"}>
          <div class={"flex flex-col gap-7 text-sm "}>
            <span>QWIK.js</span>
            <span>Wordpress</span>
            <span>Tailwind</span>
            <span>Figma</span>
            <span>HTML & CSS</span>
            <span>JavaScript</span>
          </div>
          <div class={"h-72 w-1 rounded bg-white"}></div>
          <div
            class={`${isVisible.value} flex flex-col gap-10 overflow-x-hidden`}
            ref={outputRef}
          >
            <div class={"h-2 w-40 rounded bg-white"}></div>
            <div class={"h-2 w-44 rounded bg-primary"}></div>
            <div class={"h-2 w-36 rounded bg-white"}></div>
            <div class={"h-2 w-32 rounded bg-white"}></div>
            <div class={"h-2 w-56 rounded bg-primary"}></div>
            <div class={"h-2 w-48 rounded bg-white"}></div>
          </div>
        </div>
      </div>
      <div class={"mt-24 hidden w-screen pr-24 md:block"}>
        <div class={"flex justify-center"}>
          <div class={"sticky bottom-1 flex -rotate-90 items-center"}>
            <h1 class={"text-4xl tracking-wider xl:text-5xl "}>
              <span class={"text-primary"}>V</span>
              ítězsla
              <span class={"text-primary"}>v</span> Ším
              <span class={"text-primary"}>a</span>
            </h1>
          </div>
          <div>
            <div class={""}>
              <button
                class={
                  "mb-1 mr-3 rounded-lg px-3 py-2  transition-colors hover:border-primary hover:bg-primary"
                }
              >
                O mně
              </button>
              <button
                class={
                  "rounded-lg bg-primary px-3 py-2 transition-colors hover:border-primary hover:bg-primary active:bg-primary"
                }
              >
                Tech stack
              </button>
            </div>
            <div class={"flex items-baseline"}>
              <Collumn
                text="QWIK.js"
                colorclass="bg-white"
                heightclass="h-52"
              />
              <Collumn
                text="WordPress"
                colorclass="bg-primary"
                heightclass="h-56"
              />
              <Collumn
                text="Tailwind"
                colorclass="bg-white"
                heightclass="h-36"
              />
              <Collumn text="Figma" colorclass="bg-white" heightclass="h-44" />
              <Collumn
                text="HTML & CSS"
                colorclass="bg-primary"
                heightclass="h-80"
              />
              <Collumn
                text="JavaScript"
                colorclass="bg-white"
                heightclass="h-64"
              />
            </div>
          </div>
        </div>
      </div>
      <div class={"mb-12 px-5 md:hidden"}>
        <div class={"mb-8 text-xl"}>
          <h4>Potřebné kroky k úspěšné webovce</h4>
        </div>
        <Cell />
      </div>
      <div class={"px-5"}>
        <div class={"mb-8 px-5"}>
          <h4 class={"text-2xl"}>
            Zbýbá už jen {""}
            <span class={"rounded bg-seconadry px-2 py-1"}>jeden</span>
            {""} krok
          </h4>
        </div>
        <div
          class={
            "mb-6 flex flex-col gap-3 rounded-xl bg-seconadry px-5 pb-4 pt-5"
          }
        >
          <BeutyInput
            name="Jméno a Příjmení"
            placeholder="Jan Novák"
            type="text"
          />
          <BeutyInput type="email" name="Email:" placeholder="jmeno@firma.cz" />
          <BeutyInput
            type="tel"
            name="Telefon:"
            placeholder="+420 777 777 777"
          />
          <BeutyInput
            name="Vaše cíle:"
            placeholder="Vytvořit firemní identitu"
            type="text"
          />
          <BeutyInput
            name="Rozpočet:"
            placeholder="Částka / ještě nevím"
            type="number"
          />

          <div class={"mt-4 flex justify-center"}>
            <button class={"flex items-center gap-5 text-xl"}>
              <span>Odeslat</span>
              <LuArrowRight class={"text-3xl text-background"} />
            </button>
          </div>
        </div>

        <div class={"px-0.5"}>
          <p class={"text-sm"}>
            Odpověď obdržíte <span class={"text-seconadry"}>do 24 hodin.</span>
            Podrobně vám vysvětlím, jak vám ve vašem případě mohu pomoci.
          </p>
        </div>
      </div>

      <Modal
        bind:show={menustate}
        class={"w-[100vw] backdrop:backdrop-brightness-110"}
      >
        <div
          class={
            "sheet fixed top-[8vh] h-[92vh] w-full bg-background text-white"
          }
        >
          <nav
            class={
              "flex h-full flex-col gap-12 px-12 pl-20 pt-16 text-lg font-light"
            }
          >
            <ul>
              <a href="#">Služby</a>
            </ul>
            <ul>
              <a href="#">Portfolio</a>
            </ul>
            <ul>
              <a href="#">O mně</a>
            </ul>
            <ul>
              <a href="#" class={"rounded bg-seconadry px-4 py-3"}>
                Kontaktujte mě
              </a>
            </ul>
          </nav>
        </div>
      </Modal>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
