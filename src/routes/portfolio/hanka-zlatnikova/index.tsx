import { component$, useSignal } from "@builder.io/qwik";
import { Navigation } from "~/components/nav/navigation";
import { Phonemodal } from "~/components/nav/phonemodal";
import { Redirect } from "~/components/portfolio/redirect";
import { Techstack } from "~/components/portfolio/techstack";
import { Wrapper } from "~/components/portfolio/wrapper";

export default component$(() => {
  const menustate = useSignal(false);

  return (
    <div>
      <Navigation menustate={menustate} />

      <div
        class={" hidden h-[88vh] items-center justify-center md:flex"}
        style={`background-image:
        linear-gradient(to bottom, rgba(23, 23, 23, 0.74), rgba(23, 23, 23, 0.80)),
        url('/hankalanding.png');
         background-position: right top;
         background-size: cover;`}
      >
        <div class={"w-3/4"}>
          <h1 class={"mb-1 text-2xl"}>
            Hanka Zlatníková: Konverzní stránka pro osobní prezentaci, prodej
            e-booků a jídelníčků.
          </h1>
          <h2 class={"mb-4 text-lg"}>
            Jak jsem postupoval při vytváření zejména prodejní webovky pro
            influencerku @hanka_rainbow_fairy (přes 255 tis. sledujících)
          </h2>
          <Redirect url="hankazlatnikova.cz" />
        </div>
      </div>
      <div
        class={" flex h-[78vh] items-center justify-center md:hidden"}
        style={`background-image:
        linear-gradient(to bottom, rgba(23, 23, 23, 0.74), rgba(23, 23, 23, 0.80)),
        url('/hankacartmobile.png');
         background-position: center;
         background-size: cover;`}
      >
        <div class={"w-3/4"}>
          <h1 class={"text-xl"}>
            Hanka Zlatníková: Konverzní stránka pro osobní prezentaci, prodej
            e-booků a jídelníčků
          </h1>
          <h2 class={"mb-6"}>
            Jak jsem postupoval při vytváření zejména prodejní webovky pro
            influencerku @hanka_rainbow_fairy (přes 255 tis. sledujících)
          </h2>
          <Redirect url="hankazlatnikova.cz" />
        </div>
      </div>
      <div class={"flex justify-center py-12"}>
        <div class={"textik w-3/4 md:w-2/3"}>
          <Techstack>
            <li>Javascript</li>
            <li>HTML & CSS</li>
            <li>Stripe payment system</li>
          </Techstack>
        </div>
      </div>
      <div class={"flex justify-center py-10"}>
        <div class={"textik w-3/4 md:w-2/3"}>
          <h3 class={"mb-6 text-xl"}>O klientce</h3>
          <div>
            <p>
              Hanka Zlatníková je influencerka s dlouholetými zkušenostmi v
              oboru. Tvoří zdravé a hravé video-recepty na svůj instagram,
              většinou v podobě reelsek.
            </p>
            <p>
              Začínala od tvoření barevných ovesných kaší, kterými zaujala a
              následně se vypracovala postupným inovováním svého obsahu až na
              jednu z největších českých influencerů v oblasti krátkých
              video-receptů.
            </p>
          </div>
        </div>
      </div>
      <div class={"flex justify-center py-10"}>
        <Wrapper title="Zadání">
          <div>
            <p>
              Hanka mě oslovila s žádostí, že by chtěla začít prodávat svůj
              e-book, a za tímto účelem potřebovala svoji webovou stránku.
              Chtěla vzhledově jednoduchou, ale uživatelsky přívětivou webovku.
              Zbytek nechala převážně na mně.
            </p>
          </div>
        </Wrapper>
      </div>
      <div class={"flex justify-center py-10"}>
        <div class={"textik w-3/4 md:w-2/3"}>
          <div
            class={
              "h-[36rem] w-full rounded-sm  bg-[url('/hankamobile.png')] bg-cover md:h-96 md:bg-[url('/hankacart.jpeg')]"
            }
          ></div>
        </div>
      </div>
      <div class={"flex justify-center py-10"}>
        <Wrapper title="Proces">
          <div>
            <p class={"mb-2"}>
              Hance jsem prvně představil všechny možnosti, kterými se dá web
              tvořit. Nakonec jsme usoudili, že pro její potřeby bude stačit na
              míru dělaný osobní web. Hanka chtěla originalitu a profesionalitu,
              proto jsme se shodli, že nebudeme používat žádné šablony, ale web
              vytvoříme přesně takovým způsobem, jakým si Hanka bude přát.
            </p>
            <p>
              Prvně jsem si připravil wireframes. Rozvrh jsem, jak bude web
              přibližně vypadat. Poté jsme s Hankou zvolili barevnou paletu.
              Cílil jsem na jednoduchost webu, a proto jsem použil jen dvě barvy{" "}
              <span class={"text-[#ffefef]"}>#ffefef</span> (+ její odstíny) a
              bílou.
            </p>
            <p>
              Jakmile byl design webu hotový, celý web jsem přivedl k životu
              napsáním příslušného kódu. S Hankou jsme ještě upravili pár
              detailů. Nakonec zbývalo jen přidat funkcionalitu pomocí
              javascriptu a integrování platební brány stripe. Zapojením
              platební brány jsem Hanku kompletně provedl.
            </p>
            <p>
              Na závěr jsem Hance pomohl s koupí domény a hostingu pro web a
              pomohl jí web nahrát na hosting a tím uvést do světa.
            </p>
          </div>
        </Wrapper>
      </div>
      <div class={"flex justify-center py-10"}>
        <Wrapper title="Výsledek">
          <div>
            <p class={""}>
              Hance se investice do webu vrátila více než 10x. Společně jsme
              vytvořili web, který prodává a zároveň Hanku reprezentuje v online
              prostředí. Hanka byla s mojí prací spokojená a s následujícími
              měsíci mě požádala o přidání několika dalších sekcí na její web.
            </p>
          </div>
        </Wrapper>
      </div>
      <div class={"flex justify-center py-10"}>
        <div class={"textik w-3/4 md:w-2/3"}>
          <div
            class={
              "h-[36rem] w-full rounded-sm  bg-[url('/hankacheckoutmobile.png')] bg-cover md:h-96 md:bg-[url('/hankacheckout.jpeg')]"
            }
          ></div>
        </div>
      </div>
      <div class={"flex justify-center py-10"}>
        <Wrapper title="Recenze Klientky">
          <div>
            <p class={""}>Lorem ipsum.</p>
          </div>
        </Wrapper>
      </div>

      <Phonemodal menustate={menustate} />
    </div>
  );
});
