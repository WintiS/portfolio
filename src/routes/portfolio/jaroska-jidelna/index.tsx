import { component$, useSignal } from "@builder.io/qwik";
import { Navigation } from "~/components/nav/navigation";
import { Phonemodal } from "~/components/nav/phonemodal";
import { ReturnBack } from "~/components/portfolio/back";
import { Redirect } from "~/components/portfolio/redirect";
import { Techstack } from "~/components/portfolio/techstack";
import { Wrapper } from "~/components/portfolio/wrapper";

export default component$(() => {
  const menustate = useSignal(false);

  return (
    <div>
      <Navigation menustate={menustate} />
      <Phonemodal menustate={menustate} />
      <div
        class={" hidden h-[88vh] items-center justify-center md:flex"}
        style={`background-image:
        linear-gradient(to bottom, rgba(23, 23, 23, 0.54), rgba(23, 23, 23, 0.60)),
        url('/jidelnalanding.png');
         background-position: right top;
         background-size: cover;`}
      >
        <div class={"w-3/4"}>
          <h1 class={"mb-1 text-2xl"}>
            Jaroska-jidelna online: Fotky u jídel ze školní jídelny
          </h1>
          <h2 class={"mb-4 text-lg"}>Zlehčení každodenního života studentů.</h2>
          <Redirect url="jaroska-jidelna.web.app" />
        </div>
      </div>
      <div
        class={" flex h-[78vh] items-center justify-center md:hidden"}
        style={`background-image:
        linear-gradient(to bottom, rgba(23, 23, 23, 0.74), rgba(23, 23, 23, 0.80)),
        url('/jidelnalandingmobile.png');
         background-position: top;
         background-size: cover;`}
      >
        <div class={"w-3/4"}>
          <h1 class={"text-xl"}>
            Jaroska-jidelna online: Fotky u jídel ze školní jídelny
          </h1>
          <h2 class={"mb-6"}>Zlehčení každodenního života studentů.</h2>
          <Redirect url="jaroska-jidelna.web.app" />
        </div>
      </div>
      <div class={"flex justify-center py-12"}>
        <div class={"textik w-3/4 md:w-2/3"}>
          <Techstack>
            <li>Typescript</li>
            <li>Javascript</li>
            <li>Framework QWIK</li>
            <li>Firebase cloud Storage</li>
            <li>Firebase Firestore</li>
            <li>Firebase cloud Functions</li>
            <li>Firebase Hosting</li>
            <li>GitHub</li>
            <li>APIs</li>
          </Techstack>
        </div>
      </div>

      <div class={"flex justify-center py-10"}>
        <Wrapper title="Zadání">
          <div>
            <p>
              Při objednávání jídel si studenti často nevěděli rady. K výběru
              jídel nejsou na webu jídelny žádné fotky a názvy jídel jsouc
              většinou velice špatně představitelné. Občas to byla opravdu
              loterie, co bude následující dny člověk obědvat.
            </p>
            <p>
              Já se rozhodl přijít s řešením, kdy k většině jídel postupně
              sesbírám fotky.
            </p>
          </div>
        </Wrapper>
      </div>

      <div class={"flex justify-center py-10"}>
        <Wrapper title="Představa">
          <div>
            <p class={"mb-2"}>
              Naplánoval jsem vytvořit aplikaci, kde bude možné nahrávat fotky
              jídel k jídlům, která se podávají ten den. Následně se uloží do
              databáze společně se jménem, které bude automaticky nahráno z
              oficiální stránky jídelny.
            </p>
            <p>
              V praxi to bude fungovat tak, že při obědě lidé vyfotí svůj oběd,
              následně ho můžou jednoduše nahrát do aplikace.
            </p>
            <p>
              Pokud si při výběru jídel nebudou strávníci vědět rady, můžou si,
              podle jména, jídlo v aplikaci vyhledat.
            </p>
          </div>
        </Wrapper>
      </div>
      <div class={"flex justify-center py-10"}>
        <div class={"textik w-3/4 md:w-2/3"}>
          <div
            class={
              "h-[36rem] w-full rounded-sm  bg-[url('/jaroskajidlamobile.png')] bg-cover bg-top md:h-96 md:bg-[url('/jidelnajidla.png')]"
            }
          ></div>
        </div>
      </div>
      <div class={"flex justify-center py-10"}>
        <Wrapper title="Proces">
          <div>
            <p class={"mb-2"}>
              Svoji vizi aplikace jsem pomocí frameworku QWIK naprogramoval do
              reality. Pro ukládání fotek do databáze jsem použil službu
              Firebase (její cloud storage, firestore a funkci pro zmenšování
              obrázků na stejnou velikost).
            </p>
            <p class={"mb-2"}>
              Každý den je potřeba zjistit, jaká jídla jsou právě ten den na
              oběd. Tohle jsem vyřešil pomocí napojení API ze serveru, který
              používá sám front-end web jídelny.
            </p>
            <p class={"mb-2"}>
              Základem byl i uživatelsky přívětivý design, který jsem postupně
              ladil, a zároveň jsem se držel jednoduchých barev.
            </p>
            <p class={"mb-2"}>
              Důležité je nezapomenout na to, že lidé nemusí vždy používat
              aplikaci k účelu, ke kterému byla určena. Proto je na místě zavést
              moderaci fotek, které jsou do aplikace nahrávány. Proto systém
              funguje tak, že se fotky po nahrání prvně uloží do databáze, kde
              jsou všechny neověřené fotky. Mně se poté zobrazí na stránce, ke
              které mám přístup jen já. Tam je buď schválím, nebo odmítnu. Pokud
              jsou fotky schválené, zobrazí v aplikaci(v sekci vyhledávání
              jídel).
            </p>
            <p class={""}>
              Nakonec jsem webovou aplikaci spustil a propagoval ji na
              instagramu školní jídelny.
            </p>
          </div>
        </Wrapper>
      </div>

      <div class={"flex justify-center py-10"}>
        <Wrapper title="Vize do budoucna">
          <div>
            <p>
              Databáze fotek obsahuje již něco přes 200 jídel. Do budoucna je v
              plánu naprogramovat chrome extension, která bude fotky zobrazovat
              už automaticky při objednávání jídel, bez nutnosti vyhledávání. A
              tím studentům opravdu ulehčí život.
            </p>
          </div>
        </Wrapper>
      </div>
      <div class={"flex justify-center py-10"}>
        <ReturnBack />
      </div>
    </div>
  );
});
