import { component$ } from "@builder.io/qwik";
import { LuArrowRight } from "@qwikest/icons/lucide";

export const HeaderButton = component$(() => {
  return (
    <div>
      <button
        class={"absolute mt-3  rounded bg-primary/70 px-14 py-4 text-xl "}
      >
        Moje práce
      </button>
      <a
        class={
          "absolute ml-3 flex items-center gap-1 rounded bg-primary px-12 py-4 text-xl transition-all hover:-mb-1 hover:ml-4"
        }
        href="#projects"
      >
        Moje práce <LuArrowRight />
      </a>
    </div>
  );
});
