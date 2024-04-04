import { $, component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { HeaderButton } from "~/components/ui/headerbutton";
import { Modal } from "@qwik-ui/headless";
import { SvgImage } from "~/components/ui/svgimage";
import { SvgWaveTop } from "~/components/ui/svgwavetop";
import { Project } from "~/components/projects/project";
import { LuArrowRight } from "@qwikest/icons/lucide";
import { SvgWaveBottom } from "~/components/ui/svgwavebottom";
import { Navigation } from "~/components/nav/navigation";

export default component$(() => {
  const menustate = useSignal(false);
  const isVisible = useSignal("w-10");

  const currentnavstate = useSignal(1);
  const nextnavstate = useSignal(1);
  const navclass = useSignal("");

  const text1 = useSignal("text-primary");
  const text2 = useSignal("text-white");
  const text3 = useSignal("text-white");
  const p1 = useSignal("");
  const p2 = useSignal("hidden");
  const p3 = useSignal("hidden");

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

  const menuFunction = $((position: number) => {
    currentnavstate.value = nextnavstate.value;
    nextnavstate.value = position;

    if (nextnavstate.value == 1) {
      text2.value = "text-white transition-colors delay-150";
      text1.value = "text-primary transition-colors delay-150";
      text3.value = "text-white transition-colors delay-150";

      p1.value = "";
      p2.value = "hidden";
      p3.value = "hidden";
    } else if (nextnavstate.value == 2) {
      text2.value = "text-primary transition-colors delay-150";
      text1.value = "text-white transition-colors delay-150";
      text3.value = "text-white transition-colors delay-150";

      p1.value = "hidden";
      p2.value = "";
      p3.value = "hidden";
    } else if (nextnavstate.value == 3) {
      text2.value = "text-white transition-colors delay-150";
      text1.value = "text-white transition-colors delay-150";
      text3.value = "text-primary transition-colors delay-150";

      p1.value = "hidden";
      p2.value = "hidden";
      p3.value = "";
    }

    if (currentnavstate.value == 1) {
      if (nextnavstate.value == 2) {
        navclass.value = "oneTwo";
      } else if (nextnavstate.value == 3) {
        navclass.value = "oneThree";
      } else if (nextnavstate.value == 1) {
        navclass.value = "";
      }
    } else if (currentnavstate.value == 2) {
      if (nextnavstate.value == 3) {
        navclass.value = "twoThree";
      } else if (nextnavstate.value == 1) {
        navclass.value = "twoOne";
      }
    } else if (currentnavstate.value == 3) {
      if (nextnavstate.value == 2) {
        navclass.value = "threeTwo";
      } else if (nextnavstate.value == 1) {
        navclass.value = "threeOne";
      }
    }
  });

  return (
    <div class={"pb-96 text-white"}>
      <Navigation menustate={menustate} />
      <div class={"px-5 pt-10"}>
        <h1 class={"mb-8 text-7xl"}>
          Efektivní řešení <br /> pro váš <br /> nový
          <p
            class={
              "ml-1 inline-block bg-gradient-to-r from-primary to-[#FF0094] bg-clip-text pb-4 pt-2 font-pretty text-6xl text-transparent"
            }
          >
            Web
          </p>
        </h1>
        <div class={"mb-44"}>
          <HeaderButton />
        </div>
      </div>

      <div class={"px-5"}>
        <div class={"mb-5 rounded px-8 py-3 text-center text-2xl"}>
          <span class={""}>Proč wevobá stránka?</span>
        </div>
        <div class={"mb-14"}>
          <SvgImage />
        </div>
      </div>
      <div class={"mb-10 rounded px-5 text-center text-2xl"}>
        <span>
          Se mnou máte o vše <span class={"text-primary"}>postaráno</span>
        </span>
      </div>
      <div class={"mb-12 px-5"}>
        <div class={"mb-4"}>
          <div class={"flex justify-around"}>
            <button class={text1} onClick$={() => menuFunction(1)}>
              Tvorba webu
            </button>
            <button class={text2} onClick$={() => menuFunction(2)}>
              Údžba a bezpečnost
            </button>
            <button class={text3} onClick$={() => menuFunction(3)}>
              SEO
            </button>
          </div>
          <div class={"mt-1"}>
            <div class={"h-[1px] w-full bg-white"}></div>
            <div class={"-translate-y-px overflow-hidden"}>
              <div
                class={`${navclass.value ? navclass.value : "w-1/3"} h-[1px] bg-primary`}
              ></div>
            </div>
          </div>
        </div>
        <div class={"h-56 text-sm"}>
          <p class={p1.value}>
            Při naší spolupráci vám poskytnu osobní péči a individuální přístup,
            který bude odpovídat vašim potřebám a cílům. Bez ohledu na to, zda
            potřebujete osobní portfólio, firemní webové stránky nebo e-shop,
            mohu vám pomoci vytvořit web, který vás reprezentuje online a pomůže
            vám dosáhnout úspěchu. Kontaktujte mě ještě dnes a společně začneme
            pracovat na vašem úspěšném projektu!
          </p>
          <p class={p2.value}>
            Váš web je vaší digitální vizitkou, a je důležité zajistit jeho
            bezpečnost a správnou funkčnost. Nabízím služby údržby a zabezpečení
            webu, které vám pomohou udržet váš online prostor v bezpečí a v
            optimálním stavu. S pravidelnými aktualizacemi softwaru,
            monitorováním bezpečnostních hrozeb se postarám o to, aby váš web
            fungoval bezproblémově a byl chráněn před potenciálními útoky.
            Nechte mě starat se o technické detaily, abyste se mohli plně
            soustředit na své podnikání. Kontaktujte mě a já vám rád vše
            přiblížím.
          </p>
          <p class={p3.value}>
            Chcete, aby váš web byl snadno nalezen ve výsledcích vyhledávání a
            přilákal více návštěvníků? S pomocí SEO optimalizace mohu zlepšit
            viditelnost vašeho webu a pomoci vám dosáhnout vyšších pozic ve
            vyhledávačích. Od analýzy klíčových slov po optimalizaci obsahu a
            technických prvků webu se postarám o to, aby váš web byl
            optimalizován pro vyhledávací algoritmy a přilákal relevantní
            návštěvníky. Kontaktujte mě a já vám rád přiblížím, jak mohu zvýšit
            viditelnost vašeho webu a přinést vám více organického provozu.
          </p>
        </div>
      </div>
      <div class={"mb-32 flex items-center justify-center"}>
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
            "absolute flex items-center gap-1 rounded-[7px] bg-primary px-6 py-3"
          }
        >
          Kontaktujte mě <LuArrowRight />
        </a>
      </div>
      <div>
        <div class={"flex items-center justify-center"}>
          <SvgWaveTop />
        </div>
        <div class={"mt-[70px] w-full bg-accent px-5 pb-10 pt-5"} id="projects">
          <div class={"mb-14 "}>
            <h1 class={"text-6xl tracking-wider"}>
              <span class={"text-primary"}>V</span>
              ítězsla
              <span class={"text-primary"}>v</span>
              <div class={"flex items-baseline"}>
                Ším
                <span class={"text-primary"}>a</span>
                <h2 class={"ml-4 text-2xl tracking-tighter"}>Mé projekty</h2>
              </div>
            </h1>
          </div>
          <div class={"mt-12 flex -translate-y-8 flex-col items-center"}>
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
        <div class={"-translate-y-32"}>
          <SvgWaveBottom />
        </div>
      </div>
      <div class={"w-full -translate-y-32 px-5"}>
        <div class={"mb-4"}>
          <h4 class={"mb-2 text-2xl"}>
            Návrh webu <span class={"text-primary"}>zdarma</span>
          </h4>
          <p>
            Pokud nebudete s mým designem zcela spokojeni, nedostanu od vás ani
            korunu. Předem nic neplatíte.
          </p>
        </div>
        <div
          class={"h-64 w-full rounded-xl bg-[url('/mockuptda.jpeg')] bg-cover"}
        ></div>
      </div>
      <div class={"px-5"}>
        <div class={"mb-14 "}>
          <h1 class={"text-6xl tracking-wider"}>
            <span class={"text-primary"}>V</span>
            ítězsla
            <span class={"text-primary"}>v</span>
            <div class={"flex items-baseline"}>
              Ším
              <span class={"text-primary"}>a</span>
              <div class={"ml-3 -translate-y-2 text-sm"}>
                <button class={"mb-1 mr-3 rounded-[8px] border px-2 py-1"}>
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
