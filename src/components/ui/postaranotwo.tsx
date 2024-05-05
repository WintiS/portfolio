import { component$, useSignal, $ } from "@builder.io/qwik";

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
      <div class={"h-56 w-[50vw] overflow-y-hidden text-sm lg:text-lg"}>
        <div class={`${text.value} transition-transform`}>
          {/*-translate-y-64 -translate-y-[29rem]*/}
          <p class={`h-56`}>
            Při naší spolupráci vám poskytnu osobní péči a individuální přístup,
            který bude odpovídat vašim potřebám a cílům. Bez ohledu na to, zda
            potřebujete osobní portfólio, firemní webové stránky nebo e-shop,
            mohu vám pomoci vytvořit web, který vás reprezentuje online a pomůže
            vám dosáhnout úspěchu. Kontaktujte mě ještě dnes a společně začneme
            pracovat na vašem úspěšném projektu!
          </p>
          <br />
          <p class={`h-56`}>
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
          <br />
          <p class={`h-56`}>
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
            Tvorba webu
          </button>
          <button class={text2} onClick$={() => menuFunction(2)}>
            Údžba a bezpečnost
          </button>
          <button class={text3} onClick$={() => menuFunction(3)}>
            SEO
          </button>
        </div>
      </div>
    </div>
  );
});
