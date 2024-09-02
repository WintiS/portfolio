import { $, component$, useSignal } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const PostranaOne = component$(() => {
  const currentnavstate = useSignal(1);
  const nextnavstate = useSignal(1);
  const navclass = useSignal("");

  const text1 = useSignal("text-primary");
  const text2 = useSignal("text-white");
  const text3 = useSignal("text-white w-24");
  const p1 = useSignal("");
  const p2 = useSignal("hidden");
  const p3 = useSignal("hidden");

  const menuFunction = $((position: number) => {
    currentnavstate.value = nextnavstate.value;
    nextnavstate.value = position;

    if (nextnavstate.value == 1) {
      text2.value = "text-white transition-colors delay-150";
      text1.value = "text-primary transition-colors delay-150";
      text3.value = "text-white transition-colors delay-150 w-24";

      p1.value = "";
      p2.value = "hidden";
      p3.value = "hidden";
    } else if (nextnavstate.value == 2) {
      text2.value = "text-primary transition-colors delay-150";
      text1.value = "text-white transition-colors delay-150";
      text3.value = "text-white transition-colors delay-150 w-24";

      p1.value = "hidden";
      p2.value = "";
      p3.value = "hidden";
    } else if (nextnavstate.value == 3) {
      text2.value = "text-white transition-colors delay-150";
      text1.value = "text-white transition-colors delay-150";
      text3.value = "text-primary transition-colors delay-150 w-24";

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
    <>
      <div class={"mb-4 "}>
        <div class={"flex justify-around "}>
          <button class={text1} onClick$={() => menuFunction(1)}>
            Firemní webové stránky
          </button>
          <button class={text2} onClick$={() => menuFunction(2)}>
            Komplexní webová aplikace
          </button>
          <button class={text3} onClick$={() => menuFunction(3)}>
            E-shop
          </button>
        </div>
        <div class={"mt-1 md:hidden"}>
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
          Vytvořím pro vás moderní a profesionální firemní web, který nejen
          prezentuje vaši značku, ale také zaujme vaše zákazníky. Zároveň
          integruji všechny potřebné funkce, jako je kontaktní formulář, blog,
          nebo galerie, které pomohou vaší firmě růst a oslovit širší publikum.
          Dbám na responzivní design, aby web vypadal skvěle na všech
          zařízeních, od mobilů po stolní počítače. Vždy vám po úvodní
          konzultaci nejprve předložím grafický návrh webu. Díky tomu si můžete
          být jisti, že finální web bude vypadat podle vašich představ. Při
          odevzdání webu vás naučím používat editační software, abyste mohli
          sami měnit detaily na webu, či přidávat příspěvky do blogu.
        </p>
        <p class={p2.value}>
          Pokud vaše potřeby vyžadují něco extra, nabízím naprogramování webové
          aplikace. V tomhle případě se web netvoří přes software, ale píše se
          pomocí programovacích jazyků. To mi umožňuje naprostou svobodu a
          dokážu díky tomu vytvořit úplně jakýkoli požadavek. Mezi příklady
          webových aplikací může patřit například{" "}
          <Link
            class={"text-primary underline"}
            href="/portfolio/jaroska-jidelna"
          >
            web školní jídelny
          </Link>
          , vyhledávače letů nebo online kalkulačky povinných ručení.{" "}
        </p>
        <p class={p3.value}>
          Vytvořím pro vás plně funkční eshop, který je připravený na růst a
          expanzi vašeho online podnikání. Od atraktivního a uživatelsky
          přívětivého designu po intuitivní nákupní košík a pokročilé platební
          možnosti – postarám se o každý detail. Zajistím, aby váš eshop byl
          optimalizován pro vyhledávače, což vám pomůže dosáhnout lepší
          viditelnosti a zvýšit počet návštěvníků. I u e-shopu se vždy po první
          schůze společne shodneme na grafickém návrhu webu, který vám zaručí
          spokojenost s finílním e-shopem.
        </p>
      </div>
    </>
  );
});
