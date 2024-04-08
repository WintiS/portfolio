import { component$ } from "@builder.io/qwik";
import { LuCheckCheck } from "@qwikest/icons/lucide";
import { SmallCell } from "./smallcell";

export const Cell = component$(() => {
  return (
    <nav aria-label="Progress">
      <ol role="list" class="overflow-hidden">
        <li class="relative pb-10">
          <div
            class="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-primary"
            aria-hidden="true"
          ></div>
          <div class="group relative flex items-start" aria-current="step">
            <span class="flex h-9 items-center" aria-hidden="true">
              <span class="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary bg-white">
                <span class="h-2.5 w-2.5 rounded-full bg-primary"></span>
              </span>
            </span>
            <span class="ml-4 flex min-w-0 flex-col">
              <span class="text-sm font-medium text-primary">
                První kontakt
              </span>
              <span class="text-sm text-gray-500">
                Vyplníte formulář na konci stránky a je to!
              </span>
            </span>
          </div>
        </li>
        {/* */}
        <SmallCell
          heading="Úvodní konzultace"
          content="Setkání nebo komunikace prostřednictvím e-mailu či telefonu, kde probereme vaše požadavky, cíle a představy ohledně webové stránky."
        />
        <SmallCell
          content="Na základě naší konzultace a analýzy začnu vytvářet návrh a koncept vašeho webu."
          heading="Ůvodní návrh"
        />
        <SmallCell
          content="Před pokračováním do finální fáze vývoje vám předložíme můj návrh a budu otevřen vašemu feedbacku a připomínkám. I při tomto bodu stále nic neplatíte."
          heading="Zpětná Vazba"
        />
        <SmallCell
          content="Jakmile bude návrh schválen, začnu s vývojem a implementací webové stránky."
          heading="Vývoj"
        />
        <SmallCell
          content="Zde s vámi celý web projdu a následně znovu otestuji a upravím podle vašich připomínek, dokud nebudete naprosto spokojeni."
          heading="Finalizace a testování"
        />

        <li class="relative pb-10">
          <div class="group relative flex items-start" aria-current="step">
            <span class="flex h-9 items-center" aria-hidden="true">
              <span class="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary bg-white">
                <LuCheckCheck class={"text-xl text-primary"} />
              </span>
            </span>
            <span class="ml-4 flex min-w-0 flex-col">
              <span class="text-sm font-medium text-primary">
                Odevzdání a Školení
              </span>
              <span class="text-sm text-gray-500">
                Zde vám předám hotovou webovou stránku. Pokud budete chtít,
                poskytnu vám také školení, abyste se naučili spravovat a
                aktualizovat obsah na svém webu sami.
              </span>
            </span>
          </div>
        </li>
      </ol>
    </nav>
  );
});
