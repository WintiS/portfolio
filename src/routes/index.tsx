import {
  component$,
  useSignal,
  useVisibleTask$,
  useTask$,
} from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { HeaderButton } from "~/components/ui/headerbutton";
import { Modal } from "@qwik-ui/headless";
import { SvgImage } from "~/components/ui/svgimage";
import { SvgWaveTop } from "~/components/ui/svgwavetop";
import { Project } from "~/components/projects/project";
import { LuArrowRight, LuLoader2 } from "@qwikest/icons/lucide";
import { SvgWaveBottom } from "~/components/ui/svgwavebottom";
import { Navigation } from "~/components/nav/navigation";
import { Cell } from "~/components/projecttimeline/cell";
import { Image } from "@unpic/qwik";
import { SvgImagePC } from "~/components/ui/svgimagepc";
import { PostaranoTwo } from "~/components/ui/postaranotwo";
import { PostranaOne } from "~/components/ui/postaranoone";
import { Collumn } from "~/components/ui/collumn";
import * as v from "valibot";
import { formAction$, reset, useForm, valiForm$ } from "@modular-forms/qwik";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { transporter } from "~/components/mailer";
import { htmlemailstructure } from "~/components/email/email";

export const formSchema = v.object({
  fullname: v.string([v.minLength(2, "Zadejte vaše celé jméno")]),
  mail: v.string([v.email("Špatně napsaný email.")]),
  phone: v.string([
    v.minLength(1, "Zadejte vaše telefonní číslo"),
    v.minLength(8, "Zadejte platné telefonní číslo."),
    v.maxLength(14, "Zadejte platné telefonní číslo."),
  ]),
  goal: v.string([v.minLength(1, "Zadejte, s čím potřebujete pomoct.")]),
  budget: v.string([
    v.minLength(1, "Sdělte mi prosím, zda máte již představu o vašem rozpočtu"),
  ]),
});

type FormSchema = v.Input<typeof formSchema>;

export default component$(() => {
  const [formStore, { Field, Form }] = useForm<FormSchema>({
    action: useFormAction(),
    validate: valiForm$(formSchema),
    validateOn: "submit",
    loader: {
      value: {
        fullname: "",
        mail: "",
        phone: "",
        goal: "",
        budget: "",
      },
    },
  });
  const menustate = useSignal(false);
  const isVisible = useSignal("w-10");

  const outputRef = useSignal<Element>();
  const riseRef = useSignal<Element>();

  const qwik = useSignal("h-4");
  const word = useSignal("h-4");
  const tailwind = useSignal("h-4");
  const figma = useSignal("h-4");
  const htmlcss = useSignal("h-4");
  const js = useSignal("h-4");
  const isSubmitted = useSignal(false);
  useTask$(({ track }) => {
    track(() => formStore.response.status);
    if (formStore.response.status === "success") {
      reset(formStore, ["fullname", "mail", "phone", "goal", "budget"]);
      isSubmitted.value = !isSubmitted.value;
    }
  });

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(
    () => {
      const observer = new IntersectionObserver(([entry]) => {
        const dothing = () => {
          isVisible.value = "loading";
        };
        if (entry.isIntersecting) {
          setTimeout(dothing, 500);
        }
      });
      observer.observe(outputRef.value!);
      return () => observer.disconnect();
    },
    { strategy: "intersection-observer" },
  );
  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(
    () => {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          qwik.value = "h-52";
          word.value = "h-56";
          tailwind.value = "h-36";
          figma.value = "h-44";
          htmlcss.value = "h-80";
          js.value = "h-72";
        }
      });
      observer.observe(riseRef.value!);
      return () => observer.disconnect();
    },
    { strategy: "intersection-observer" },
  );

  return (
    <div class={"pb-16 text-white"}>
      <Navigation menustate={menustate} />
      <div class={"flex justify-center"}>
        <div
          class={"flex w-3/4 justify-between pt-12 md:mb-20 md:pt-32 xl:mb-32"}
        >
          <div class={"md:pt-6 "}>
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
          <div class={" hidden lg:block "}>
            <Image
              class={"-scale-x-100"}
              src="sapiensCropped.png"
              layout="fullWidth"
              width={400}
              height={500}
              alt="A lovely bath"
            />
          </div>
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
        <div class={" px-5 md:flex md:w-2/3 md:gap-16  md:px-0 lg:w-1/2"}>
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
                <strong class={"rounded-md bg-primary px-2 py-1"}>
                  Tech stack
                </strong>
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
        <div class={"mt-10"}>
          <div class={"mb-3"}>
            <strong class={"rounded-md bg-primary px-2 py-1 text-white"}>
              O mně
            </strong>
          </div>
          <p>
            Jmenuji se Vítězslav Šíma a jsem front-end developer. Web design mě
            naplňuje již od mých 13 let, kdy jsem poprvé naprogramoval svoji
            první webovku. Kromě mé vášně pro kódování mám také zálibu ve street
            workoutu a wingfoilingu, které mi pomáhají udržet si tzv.{" "}
            <strong class={"text-primary"}>work-life balance</strong>.
          </p>
          <br />
          <p>
            Svět digitálního designu a vývoje mě{" "}
            <strong class={"text-primary"}>fascinuje</strong>. a já se neustále
            snažím zdokonalovat. Mezi mé technické dovednosti patří práce s
            platformami jako je Wordpress, Firebase, Shopify, tvorba designů v
            Figmě, a samozřejmě ovládání HTML, CSS a JavaScriptu. Kromě toho
            používám různé frameworky, včetně QWIK.js, který mi umožňuje rychle
            a efektivně vyvíjet{" "}
            <strong class={"text-primary"}>interaktivní</strong> webové stránky.
          </p>
          <br />
          <p>
            Jsem nadšený tím, co dělám, a rád bych vám pomohl přinést vaše
            online projekty k životu. Pojďme společně vytvořit webové stránky,
            které budou nejen vizuálně atraktivní, ale také efektivní.{" "}
            <strong class={"text-primary"}>
              Budu se těšit na spolupráci s vámi!
            </strong>
          </p>
        </div>
      </div>
      <div class={"flex justify-center"}>
        <div
          class={
            "mb-32 mt-32 hidden w-screen max-w-[1400px] md:flex md:items-center md:justify-start"
          }
        >
          <h1
            class={
              "sticky left-0 top-[60vh] -translate-y-40 -rotate-90 text-5xl tracking-wider lg:text-6xl"
            }
          >
            <span class={"text-primary"}>V</span>
            ítězsla
            <span class={"text-primary"}>v</span> Ším
            <span class={"text-primary"}>a</span>
          </h1>
          <div class={""} ref={riseRef}>
            <div class={"mb-12"}>
              <div class={""}>
                <strong class={"px-3 text-primary"}>Tech stack</strong>
              </div>
              <div class={"flex h-96 items-baseline overflow-hidden"}>
                <Collumn
                  text="QWIK.js"
                  colorclass="bg-white"
                  heightclass={qwik}
                />
                <Collumn
                  text="WordPress"
                  colorclass="bg-primary"
                  heightclass={word}
                />
                <Collumn
                  text="Tailwind"
                  colorclass="bg-white"
                  heightclass={tailwind}
                />
                <Collumn
                  text="Figma"
                  colorclass="bg-white"
                  heightclass={figma}
                />
                <Collumn
                  text="HTML & CSS"
                  colorclass="bg-primary"
                  heightclass={htmlcss}
                />
                <Collumn
                  text="JavaScript"
                  colorclass="bg-white"
                  heightclass={js}
                />
              </div>
            </div>
            <div class={"lg:max-w-[50vw] xl:max-w-[40vw]"}>
              <div class={"mb-6"}>
                <strong class={"px-3 text-primary"}>O mně</strong>
              </div>
              <p>
                Jmenuji se Vítězslav Šíma a jsem front-end developer. Web design
                mě naplňuje již od mých 13 let, kdy jsem poprvé naprogramoval
                svoji první webovku. Kromě mé vášně pro kódování mám také zálibu
                ve street workoutu a wingfoilingu, které mi pomáhají udržet si
                tzv. <strong class={"text-primary"}>work-life balance</strong>.
              </p>
              <br />
              <p>
                Svět digitálního designu a vývoje mě{" "}
                <strong class={"text-primary"}>fascinuje</strong>. a já se
                neustále snažím zdokonalovat. Mezi mé technické dovednosti patří
                práce s platformami jako je Wordpress, Firebase, Shopify, tvorba
                designů v Figmě, a samozřejmě ovládání HTML, CSS a JavaScriptu.
                Kromě toho používám různé frameworky, včetně QWIK.js, který mi
                umožňuje rychle a efektivně vyvíjet{" "}
                <strong class={"text-primary"}>interaktivní</strong> webové
                stránky.
              </p>
              <br />
              <p>
                Jsem nadšený tím, co dělám, a rád bych vám pomohl přinést vaše
                online projekty k životu. Pojďme společně vytvořit webové
                stránky, které budou nejen vizuálně atraktivní, ale také
                efektivní.{" "}
                <strong class={"text-primary"}>
                  Budu se těšit na spolupráci s vámi!
                </strong>
              </p>
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
      <div class={"px-5 md:px-24"}>
        <div class={"mb-8 px-5 md:flex md:justify-center"}>
          <h4 class={"text-2xl"}>
            Zbýbá už jen {""}
            <span class={"rounded bg-seconadry px-2 py-1"}>jeden</span>
            {""} krok - napište mi!
          </h4>
        </div>
        <div
          class={
            "mb-6 flex flex-col gap-3 rounded-xl bg-seconadry px-5  pb-4 pt-5 md:py-8"
          }
        >
          <Form>
            <Field name="fullname" type="string">
              {(store, props) => (
                <div class={""}>
                  <label
                    for={"name"}
                    class={"block font-medium leading-6 text-white"}
                  >
                    {"Celé jméno"}
                  </label>
                  <div class={"mt-1"}>
                    <input
                      id={"name"}
                      type={"text"}
                      value={store.value}
                      class={
                        "block w-full rounded-lg border-0 bg-background py-2 text-white shadow-sm ring-1 ring-inset ring-background placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 md:py-4 md:text-lg"
                      }
                      placeholder={"Vašek Makovský..."}
                      {...props}
                    />
                  </div>
                  <div class={"mt-1"}>
                    <p class={"ml-1 text-sm text-primary  "}>{store.error}</p>
                  </div>
                </div>
              )}
            </Field>
            <Field name="mail" type="string">
              {(store, props) => (
                <div class={"mt-2 md:mt-4"}>
                  <label
                    for={"mail"}
                    class={"block text-sm font-medium leading-6 text-white"}
                  >
                    {"E-mail"}
                  </label>
                  <div class={"mt-1"}>
                    <input
                      id={"mail"}
                      type={"text"}
                      value={store.value}
                      class={
                        "block w-full rounded-lg border-0 bg-background py-2 text-white shadow-sm ring-1 ring-inset ring-background placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 md:py-4 md:text-lg"
                      }
                      placeholder={"priklad@seznam.cz"}
                      {...props}
                    />
                  </div>
                  <div class={"mt-1"}>
                    <p class={"ml-1 text-sm text-primary"}>{store.error}</p>
                  </div>
                </div>
              )}
            </Field>
            <Field name="phone" type="string">
              {(store, props) => (
                <div class={"mt-2 md:mt-4"}>
                  <label
                    for={"phone"}
                    class={"block text-sm font-medium leading-6 text-white"}
                  >
                    {"Telefon:"}
                  </label>
                  <div class={"mt-1"}>
                    <input
                      id={"phone"}
                      type={"tel"}
                      pattern={"[0-9]{3} ?[0-9]{3} ?[0-9]{3}"}
                      value={store.value}
                      class={
                        "block w-full rounded-lg border-0 bg-background py-2 text-white shadow-sm ring-1 ring-inset ring-background placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 md:py-4 md:text-lg"
                      }
                      placeholder={"600 400 100"}
                      {...props}
                    />
                  </div>
                  <div class={"mt-1"}>
                    <p class={"ml-1 text-sm text-primary"}>{store.error}</p>
                  </div>
                </div>
              )}
            </Field>
            <Field name="goal" type="string">
              {(store, props) => (
                <div class={"mt-2 md:mt-4"}>
                  <label
                    for={"goal"}
                    class={"block text-sm font-medium leading-6 text-white"}
                  >
                    {"Cíl spolupráce"}
                  </label>
                  <div class={"mt-1"}>
                    <input
                      id={"goal"}
                      type={"text"}
                      value={store.value}
                      class={
                        "block w-full rounded-lg border-0 bg-background py-2 text-white shadow-sm ring-1 ring-inset ring-background placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 md:py-4 md:text-lg"
                      }
                      placeholder={"Vytvořit firemní web."}
                      {...props}
                    />
                  </div>
                  <div class={"mt-1"}>
                    <p class={"ml-1 text-sm text-primary"}>{store.error}</p>
                  </div>
                </div>
              )}
            </Field>
            <Field name="budget" type="string">
              {(store, props) => (
                <div class={"mt-2 md:mt-4"}>
                  <label
                    for={"budget"}
                    class={"block text-sm font-medium leading-6 text-white"}
                  >
                    {"Budget"}
                  </label>
                  <div class={"mt-1"}>
                    <input
                      id={"budget"}
                      type={"text"}
                      value={store.value}
                      class={
                        "block w-full rounded-lg border-0 bg-background py-2 text-white shadow-sm ring-1 ring-inset ring-background placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 md:py-4 md:text-lg"
                      }
                      placeholder={"Částka / ještě nemám představu."}
                      {...props}
                    />
                  </div>
                  <div class={"mt-1"}>
                    <p class={"ml-1 text-sm text-primary"}>{store.error}</p>
                  </div>
                </div>
              )}
            </Field>
            <div class={"flex justify-center"}>
              <div
                class={
                  "mt-4 flex justify-center transition-transform md:mt-8 md:hover:translate-x-1"
                }
              >
                <button
                  type="submit"
                  value={"Odeslat"}
                  class={
                    "flex justify-center gap-5 text-xl hover:cursor-pointer "
                  }
                >
                  {(!formStore.submitted || !formStore.submitting) &&
                    !isSubmitted.value && (
                      <span class={"flex items-center"}>
                        <span>Odeslat</span>
                        <LuArrowRight class={"text-3xl text-primary"} />
                      </span>
                    )}
                  {formStore.submitting && (
                    <span>
                      <LuLoader2 class={"animate-spin text-3xl"} />
                    </span>
                  )}
                </button>

                {isSubmitted.value && (
                  <div class={"flex flex-col items-center justify-center"}>
                    <span class={"text-lg"}>Odesláno!</span>
                    <span class={"text-center text-sm"}>
                      Email o potvrzení odeslání formuláře Vám prřijde do pár
                      sekund na mail.
                    </span>
                  </div>
                )}
              </div>
            </div>
          </Form>
        </div>

        <div class={"px-0.5 md:flex md:justify-center"}>
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

export const useFormAction = formAction$<FormSchema>(async (values) => {
  console.log(values);
  addDoc(collection(db, "form"), {
    fullname: values.fullname,
    email: values.mail,
    phone: values.phone,
    goal: values.goal,
    budget: values.budget,
  });
  const mailOptionsCustomer = {
    from: "noreply.simavitezslav@gmail.com",
    to: values.mail,
    subject: `Vyplnění formuláře - ${values.fullname}`,
    html: htmlemailstructure,
  };
  const mailOptions = {
    from: "noreply.simavitezslav@gmail.com",
    to: "kviteksima@seznam.cz",
    subject: `Nové vyplnění formuláře od>>> ${values.fullname}`,
    text: `Jméno: ${values.fullname},
    email: ${values.mail},
    telefon: ${values.phone},
    cíl: ${values.goal},
    rozpočet: ${values.budget}`,
  };
  try {
    console.log(await transporter.sendMail(mailOptions));
    console.log(await transporter.sendMail(mailOptionsCustomer));
  } catch (error) {
    console.log(error);
  }

  return {
    status: "success",
  };
}, valiForm$(formSchema));
