import { component$ } from "@builder.io/qwik";
import { LuArrowRight } from "@qwikest/icons/lucide";

export const HeaderButton = component$(() => {
  return (
    <div>
      <button
        class={"absolute mt-3  rounded bg-seconadry/40 px-12 py-3 text-xl "}
      >
        Moje práce
      </button>
      <a
        class={
          "absolute ml-3 flex items-center gap-1 rounded bg-seconadry px-10 py-3 text-xl transition-all hover:-mb-1 hover:ml-4"
        }
        href="#projects"
      >
        Moje práce <LuArrowRight />
      </a>
    </div>
  );
});
