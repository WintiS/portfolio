import { type Signal, component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { Image } from "@unpic/qwik";

interface Props {
  menustate: Signal<boolean>;
}
export const Navigation = component$((props: Props) => {
  const menustate = props.menustate;
  const underlineClass =
    "relative cursor-pointer transition-all ease-in-out before:absolute before:bottom-0 before:left-[50%] before:h-[3px] before:w-0 before:origin-center before:bg-seconadry before:transition-[width] before:duration-500 before:ease-in-out after:absolute after:bottom-0 after:right-[50%] after:h-[3px] after:w-0 after:origin-center after:bg-seconadry after:transition-[width] after:duration-500 after:ease-in-out hover:before:w-[50%] hover:after:w-[50%]";

  return (
    <div class={" flex h-20 items-end justify-center bg-background  md:pt-4"}>
      <div class={"flex w-3/4 items-center justify-between md:w-2/3"}>
        <Link
          href="/"
          class={
            "flex flex-col justify-center transition-transform hover:scale-110"
          }
        >
          <Image
            src="/wintispng.png"
            layout="fixed"
            width={70}
            height={70}
            alt="wintis"
          />
        </Link>

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
              <a href="/#services" class={underlineClass}>
                Služby
              </a>
            </ul>
            <ul>
              <a href="/#projects" class={underlineClass}>
                Portfolio
              </a>
            </ul>
            <ul>
              <Link href="/#about" class={underlineClass}>
                O mně
              </Link>
            </ul>
            <ul>
              <a
                href="/#form"
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
