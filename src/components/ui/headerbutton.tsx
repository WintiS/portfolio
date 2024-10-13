import { component$ } from "@builder.io/qwik";
import { LuArrowRight } from "@qwikest/icons/lucide";

export const HeaderButton = component$(() => {
  return (
    <div>
      <a
        href="#projects"
        class={
          "mb-4 inline-block items-center gap-1 rounded-[5px] border-2 border-primary bg-transparent px-5  py-3 transition-colors hover:bg-primary"
        }
      >
        <p class={"flex items-center gap-2"}>
          Portfolio projektů <LuArrowRight />
        </p>
      </a>
      <a
        href="#form"
        class={
          "inline-block  items-center gap-1 rounded-[5px] border-2 border-white bg-transparent px-5 py-3  transition-colors hover:border-primary hover:bg-primary"
        }
      >
        <p class={"flex items-center gap-2"}>
          Chci webovku <LuArrowRight />
        </p>
      </a>
    </div>
  );
});
