import { type Signal, component$, useSignal } from "@builder.io/qwik";

interface Props {
  menustate: Signal<boolean>;
}
export const Navigation = component$((props: Props) => {
  const menustate = props.menustate;

  return (
    <div class={" h-[9vh] bg-background"}>
      <div class={"flex items-center justify-around"}>
        <img
          src="https://i.ibb.co/kJxTYHM/wintis-logo-removebg.png"
          alt="logo-wintis"
          width={70}
          height={70}
        />
        <div class={"-translate-x-4 translate-y-2 md:translate-y-0"}>
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
        <div>
          <nav class={"flex gap-6 text-sm"}>
            <ul>
              <a href="#">Služby</a>
            </ul>
            <ul>
              <a href="#">Portfolio</a>
            </ul>
            <ul>
              <a href="#">O mně</a>
            </ul>
            <ul>
              <a href="#" class={"rounded bg-seconadry px-4 py-3"}>
                Kontaktujte mě
              </a>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
});
