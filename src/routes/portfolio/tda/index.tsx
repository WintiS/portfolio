import { component$, useSignal } from "@builder.io/qwik";
import { Navigation } from "~/components/nav/navigation";
import { Phonemodal } from "~/components/nav/phonemodal";
import { Techstack } from "~/components/portfolio/techstack";
import { Wrapper } from "~/components/portfolio/wrapper";

export default component$(() => {
  const menustate = useSignal(false);

  return (
    <div>
      <Navigation menustate={menustate} />

      <div
        class={" flex h-[78vh] items-center justify-center"}
        style={`background-image:
        linear-gradient(to bottom, rgba(23, 23, 23, 0.65), rgba(23, 23, 23, 0.60)),
        url('/tdapresent2.jpg');
         background-position: right top;
         background-size: cover;`}
      >
        <div class={"w-3/4"}>
          <h1 class={"mb-1 text-2xl"}>
            TourDeApp: Soutěž ve vývoji webových aplikací
          </h1>
          <h2 class={"text-lg"}>
            Jak se náš tým umístil na 6. místě v soutěži s konkurencí více než
            150+ týmů.
          </h2>
        </div>
      </div>
      <div class={"flex justify-center py-12"}>
        <div class={"textik w-3/4 md:w-2/3"}>
          <Techstack>
            <li>Typescript</li>
            <li>Javascript</li>
            <li>Framework QWIK</li>
            <li>Github</li>
            <li>Figma</li>
            <li>Meillisearch</li>
            <li>Tailwind CSS</li>
          </Techstack>
        </div>
      </div>
      <div class={"flex justify-center py-10"}>
        <div class={"textik w-3/4 md:w-2/3"}>
          <h3 class={"mb-6 text-xl"}>Koncept soutěže</h3>
          <div>
            <p>
              Soutěžící musí projít třemi koly soutěže, v každém na ně čeká
              zadání webové aplikace od fiktivní firmy Teacher Digital Agency.
            </p>
            <p>
              Aplikaci musí vytvořit a odevzdat. Aby postoupili do dalšího kola,
              musí jejich aplikace od pořadatelů získat více bodů než aplikace
              ostatních týmů. Hodnotí se jak funkčnost aplikace, tak UI/UX..
            </p>
          </div>
        </div>
      </div>
      <div class={"flex justify-center py-10"}>
        <Wrapper title="První - nominační kolo">
          <div>
            <p>
              V tomto kole bylo hlavním principem ukázat, že opravdu dokážeme
              odevzdat alespoň jednoduchou webovou aplikaci.
            </p>
            <p>
              Zadáním bylo vytvořit online vizitku lektora pro fiktivní firmu,
              která poskytuje doučování. Single-page vizitka měla být dynamická,
              tzn. že podle specifikace v URL se vybere z databáze lektor, který
              se zobrazí.
            </p>
          </div>
        </Wrapper>
      </div>
      <div class={"flex justify-center py-10"}>
        <div class={"textik w-3/4 md:w-2/3"}>
          <div class={"flex justify-around"}>
            <div
              class={`imageslide hidden h-96  w-1/4 rounded-lg bg-[url('/slide1.jpg')] bg-cover md:block`}
            ></div>
            <div
              class={` h-96 w-full -translate-y-4 rounded-lg bg-[url('/slide3.jpg')] bg-cover md:w-1/4 `}
            ></div>
            <div
              class={`imageslide hidden h-96   w-1/4 rounded-lg bg-[url('/slide2.jpg')] bg-cover md:block`}
            ></div>
          </div>
        </div>
      </div>
      <div class={"flex justify-center py-10"}>
        <Wrapper title="Rozdělení v týmu">
          <div>
            <p>
              <span class={"text-primary"}>Frontend</span> - Já jsem pracoval na
              frontendu, navrhoval UI/UX ve figmě a následně psal front-end kód.
            </p>
            <p>
              <span class={"text-primary"}>Backend</span> - Matyáš se staral o
              backend. Měl na starosti, aby aplikace opravdu fungovala.
            </p>
            <p>
              <span class={"text-primary"}>Full-stack</span> - Tom byl náš
              team-leader. Jako full-stack developer měl potřebné zkušenosti aby
              vše dával dohromady a kde jsme Matyášem nestačili, tam pomáhal.
            </p>
          </div>
        </Wrapper>
      </div>
      <div class={"flex justify-center py-10"}>
        <Wrapper title="Druhé kolo - soutěžní kolo">
          <div>
            <p class={"mb-2"}>
              Prvním kolem jsme hladce prošli (na 3. místě v celkovém hodnocení)
              a teď přišel čas se začít opravdu snažit. Naším úkolem pro toto
              kolo bylo pokračovat v rozpracovaném projektu z minulého kola a
              vytvořit k němu vyhledávání všech lektorů v databázi. Zároveň jsme
              měli přidat způsob rezervace lektorů, kdy si návštěvníci webu
              budou moci zamluvit hodinu v lektorském kalendáři. Proto bylo
              nutné vytvořit přihlašovací systém pro lektory. Nesměli jsme
              zapomenout ani na možnost exportování kalendáře pro lektory.
            </p>
            <p>
              Celkově pro nás byla určitě nejtěžší rezervace lektorů. Dlouho
              jsme hledali řešení, jak rezervace vizualizovat. Poté co jsem už
              celý front-end naprogramoval, náš mentor (odborník, který našemu
              týmu poskytoval feedback k aplikaci) nám na schůzce sdělil, že
              takhle vizualizace rezervací lektorů vůbec vypadat nemá a máme ji
              celou přepracovat. Kvůli tomuto doporučení jsme nestačili dokončit
              veškeré prvky, které jsme původně zamýšleli.
            </p>
          </div>
        </Wrapper>
      </div>
      <div class={"flex justify-center py-10"}>
        <Wrapper title="Třetí kolo - GrandFinále">
          <div>
            <p class={"mb-2"}>
              I přes komplikace v předchozím kole se našemu týmu podařilo
              postoupit do top 20 týmů, které se zúčastní finále na Fakultě
              Informatiky MU v Brně.
            </p>
            <p class={"mb-2"}>
              Finále trvalo 3 dny, od pátku do neděle. Hlavní část byla v
              sobotu. Ráno nám bylo sděleno zadání a měli jsme 8 hodin na to jej
              převést do reality. Opět jsme měli vytvořit aplikaci s
              vyhledáváním a s možností vlastního doplňování do databáze. V
              průběhu dne jsme opět měli možnost konzultovat naši aplikaci s
              mentory, kteří k ní poskytli cenný feedback.
            </p>
            <p class={"mb-2"}>
              Ke konci dne jsme se opět ocitli v časové tísni a takřka v
              poslední minutě odevzdali fungující aplikaci. Zpětně jsme se
              shodli, že jsme věnovali příliš času UI design a spíše jsme se
              měli zaměřit na odstranění technických nedostatků.
            </p>
            <p class={"mb-2"}>
              Z toho důvodu jsme další den (v neděli) neočekávali výrazný
              úspěch. Když jsme uviděli jméno našeho týmu (gummy elephant) v
              seznamu postupujících do finálového kola (7 týmů), byli jsme
              upřímně překvapeni.
            </p>
            <p class={"mb-2"}>
              Nebylo ale času nazbyt. Naším finálním úkolem bylo odprezentovat
              naši aplikaci před porotou odborníků a před všemi ostatními
              účastníky a pořadateli. Samozřejmě jsme měli trému, ale nakonec se
              nám podařilo připravit prezentaci včetně argumentace vystoupit na
              stage. Našim úkolem bylo obhájit, proč by měli majitelé fiktivní
              firmy investovat právě do naší aplikace.
            </p>
            <p>
              Zásluhou kvalitního představení a obhajoby našeho projektu jsme si
              vysloužili v dílčím hodnocení prezentace 4. místo. Celkově jsme se
              i díky této schopnosti umístili v soutěži na 6. místě z celkového
              počtu cca 150 týmů.
            </p>
          </div>
        </Wrapper>
      </div>
      <div class={"flex justify-center py-10"}>
        <Wrapper title="Závěr">
          <div>
            <p>
              Odnesl jsem si opravdu hodně cenných zkušeností od kolegů i
              mentorů. Zároveň jsem dostal možnost vyzkoušet si jak vypadá
              proces tvorby webové aplikace pro velkou společnost.
            </p>
          </div>
        </Wrapper>
      </div>
      <div class={"flex justify-center py-10"}>
        <div class={"textik w-3/4 md:w-2/3"}>
          <div class={"flex flex-col justify-around md:flex-row"}>
            <div
              class={` m-1  h-56 w-full rounded-lg bg-[url('/biggrand.jpg')] bg-cover md:h-72 md:w-1/2`}
            ></div>
            <div
              class={` m-1 h-56 w-full rounded-lg bg-[url('/biggrand2.jpg')] bg-cover md:h-72 md:w-1/2 `}
            ></div>
          </div>
        </div>
      </div>
      <Phonemodal menustate={menustate} />
    </div>
  );
});
