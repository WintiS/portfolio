import { $, component$, useSignal } from "@builder.io/qwik";

export const PostranaOne = component$(() => {
  const currentnavstate = useSignal(1);
  const nextnavstate = useSignal(1);
  const navclass = useSignal("");

  const text1 = useSignal("text-primary");
  const text2 = useSignal("text-white");
  const text3 = useSignal("text-white");
  const p1 = useSignal("");
  const p2 = useSignal("hidden");
  const p3 = useSignal("hidden");

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
    <>
      <div class={"mb-4 md:flex md:justify-end"}>
        <div class={"flex justify-around md:flex-col md:gap-12 md:px-4"}>
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
          Při naší spolupráci vám poskytnu osobní péči a individuální přístup,
          který bude odpovídat vašim potřebám a cílům. Bez ohledu na to, zda
          potřebujete osobní portfólio, firemní webové stránky nebo e-shop, mohu
          vám pomoci vytvořit web, který vás reprezentuje online a pomůže vám
          dosáhnout úspěchu. Kontaktujte mě ještě dnes a společně začneme
          pracovat na vašem úspěšném projektu!
        </p>
        <p class={p2.value}>
          Váš web je vaší digitální vizitkou, a je důležité zajistit jeho
          bezpečnost a správnou funkčnost. Nabízím služby údržby a zabezpečení
          webu, které vám pomohou udržet váš online prostor v bezpečí a v
          optimálním stavu. S pravidelnými aktualizacemi softwaru, monitorováním
          bezpečnostních hrozeb se postarám o to, aby váš web fungoval
          bezproblémově a byl chráněn před potenciálními útoky. Nechte mě starat
          se o technické detaily, abyste se mohli plně soustředit na své
          podnikání. Kontaktujte mě a já vám rád vše přiblížím.
        </p>
        <p class={p3.value}>
          Chcete, aby váš web byl snadno nalezen ve výsledcích vyhledávání a
          přilákal více návštěvníků? S pomocí SEO optimalizace mohu zlepšit
          viditelnost vašeho webu a pomoci vám dosáhnout vyšších pozic ve
          vyhledávačích. Od analýzy klíčových slov po optimalizaci obsahu a
          technických prvků webu se postarám o to, aby váš web byl optimalizován
          pro vyhledávací algoritmy a přilákal relevantní návštěvníky.
          Kontaktujte mě a já vám rád přiblížím, jak mohu zvýšit viditelnost
          vašeho webu a přinést vám více organického provozu.
        </p>
      </div>
    </>
  );
});
