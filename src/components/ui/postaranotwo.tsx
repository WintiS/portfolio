import { component$, useSignal, $ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const PostaranoTwo = component$(() => {
  const currentnavstate = useSignal(1);
  const nextnavstate = useSignal(1);
  const navclass = useSignal("");

  const text1 = useSignal("text-primary");
  const text2 = useSignal("text-white");
  const text3 = useSignal("text-white");

  const text = useSignal("");

  const menuFunction = $((position: number) => {
    currentnavstate.value = nextnavstate.value;
    nextnavstate.value = position;

    if (nextnavstate.value == 1) {
      text2.value = "text-white transition-colors delay-150";
      text1.value = "text-primary transition-colors delay-150";
      text3.value = "text-white transition-colors delay-150";

      text.value = "translate-y-2";
    } else if (nextnavstate.value == 2) {
      text2.value = "text-primary transition-colors delay-150";
      text1.value = "text-white transition-colors delay-150";
      text3.value = "text-white transition-colors delay-150";

      text.value = "lg:-translate-y-64 -translate-y-60";
    } else if (nextnavstate.value == 3) {
      text2.value = "text-white transition-colors delay-150";
      text1.value = "text-white transition-colors delay-150";
      text3.value = "text-primary transition-colors delay-150";

      text.value = "lg:-translate-y-[31rem] -translate-y-[30rem]";
    }

    if (currentnavstate.value == 1) {
      if (nextnavstate.value == 2) {
        navclass.value = "oneTwoPC";
      } else if (nextnavstate.value == 3) {
        navclass.value = "oneThreePC";
      } else if (nextnavstate.value == 1) {
        navclass.value = "";
      }
    } else if (currentnavstate.value == 2) {
      if (nextnavstate.value == 3) {
        navclass.value = "twoThreePC";
      } else if (nextnavstate.value == 1) {
        navclass.value = "twoOnePC";
      }
    } else if (currentnavstate.value == 3) {
      if (nextnavstate.value == 2) {
        navclass.value = "threeTwoPC";
      } else if (nextnavstate.value == 1) {
        navclass.value = "threeOnePC";
      }
    }
  });

  return (
    <div class={"flex items-start justify-center gap-10"}>
      <div class={"h-60 w-[50vw] overflow-y-hidden text-sm lg:text-lg"}>
        <div class={`${text.value} transition-transform`}>
          {/*-translate-y-64 -translate-y-[29rem]*/}
          <p class={`h-60`}>
            Vytvořím pro vás moderní a profesionální firemní web, který nejen
            prezentuje vaši značku, ale také zaujme vaše zákazníky. Zároveň
            integruji všechny potřebné funkce, jako je kontaktní formulář, blog,
            nebo galerie, které pomohou vaší firmě růst a oslovit širší
            publikum. Dbám na responzivní design, aby web vypadal skvěle na
            všech zařízeních, od mobilů po stolní počítače. Vždy vám po úvodní
            konzultaci nejprve předložím grafický návrh webu. Díky tomu si
            můžete být jisti, že finální web bude vypadat podle vašich představ.
            Při odevzdání webu vás naučím používat editační software, abyste
            mohli sami měnit detaily na webu, či přidávat příspěvky do blogu.
          </p>
          <br />
          <p class={`h-56`}>
            Pokud vaše potřeby vyžadují něco extra, nabízím naprogramování
            webové aplikace. V tomhle případě se web netvoří přes software, ale
            píše se pomocí programovacích jazyků. To mi umožňuje naprostou
            svobodu a dokážu díky tomu vytvořit úplně jakýkoli požadavek. Mezi
            příklady webových aplikací může patřit například{" "}
            <Link
              class={"text-primary underline"}
              href="/portfolio/jaroska-jidelna"
            >
              web školní jídelny
            </Link>
            , vyhledávače letů nebo online kalkulačky povinných ručení.{" "}
          </p>
          <br />
          <p class={`h-56`}>
            Vytvořím pro vás plně funkční eshop, který je připravený na růst a
            expanzi vašeho online podnikání. Od atraktivního a uživatelsky
            přívětivého designu po intuitivní nákupní košík a pokročilé platební
            možnosti – postarám se o každý detail. Zajistím, aby váš eshop byl
            optimalizován pro vyhledávače, což vám pomůže dosáhnout lepší
            viditelnosti a zvýšit počet návštěvníků. I u e-shopu se vždy po
            první schůze společne shodneme na grafickém návrhu webu, který vám
            zaručí spokojenost s finílním e-shopem.
          </p>
        </div>
      </div>
      <div class={"flex justify-end"}>
        <div class={"mt-1 hidden md:flex"}>
          <div class={"h-60 w-[1px] bg-white"}></div>
          <div class={"-translate-x-px overflow-hidden"}>
            <div
              class={`h-20 w-[1px] bg-primary ${navclass.value ? navclass.value : "h-20"}`}
            ></div>
            {/* ${navclass.value ? navclass.value : "w-1/3"} */}
          </div>
        </div>
        <div class={"flex justify-around md:flex-col md:px-4"}>
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
      </div>
    </div>
  );
});
