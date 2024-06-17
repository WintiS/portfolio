import { type Signal, component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { Image } from "@unpic/qwik";

interface Props {
  menustate: Signal<boolean>;
}
export const Navigation = component$((props: Props) => {
  const menustate = props.menustate;
  const underlineClass =
    "relative cursor-pointer transition-all ease-in-out before:absolute before:bottom-0 before:left-[50%] before:h-[2px] before:w-0 before:origin-center before:bg-seconadry before:transition-[width] before:duration-500 before:ease-in-out after:absolute after:bottom-0 after:right-[50%] after:h-[2px] after:w-0 after:origin-center after:bg-seconadry after:transition-[width] after:duration-500 after:ease-in-out hover:before:w-[50%] hover:after:w-[50%]";

  return (
    <div class={" h-[9vh] bg-background md:py-2 md:pt-6"}>
      <div class={"flex items-center justify-around"}>
        <Link href="#">
          <Image
            src="wintis.svg"
            layout="fixed"
            width={60}
            height={60}
            alt="wintis"
          />
        </Link>
        <div
          class={
            "-translate-x-4 translate-y-2 text-lg md:-translate-x-20 md:translate-y-0"
          }
        >
          <span class={"text-primary"}>V</span>
          ítězsla
          <span class={"text-primary"}>v</span>
          {""} Ším
          <span class={"text-primary"}>a</span>
        </div>
        <div
          onClick$={() => {
            menustate.value = !menustate.value;
          }}
          class={"md:hidden"}
        >
          <div
            class={`tham ${menustate.value ? "tham-active" : ""} tham-e-squeeze tham-w-10`}
          >
            <div class="tham-box">
              <div class="tham-inner bg-white" />
            </div>
          </div>
        </div>
        <div class={"hidden md:block"}>
          <nav class={"flex gap-6 text-sm"}>
            <ul>
              <a href="#services" class={underlineClass}>
                Služby
              </a>
            </ul>
            <ul>
              <a href="#projects" class={underlineClass}>
                Portfolio
              </a>
            </ul>
            <ul>
              <Link href="#about" class={underlineClass}>
                O mně
              </Link>
            </ul>
            <ul>
              <a
                href="#form"
                class={
                  "cursor-pointer rounded bg-seconadry px-6 py-3 transition-all duration-200 hover:bg-primary"
                }
              >
                Kontaktujte mě
              </a>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
});
